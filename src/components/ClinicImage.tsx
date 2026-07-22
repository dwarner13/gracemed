import React from 'react';

interface ClinicImageProps {
  /** Basename of the optimized image set, e.g. "grace-family-medical-clinic-reception" */
  name: string;
  /** Generated responsive widths that exist under /public/images */
  widths?: number[];
  /** The `sizes` attribute describing the rendered width at each breakpoint */
  sizes?: string;
  /** Descriptive, SEO-friendly alt text */
  alt: string;
  /** Intrinsic width/height used to reserve space and avoid layout shift (CLS) */
  width: number;
  height: number;
  className?: string;
  /** Set true for above-the-fold LCP images (disables lazy loading) */
  eager?: boolean;
}

/**
 * Responsive, lazy-loaded WebP image backed by pre-generated sizes in
 * /public/images. Reserves layout space via width/height to protect CLS.
 */
const ClinicImage = ({
  name,
  widths = [640, 960, 1280, 1600],
  sizes = '100vw',
  alt,
  width,
  height,
  className = '',
  eager = false,
}: ClinicImageProps) => {
  const srcSet = widths.map((w) => `/images/${name}-${w}.webp ${w}w`).join(', ');
  const fallback = `/images/${name}-${widths[widths.length - 1]}.webp`;

  return (
    <img
      src={fallback}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      // @ts-expect-error fetchPriority is a valid DOM attribute supported by React 18.3
      fetchpriority={eager ? 'high' : undefined}
      className={className}
    />
  );
};

export default ClinicImage;
