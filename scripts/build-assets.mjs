/**
 * Build optimized site assets:
 *   1. Responsive WebP versions of the authentic Grace Family Medical Clinic photos.
 *   2. Favicon / touch-icon / PWA icon set generated from the clinic logo.
 *
 * Run with:  node scripts/build-assets.mjs
 * Requires:  sharp, png-to-ico  (devDependencies)
 *
 * Source photos live in the user's Downloads folder and are checked in as
 * optimized WebP under public/images. Re-running is idempotent.
 */
import sharp from 'sharp';
import pngToIco from 'png-to-ico';
import { mkdir, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname).replace(/^\/([A-Za-z]:)/, '$1'), '..');
const SRC_DIR = process.env.PHOTOS_DIR || 'C:/Users/admin/Downloads';
const IMG_OUT = path.join(ROOT, 'public', 'images');
const PUB_OUT = path.join(ROOT, 'public');

const QUALITY = 82;

/** Photo -> output basename + responsive widths */
const PHOTOS = [
  { src: '20260602_165247.jpeg', name: 'grace-family-medical-clinic-exterior',        widths: [768, 1280, 1920, 2400] },
  { src: '20260602_165843.jpeg', name: 'grace-family-medical-clinic-reception',        widths: [640, 960, 1280, 1600] },
  { src: '20260602_165915.jpeg', name: 'grace-family-medical-clinic-exam-rooms',       widths: [640, 960, 1280, 1600] },
  { src: '20260602_170419.jpeg', name: 'grace-family-medical-clinic-reception-office', widths: [640, 960, 1280, 1600] },
  { src: '20260602_170050.jpeg', name: 'grace-family-medical-clinic-hallway',          widths: [640, 960, 1280, 1600] },
];

async function optimizePhotos() {
  await mkdir(IMG_OUT, { recursive: true });
  for (const photo of PHOTOS) {
    const srcPath = path.join(SRC_DIR, photo.src);
    if (!existsSync(srcPath)) {
      console.warn(`! Missing source photo (skipping): ${srcPath}`);
      continue;
    }
    const meta = await sharp(srcPath).metadata();
    for (const w of photo.widths) {
      if (w > meta.width) continue; // never upscale
      const out = path.join(IMG_OUT, `${photo.name}-${w}.webp`);
      await sharp(srcPath)
        .rotate() // respect EXIF orientation
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: QUALITY, effort: 6 })
        .toFile(out);
      console.log(`✓ ${path.relative(ROOT, out)}`);
    }
  }

  // Social-share OG image (1200x630) from the exterior shot.
  const ogSrc = path.join(SRC_DIR, PHOTOS[0].src);
  if (existsSync(ogSrc)) {
    const og = path.join(IMG_OUT, 'grace-family-medical-clinic-og.jpg');
    await sharp(ogSrc)
      .rotate()
      .resize({ width: 1200, height: 630, fit: 'cover', position: 'centre' })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(og);
    console.log(`✓ ${path.relative(ROOT, og)}`);
  }
}

async function buildFavicons() {
  const logo = path.join(PUB_OUT, 'logo-mark.svg');

  // Rasterize the SVG once at high resolution, then downscale for every size.
  const master = await sharp(logo, { density: 384 })
    .resize(1024, 1024, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer();

  // Transparent PNGs (browser tabs + Android/PWA).
  const pngSizes = [16, 32, 48, 192, 512];
  const pngBuffers = {};
  for (const size of pngSizes) {
    const buf = await sharp(master)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toBuffer();
    pngBuffers[size] = buf;
  }
  await writeFile(path.join(PUB_OUT, 'favicon-16x16.png'), pngBuffers[16]);
  await writeFile(path.join(PUB_OUT, 'favicon-32x32.png'), pngBuffers[32]);
  await writeFile(path.join(PUB_OUT, 'android-chrome-192x192.png'), pngBuffers[192]);
  await writeFile(path.join(PUB_OUT, 'android-chrome-512x512.png'), pngBuffers[512]);

  // Apple touch icon: opaque white background w/ padding (iOS ignores transparency).
  const appleInner = await sharp(master)
    .resize(148, 148, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .png()
    .toBuffer();
  await sharp({ create: { width: 180, height: 180, channels: 4, background: '#ffffff' } })
    .composite([{ input: appleInner, gravity: 'centre' }])
    .png()
    .toFile(path.join(PUB_OUT, 'apple-touch-icon.png'));

  // Multi-resolution favicon.ico (16/32/48).
  const ico = await pngToIco([pngBuffers[16], pngBuffers[32], pngBuffers[48]]);
  await writeFile(path.join(PUB_OUT, 'favicon.ico'), ico);

  // Web manifest.
  const manifest = {
    name: 'Grace Family Medical Clinic',
    short_name: 'Grace Family',
    description: 'Compassionate family healthcare, walk-in care, and chronic disease management in Edmonton.',
    icons: [
      { src: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { src: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    theme_color: '#2563eb',
    background_color: '#ffffff',
    display: 'standalone',
    start_url: '/',
  };
  await writeFile(path.join(PUB_OUT, 'site.webmanifest'), JSON.stringify(manifest, null, 2));

  console.log('✓ favicons + site.webmanifest');
}

await optimizePhotos();
await buildFavicons();
console.log('\nAll assets built.');
