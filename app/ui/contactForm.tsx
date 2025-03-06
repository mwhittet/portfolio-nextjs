'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ContactFormSchema, ContactFormType } from '@/app/types';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormType>({ resolver: zodResolver(ContactFormSchema) });
  const [successMessage, setSuccessMessage] = useState<string>('');
  const fieldStyling: string =
    'font-normal mt-2 w-full bg-white h-10 p-2 rounded-sm border border-dustyGray focus:outline-0 focus:ring-4 focus:ring-malibu/40 focus:border-malibu';

  const onSubmit = async (data: ContactFormType) => {
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSuccessMessage('Your message has been sent! Thank you!');
        reset();
      } else {
        setSuccessMessage('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSuccessMessage('An error has occurred. Please try again later.');
    }
  };

  return (
    <form
      className="flex flex-col mb-7 items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className="block mb-4 font-bold w-full sm:w-lg">
        Name:
        <input
          autoComplete="name"
          className={fieldStyling}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p className="font-normal !mt-2 text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </label>
      <label className="block mb-4 font-bold w-full sm:w-lg">
        Email address:
        <input
          autoComplete="email"
          className={fieldStyling}
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && (
          <p className="font-normal !mt-2 text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </label>
      <label className="block mb-4 font-bold w-full sm:w-lg">
        Message:
        <textarea
          className={`${fieldStyling} h-36`}
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && (
          <p className="font-normal !mt-2 text-red-600" role="alert">
            {errors.message.message}
          </p>
        )}
      </label>
      <button
        className="block bg-mineShaft text-white rounded-sm py-2 px-4 cursor-pointer transition-colors duration-500 ease-out hover:bg-international-orange"
        type="submit"
      >
        Send message
      </button>
      {successMessage && (
        <p className="!mt-4 text-green-600">{successMessage}</p>
      )}
    </form>
  );
}
