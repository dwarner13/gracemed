import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // In a real implementation, you would send this data to your backend
    console.log(data);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1000);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-5">
      {isSubmitted ? (
        <div className="flex flex-col items-center justify-center py-6">
          <CheckCircle size={42} className="text-green-500 mb-3" />
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Thanks for your request!</h3>
          <p className="text-sm text-gray-600 text-center">
            Your quote request has been sent successfully. We will get back to you shortly.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 font-medium mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 font-medium mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                {...register('email', { 
                  required: 'Email is required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Invalid email address'
                  }
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
            <div>
              <label htmlFor="phone" className="block text-sm text-gray-700 font-medium mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('phone')}
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm text-gray-700 font-medium mb-1">
                Service Needed *
              </label>
              <input
                type="text"
                id="subject"
                className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                {...register('subject', { required: 'Service selection is required' })}
              />
              {errors.subject && (
                <p className="text-red-500 text-xs mt-1">{errors.subject.message}</p>
              )}
            </div>
          </div>
          
          <div className="mb-3">
            <label htmlFor="message" className="block text-sm text-gray-700 font-medium mb-1">
              Message *
            </label>
            <textarea
              id="message"
              rows={4}
              className={`w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
              {...register('message', { required: 'Message is required' })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
            )}
          </div>
          
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md font-medium text-sm transition duration-300"
          >
            Request Quote
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;