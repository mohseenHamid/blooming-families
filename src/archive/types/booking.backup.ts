// Archived copy of src/types/booking.ts
// Note: Only online (Zoom) sessions are supported in the current site.

export type SessionType = 'zoom'

export interface BookingBase {
  name: string
  email: string
  phone: string
  sessionType: SessionType
  message?: string
}

export interface Booking extends BookingBase {
  id: string
  date: Date
  time: string
  status: 'confirmed'
  createdAt: Date
}
