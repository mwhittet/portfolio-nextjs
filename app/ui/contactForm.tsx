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
          aria-describedby="name-error"
          className="font-normal mt-2 w-full bg-white h-10 p-2 rounded-sm border border-dustyGray focus:outline-0 focus:ring-4 focus:ring-malibu/40 focus:border-malibu"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && (
          <p
            className="font-normal !mt-2 text-red-600"
            id="name-error"
            role="alert"
          >
            {errors.name.message}
          </p>
        )}
      </label>
      <label className="block mb-4 font-bold w-full sm:w-lg">
        Email address:
        <input
          aria-describedby="email-error"
          className="font-normal mt-2 w-full bg-white h-10 p-2 rounded-sm border border-dustyGray focus:outline-0 focus:ring-4 focus:ring-malibu/40 focus:border-malibu"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && (
          <p
            className="font-normal !mt-2 text-red-600"
            id="email-error"
            role="alert"
          >
            {errors.email.message}
          </p>
        )}
      </label>
      <label className="block mb-4 font-bold w-full sm:w-lg">
        Message:
        <textarea
          aria-describedby="message-error"
          className="font-normal mt-2 w-full bg-white h-36 p-2 rounded-sm border border-dustyGray focus:outline-0 focus:ring-4 focus:ring-malibu/40 focus:border-malibu"
          {...register('message', { required: 'Message is required' })}
        />
        {errors.message && (
          <p
            className="font-normal !mt-2 text-red-600"
            id="message-error"
            role="alert"
          >
            {errors.message.message}
          </p>
        )}
      </label>
      <button
        className="block bg-mineShaft text-white rounded-sm p-2 pr-4 pl-4 cursor-pointer transition-colors duration-500 ease-out hover:bg-international-orange"
        type="submit"
      >
        Send message
      </button>
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}
