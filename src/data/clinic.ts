/**
 * Single source of truth for Grace Family Medical Clinic contact information.
 * Update values here to change them everywhere (header, footer, CTAs, schema, etc.).
 */
export const clinic = {
  name: 'Grace Family Medical Clinic',

  // Phone
  phoneDisplay: '(780) 652-2144',
  phoneHref: 'tel:+17806522144',

  // Fax
  faxDisplay: '(780) 798-2274',
  faxHref: 'tel:+17807982274',

  // Email
  email: 'admin@gracefamilymedicalclinic.com',
  emailHref: 'mailto:admin@gracefamilymedicalclinic.com',

  // Online booking (AVA EMR central booking)
  bookingUrl:
    'https://www.avaemr.ca/central_booking/booking_endpoints/b46cf523-9495-4164-8d29-1ebaf0ebc1ba/appointment_types',

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
