/**
 * Single source of truth for Grace Family Medical Clinic contact information.
 * Update values here to change them everywhere (header, footer, CTAs, schema, etc.).
 */
export const clinic = {
  name: 'Grace Family Medical Clinic',

  // Phone
  phoneDisplay: '(780) 669-9215',
  phoneHref: 'tel:+17806699215',

  // Fax
  faxDisplay: '(780) 798-2274',
  faxHref: 'tel:+17807982274',

  // Email
  email: 'admin@gracefamilymedicalclinic.com',
  emailHref: 'mailto:admin@gracefamilymedicalclinic.com',

  // Address
  addressLine1: '14717 40 Ave NW',
  addressLine2: 'Edmonton, AB T6R 1N1',
  streetAddress: '14717 40 Ave NW',
  city: 'Edmonton',
  region: 'AB',
  postalCode: 'T6R 1N1',
  country: 'CA',

  hours: 'Mon-Fri: 9am-7pm | Sat: 10am-5pm | Sun: Closed',
} as const;
