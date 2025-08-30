"use client"

import BulletIcon from '@/components/ui/BulletIcon'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import type { Booking } from '@/types/booking'

export default function ConfirmationPage() {
  const [booking, setBooking] = useState<Booking | null>(null)

  useEffect(() => {
    const latestBooking = localStorage.getItem('latestBooking')
    if (latestBooking) {
      const bookingData = JSON.parse(latestBooking)
      bookingData.date = new Date(bookingData.date)
      bookingData.createdAt = new Date(bookingData.createdAt)
      setBooking(bookingData)
    }
  }, [])

  if (!booking) {
    return (
      <section className="min-h-screen flex items-center py-20 md:py-24 pb-24 bg-gradient-to-br from-background-light via-background-white to-background-light">
        <div className="page-container text-center">
          <h1 className="text-2xl font-heading font-bold text-primary-navy mb-4">
            Booking not found
          </h1>
          <p className="text-text-grey mb-6">
            We couldn't find your booking details. Please try booking again.
          </p>
          <Link 
            href="/coaching/book"
            className="inline-block bg-primary-green hover:bg-primary-green-hover text-white px-6 py-3 rounded-md font-semibold"
          >
            Book a session
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="min-h-screen py-20 md:py-24 pb-24 bg-gradient-to-br from-background-light via-background-white to-background-light">
      <div className="page-container">
        <div className="page-header">
          <div className="w-16 h-16 bg-primary-green rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-navy">
            Booking confirmed
          </h1>
          <p className="text-lg md:text-xl text-text-grey">
            Your coaching session has been successfully booked. Here are your details:
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <h2 className="text-xl font-heading font-semibold text-primary-navy mb-6">
            Session details
          </h2>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-grey mb-1">Name</label>
                <p className="text-primary-navy font-medium">{booking.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-grey mb-1">Email</label>
                <p className="text-primary-navy font-medium">{booking.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-grey mb-1">Phone</label>
                <p className="text-primary-navy font-medium">{booking.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-text-grey mb-1">Session type</label>
                <p className="text-primary-navy font-medium capitalize">{booking.sessionType}</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-grey mb-1">Date</label>
                  <p className="text-primary-navy font-medium">
                    {booking.date.toLocaleDateString('en-GB', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-grey mb-1">Time</label>
                  <p className="text-primary-navy font-medium">{booking.time}</p>
                </div>
              </div>
            </div>

            {booking.message && (
              <div className="border-t pt-4">
                <label className="block text-sm font-medium text-text-grey mb-1">Your notes</label>
                <p className="text-primary-navy">{booking.message}</p>
              </div>
            )}

            <div className="border-t pt-4">
              <label className="block text-sm font-medium text-text-grey mb-1">Booking ID</label>
              <p className="text-primary-navy font-mono text-sm">{booking.id}</p>
            </div>
          </div>
        </div>

        <div className="bg-primary-green/10 rounded-2xl p-6 border border-primary-green/20 mb-8">
          <h3 className="font-semibold text-primary-navy mb-3">What happens next?</h3>
          <ul className="space-y-2 text-primary-navy">
            <li className="flex items-start">
              <BulletIcon className="w-2 mt-2 mr-3 flex-shrink-0" />
              You'll receive a confirmation email shortly with session details
            </li>
            <li className="flex items-start">
              <BulletIcon className="w-2 mt-2 mr-3 flex-shrink-0" />
              {booking.sessionType === 'zoom' 
                ? 'A Zoom link will be sent 24 hours before your session'
                : 'Location details will be confirmed via email'
              }
            </li>
            <li className="flex items-start">
              <BulletIcon className="w-2 mt-2 mr-3 flex-shrink-0" />
              You can reschedule up to 24 hours before your session
            </li>
          </ul>
        </div>

        <div className="text-center space-y-4">
          <Link 
            href="/"
            className="inline-block bg-primary-green hover:bg-primary-green-hover text-white px-6 py-3 rounded-md font-semibold mr-4"
          >
            Back to home
          </Link>
          <Link 
            href="/coaching/book"
            className="inline-block border border-primary-green text-primary-green hover:bg-primary-green hover:text-white px-6 py-3 rounded-md font-semibold transition-colors"
          >
            Book another session
          </Link>
        </div>
      </div>
    </section>
  )
}
