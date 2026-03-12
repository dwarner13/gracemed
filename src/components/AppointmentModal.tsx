import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal = ({ isOpen, onClose }: AppointmentModalProps) => {
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

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg bg-white shadow-xl">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close quote request form"
          className="absolute right-3 top-3 rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="px-4 pt-5 pb-2 md:px-5 md:pt-6">
          <h2 className="text-2xl font-bold text-gray-900">Request a Free Quote</h2>
          <p className="mt-1 text-sm text-gray-600">
            Fill out this quick form and our team will contact you shortly.
          </p>
        </div>

        <div className="px-4 pb-5 md:px-5 md:pb-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
