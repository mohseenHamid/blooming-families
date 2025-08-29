"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import SessionCalendar from '@/components/SessionCalendar'
import BookingForm, { BookingFormData } from '@/components/BookingForm'
import { Button } from '@/components/ui/Button'
import { safeBack } from '@/lib/navigation'
import type { Booking } from '@/types/booking'

// Booking type is centralized in src/types/booking.ts

export default function BookSessionPage() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [selectedTime, setSelectedTime] = useState<string>()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSelectSlot = (date: Date, time: string) => {
    setSelectedDate(date)
    setSelectedTime(time)
  }

  const handleBookingSubmit = async (formData: BookingFormData) => {
    if (!selectedDate || !selectedTime) return

    setIsSubmitting(true)
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Create booking object
    const booking: Booking = {
      ...formData,
      id: `booking_${Date.now()}`,
      date: selectedDate,
      time: selectedTime,
      status: 'confirmed',
      createdAt: new Date()
    }

    // Store in localStorage for testing
    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    existingBookings.push(booking)
    localStorage.setItem('bookings', JSON.stringify(existingBookings))

    // Redirect to confirmation
    localStorage.setItem('latestBooking', JSON.stringify(booking))
    router.push('/coaching/confirmation')
  }

  return (
    <section className="min-h-screen py-20 md:py-24 pb-24 bg-gradient-to-br from-background-light via-background-white to-background-light">
      <div className="page-container">
        <div className="page-header-row">
          <div className="flex items-center justify-between gap-4">
            <h1 className="page-title">
              Book your coaching session
            </h1>
            <Button
              variant="outline"
              onClick={() => safeBack(router, '/coaching')}
              aria-label="Go back"
            >
              Back
            </Button>
          </div>
          <p className="page-intro">
            Select your preferred date and time, then complete your booking details
          </p>
          {/* Info banner: sessions are online */}
          <div className="mt-3 inline-flex items-start gap-3 rounded-md border border-primary-green/20 bg-primary-green/10 px-4 py-3 text-sm text-primary-navy">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-green mt-0.5">
              <rect x="3" y="7" width="12" height="10" rx="2" ry="2" />
              <path d="M21 8l-5 3v2l5 3V8z" fill="currentColor" />
            </svg>
            <span>All coaching sessions are held online via Zoom. A secure meeting link is provided after booking.</span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="relative mb-10"
          aria-hidden="true"
        >
          <div className="h-[3px] w-full bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calendar Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-semibold text-primary-navy">
              1. Choose date and time
            </h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <SessionCalendar
                onSelectSlot={handleSelectSlot}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
              />
            </div>
          </div>

          {/* Booking Form Section */}
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-semibold text-primary-navy">
              2. Your details
            </h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <BookingForm
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                onSubmit={handleBookingSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
