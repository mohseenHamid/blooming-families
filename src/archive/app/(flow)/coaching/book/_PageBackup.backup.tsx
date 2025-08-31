/* Archived copy of src/app/(flow)/coaching/book/_PageBackup.tsx */
"use client"

import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Local inline types and stubs to avoid importing from live app
type SessionType = 'zoom'
type BookingFormData = {
  name: string
  email: string
  phone: string
  sessionType: SessionType
  message?: string
}
type Booking = BookingFormData & {
  id: string
  date: Date
  time: string
  status: 'confirmed'
  createdAt: Date
}

function SessionCalendar(props: {
  onSelectSlot: (date: Date, time: string) => void
  selectedDate?: Date
  selectedTime?: string
}) {
  // Simple stub: provides a single selectable slot
  return (
    <div className="text-sm text-text-grey">
      <p className="mb-2">[Archive stub calendar]</p>
      <button
        type="button"
        className="btn-outline-green"
        onClick={() => props.onSelectSlot(new Date(), '09:00')}
      >
        Select today 09:00
      </button>
    </div>
  )
}

function BookingForm(props: {
  selectedDate?: Date
  selectedTime?: string
  isSubmitting: boolean
  onSubmit: (data: BookingFormData) => void
}) {
  const handleSubmit = () => {
    props.onSubmit({
      name: 'Archived User',
      email: 'archived@example.com',
      phone: '0000000000',
      sessionType: 'zoom',
      message: 'Archived booking form'
    })
  }
  return (
    <div className="text-sm text-text-grey">
      <p className="mb-2">[Archive stub booking form]</p>
      <button type="button" className="btn-secondary" onClick={handleSubmit} disabled={props.isSubmitting}>
        {props.isSubmitting ? 'Submitting…' : 'Submit'}
      </button>
    </div>
  )
}

function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'outline' | 'solid' }) {
  const { variant = 'solid', className = '', ...rest } = props
  const base = variant === 'outline' ? 'btn-outline-green' : 'btn-secondary'
  return <button {...rest} className={`${base} ${className}`} />
}

function safeBack(router: ReturnType<typeof useRouter>, fallback: string) {
  try { router.back() } catch { router.push(fallback) }
}

export default function BookSessionPageBackup() {
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
    await new Promise(resolve => setTimeout(resolve, 1000))

    const booking: Booking = {
      ...formData,
      id: `booking_${Date.now()}`,
      date: selectedDate,
      time: selectedTime,
      status: 'confirmed',
      createdAt: new Date()
    }

    const existingBookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    existingBookings.push(booking)
    localStorage.setItem('bookings', JSON.stringify(existingBookings))

    localStorage.setItem('latestBooking', JSON.stringify(booking))
    router.push('/coaching/confirmation')
  }

  return (
    <section className="min-h-screen py-20 md:py-24 pb-24 bg-gradient-to-br from-background-light via-background-white to-background-light">
      <div className="page-container">
        <div className="page-header-row">
          <div className="flex items-center justify-between gap-4">
            <h1 className="page-title">Book your coaching session</h1>
            <Button variant="outline" onClick={() => safeBack(router, '/coaching')} aria-label="Go back">Back</Button>
          </div>
          <p className="page-intro">Select your preferred date and time, then complete your booking details</p>
          <div className="mt-3 inline-flex items-start gap-3 rounded-md border border-primary-green/20 bg-primary-green/10 px-4 py-3 text-sm text-primary-navy">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-green mt-0.5">
              <rect x="3" y="7" width="12" height="10" rx="2" ry="2" />
              <path d="M21 8l-5 3v2l5 3V8z" fill="currentColor" />
            </svg>
            <span>All coaching sessions are held online via Zoom. A secure meeting link is provided after booking.</span>
          </div>
        </div>

        <div className="relative mb-10" aria-hidden="true">
          <div className="h-[3px] w-full bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-semibold text-primary-navy">1. Choose date and time</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <SessionCalendar onSelectSlot={handleSelectSlot} selectedDate={selectedDate} selectedTime={selectedTime} />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-heading font-semibold text-primary-navy">2. Your details</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <BookingForm selectedDate={selectedDate} selectedTime={selectedTime} onSubmit={handleBookingSubmit} isSubmitting={isSubmitting} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
