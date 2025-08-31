/* Archived copy of src/components/SessionCalendar.tsx */
"use client"

import React from 'react'
import { useState } from 'react'
import { format, addDays, startOfWeek, isSameDay, isAfter, isBefore } from 'date-fns'

interface TimeSlot {
  time: string
  available: boolean
}

interface SessionCalendarProps {
  onSelectSlot: (date: Date, time: string) => void
  selectedDate?: Date
  selectedTime?: string
}

export default function SessionCalendar({ onSelectSlot, selectedDate, selectedTime }: SessionCalendarProps) {
  const [currentWeek, setCurrentWeek] = useState(new Date())
  
  // Available time slots (9 AM to 5 PM, excluding lunch)
  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: true },
    { time: '10:00', available: true },
    { time: '11:00', available: true },
    { time: '14:00', available: true },
    { time: '15:00', available: true },
    { time: '16:00', available: true },
    { time: '17:00', available: true },
  ]

  // Get 7 days starting from Monday of current week
  const weekStart = startOfWeek(currentWeek, { weekStartsOn: 1 })
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))
  
  // Filter out weekends and past dates
  const availableDays = weekDays.filter(day => {
    const dayOfWeek = day.getDay()
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return dayOfWeek !== 0 && dayOfWeek !== 6 && !isBefore(day, today) // No Sunday (0) or Saturday (6), no past dates
  })

  const goToNextWeek = () => {
    setCurrentWeek(addDays(currentWeek, 7))
  }

  const goToPrevWeek = () => {
    const prevWeek = addDays(currentWeek, -7)
    const todayStart = startOfWeek(new Date(), { weekStartsOn: 1 })
    const prevStart = startOfWeek(prevWeek, { weekStartsOn: 1 })
    // Allow navigating back to the current week, but not earlier
    if (isAfter(prevStart, todayStart) || isSameDay(prevStart, todayStart)) {
      setCurrentWeek(prevWeek)
    }
  }

  const todayStart = startOfWeek(new Date(), { weekStartsOn: 1 })
  const currentStart = startOfWeek(currentWeek, { weekStartsOn: 1 })
  const canGoPrev = isAfter(currentStart, todayStart)

  return (
    <div className="space-y-6">
      {/* Week Navigation - single row on all screens */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={goToPrevWeek}
          disabled={!canGoPrev}
          aria-label="Previous week"
          className="inline-flex items-center justify-center h-9 w-9 text-primary-navy border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <h3 className="flex-1 text-center text-lg font-semibold text-primary-navy whitespace-nowrap">
          {format(weekStart, 'MMM d')} - {format(addDays(weekStart, 6), 'MMM d, yyyy')}
        </h3>
        <button
          onClick={goToNextWeek}
          aria-label="Next week"
          className="inline-flex items-center justify-center h-9 w-9 text-primary-navy border border-gray-200 rounded-md hover:bg-gray-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {availableDays.map((day) => (
          <div key={day.toISOString()} className="space-y-2">
            <div className="text-center p-3 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-primary-navy">
                {format(day, 'EEE')}
              </div>
              <div className="text-lg font-semibold text-primary-navy">
                {format(day, 'd')}
              </div>
            </div>
            
            {/* Time Slots */}
            <div className="space-y-1">
              {timeSlots.map((slot) => {
                const isSelected = selectedDate && selectedTime && 
                  isSameDay(day, selectedDate) && selectedTime === slot.time
                
                return (
                  <button
                    key={slot.time}
                    onClick={() => onSelectSlot(day, slot.time)}
                    disabled={!slot.available}
                    className={`w-full px-3 py-2 text-sm rounded-md border transition-colors ${
                      isSelected
                        ? 'bg-primary-green text-white border-primary-green'
                        : slot.available
                        ? 'bg-white text-primary-navy border-gray-200 hover:border-primary-green hover:bg-primary-green/5'
                        : 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                    }`}
                  >
                    {slot.time}
                  </button>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {selectedDate && selectedTime && (
        <div className="p-4 bg-primary-green/10 rounded-lg border border-primary-green/20">
          <p className="text-primary-navy font-medium">
            Selected: {format(selectedDate, 'EEEE, MMMM d, yyyy')} at {selectedTime}
          </p>
        </div>
      )}
    </div>
  )
}
