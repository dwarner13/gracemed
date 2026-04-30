import React, { useEffect, useState } from 'react';
import { X, CheckCircle } from 'lucide-react';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new URLSearchParams(new FormData(form) as any);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })
      .then(() => {
        setIsSubmitted(true);
        form.reset();
      })
      .catch(() => {
        alert('Something went wrong. Please try again.');
      });
  };

  const handleClose = () => {
    setIsSubmitted(false);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const inputClass =
    'w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-xl">
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close appointment form"
          className="absolute right-3 top-3 rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="px-4 pt-5 pb-2 md:px-5 md:pt-6">
          <h2 className="text-2xl font-bold text-gray-900">Book an Appointment</h2>
          <p className="mt-1 text-sm text-gray-600">
            Fill out this form and our team will contact you to confirm your appointment.
          </p>
        </div>

        <div className="px-4 pb-5 md:px-5 md:pb-6">
          <div className="bg-white rounded-lg shadow-md p-4 md:p-5">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-6">
                <CheckCircle size={42} className="text-green-500 mb-3" />
                <h3 className="text-lg font-semibold text-gray-800 mb-1">Thank You!</h3>
                <p className="text-sm text-gray-600 text-center">
                  Thank you. Your appointment request has been sent.
                </p>
              </div>
            ) : (
              <form
                name="appointment-booking"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="appointment-booking" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="appt-name" className="block text-sm text-gray-700 font-medium mb-1">
                      Full Name *
                    </label>
                    <input type="text" id="appt-name" name="name" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="appt-phone" className="block text-sm text-gray-700 font-medium mb-1">
                      Phone Number *
                    </label>
                    <input type="tel" id="appt-phone" name="phone" required className={inputClass} />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="appt-email" className="block text-sm text-gray-700 font-medium mb-1">
                    Email Address *
                  </label>
                  <input type="email" id="appt-email" name="email" required className={inputClass} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="appt-date" className="block text-sm text-gray-700 font-medium mb-1">
                      Preferred Date *
                    </label>
                    <input type="date" id="appt-date" name="preferred-date" required className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="appt-time" className="block text-sm text-gray-700 font-medium mb-1">
                      Preferred Time *
                    </label>
                    <input type="time" id="appt-time" name="preferred-time" required className={inputClass} />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="appt-reason" className="block text-sm text-gray-700 font-medium mb-1">
                    Reason for Visit *
                  </label>
                  <input type="text" id="appt-reason" name="reason" required className={inputClass} />
                </div>

                <div className="mb-3">
                  <label htmlFor="appt-message" className="block text-sm text-gray-700 font-medium mb-1">
                    Message
                  </label>
                  <textarea id="appt-message" name="message" rows={3} className={inputClass}></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium text-sm transition duration-300"
                >
                  Submit Request
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
