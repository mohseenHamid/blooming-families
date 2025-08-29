export type SessionType = 'zoom' | 'in-person'

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
