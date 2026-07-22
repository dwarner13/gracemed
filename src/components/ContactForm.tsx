import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone?: string;
  reason?: string;
  'preferred-contact'?: string;
  message: string;
  'bot-field'?: string;
}

interface ContactFormProps {
  /** 'full' = contact page, 'compact' = shortened homepage version */
  variant?: 'full' | 'compact';
}

// Encode form data the way Netlify expects (application/x-www-form-urlencoded)
const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const FORM_NAME = 'contact';

const ContactForm = ({ variant = 'full' }: ContactFormProps) => {
  const isCompact = variant === 'compact';
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitError('');
    // Honeypot: if the hidden field is filled, silently drop (likely a bot).
    if (data['bot-field']) {
      setIsSubmitted(true);
      return;
    }

    const payload: Record<string, string> = { 'form-name': FORM_NAME };
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'bot-field' && value != null && value !== '') payload[key] = String(value);
    });

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(payload),
      });
      if (!res.ok) throw new Error('Network response was not ok');
      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError('Something went wrong sending your message. Please try again or call us directly.');
    }
  };

  const inputBase =
    'w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-md">
        <div className="flex flex-col items-center justify-center py-6 text-center">
          <CheckCircle size={48} className="mb-3 text-green-500" />
          <h3 className="mb-1 text-xl font-semibold text-gray-900">Thank You!</h3>
          <p className="max-w-md text-gray-600">
            Your message has been sent successfully. A member of our team will get back to you as soon
            as possible during clinic hours.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md md:p-6">
      {/*
        Netlify form. Field names must stay in sync with the hidden detection
        form in index.html so Netlify registers them at build time.
      */}
      <form
        name={FORM_NAME}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* Netlify hidden inputs */}
        <input type="hidden" name="form-name" value={FORM_NAME} />
        <p className="hidden">
          <label>
            Don't fill this out if you're human: <input {...register('bot-field')} />
          </label>
        </p>

        <div className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
          <div>
            <label htmlFor="cf-name" className="mb-1 block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              id="cf-name"
              autoComplete="name"
              className={`${inputBase} ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="cf-email" className="mb-1 block text-sm font-medium text-gray-700">
              Email Address *
            </label>
            <input
              type="email"
              id="cf-email"
              autoComplete="email"
              className={`${inputBase} ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email address',
                },
              })}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        {!isCompact && (
          <>
            <div className="mb-3 grid grid-cols-1 gap-3 md:grid-cols-2">
              <div>
                <label htmlFor="cf-phone" className="mb-1 block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="cf-phone"
                  autoComplete="tel"
                  className={`${inputBase} border-gray-300`}
                  {...register('phone')}
                />
              </div>

              <div>
                <label htmlFor="cf-preferred" className="mb-1 block text-sm font-medium text-gray-700">
                  Preferred Contact Method
                </label>
                <select
                  id="cf-preferred"
                  className={`${inputBase} border-gray-300 bg-white`}
                  {...register('preferred-contact')}
                  defaultValue="Email"
                >
                  <option value="Email">Email</option>
                  <option value="Phone">Phone</option>
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="cf-reason" className="mb-1 block text-sm font-medium text-gray-700">
                Reason for Contact
              </label>
              <select
                id="cf-reason"
                className={`${inputBase} border-gray-300 bg-white`}
                {...register('reason')}
                defaultValue="General Inquiry"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Appointment Request">Appointment Request</option>
                <option value="Prescription Renewal">Prescription Renewal</option>
                <option value="Billing or Insurance">Billing or Insurance</option>
                <option value="Feedback">Feedback</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </>
        )}

        <div className="mb-3">
          <label htmlFor="cf-message" className="mb-1 block text-sm font-medium text-gray-700">
            Message *
          </label>
          <textarea
            id="cf-message"
            rows={isCompact ? 3 : 5}
            className={`${inputBase} ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            {...register('message', { required: 'Message is required' })}
          ></textarea>
          {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
        </div>

        {submitError && (
          <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">{submitError}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-2.5 text-sm font-semibold text-white transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Sending…' : 'Send Message'}
        </button>

        {/* Privacy notice */}
        <p className="mt-4 text-xs leading-relaxed text-gray-500">
          Please do not include confidential or sensitive medical information in this contact form. If
          you require urgent medical assistance, call 911 or visit your nearest emergency department.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
