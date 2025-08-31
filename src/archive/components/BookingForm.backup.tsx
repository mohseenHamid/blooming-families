/* Archived copy of src/components/BookingForm.tsx */
"use client"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const bookingSchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  sessionType: z.enum(['zoom', 'in-person'], { required_error: 'Please select a session type' }),
  message: z.string().optional(),
})

export type BookingFormData = z.infer<typeof bookingSchema>

interface BookingFormProps {
  selectedDate?: Date
  selectedTime?: string
  onSubmit: (data: BookingFormData) => void
  isSubmitting?: boolean
}

export default function BookingForm({ selectedDate, selectedTime, onSubmit, isSubmitting }: BookingFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      sessionType: 'zoom'
    }
  })

  const hasTimeSlot = selectedDate && selectedTime

  return (
    <div className="space-y-6">
      {hasTimeSlot && (
        <div className="p-3 md:p-4 bg-primary-green/10 rounded-lg border border-primary-green/20">
          <h3 className="font-semibold text-primary-navy mb-2 text-base md:text-lg">Session details</h3>
          <p className="text-primary-navy">
            <strong>Date:</strong> {selectedDate.toLocaleDateString('en-GB', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
          <p className="text-primary-navy">
            <strong>Time:</strong> {selectedTime}
          </p>
          <p className="text-primary-navy">
            <strong>Duration:</strong> 1 hour
          </p>
          <p className="text-primary-navy">
            <strong>Format:</strong> Zoom video call (link provided after booking)
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 gap-3 md:gap-4">
          <div>
            <label className="block text-sm font-medium text-primary-navy mb-1">
              Full name *
            </label>
            <input
              {...register('name')}
              className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-primary-navy mb-1">
              Email address *
            </label>
            <input
              {...register('email')}
              type="email"
              className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-navy mb-2">
            Session type
          </label>
          {/* Hidden field to satisfy validation; only Zoom is offered */}
          <input type="hidden" value="zoom" {...register('sessionType')} />
          <div className="flex items-start p-2.5 md:p-3 border border-gray-300 rounded-md bg-gray-50">
            <div className="mr-3 mt-0.5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-green">
                <rect x="3" y="7" width="12" height="10" rx="2" ry="2" />
                <path d="M21 8l-5 3v2l5 3V8z" fill="currentColor" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-primary-navy text-sm md:text-base">Zoom video call</div>
              <div className="text-sm md:text-base text-text-grey">All sessions are held online via Zoom. You’ll receive a secure meeting link after booking.</div>
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-navy mb-1">
            Phone number *
          </label>
          <input
            {...register('phone')}
            type="tel"
            className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
            placeholder="Enter your phone number"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-primary-navy mb-1">
            Additional notes (optional)
          </label>
          <textarea
            {...register('message')}
            rows={4}
            className="w-full px-3 py-2 md:py-2.5 text-sm md:text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent"
            placeholder="Tell me a bit about what you'd like to focus on in our session..."
          />
        </div>

        <button
          type="submit"
          disabled={!hasTimeSlot || isSubmitting}
          className="w-full btn-secondary rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Booking session...' : hasTimeSlot ? 'Confirm booking' : 'Please select a time slot'}
        </button>
      </form>
    </div>
  )
}
