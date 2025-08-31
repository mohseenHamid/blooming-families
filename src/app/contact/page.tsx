"use client"

import ContactUsContent from '@/components/ContactUsContent'
import { useRouter } from 'next/navigation'

export default function ContactPage() {
  const router = useRouter()
  return <ContactUsContent showBack onBack={() => router.back()} />
}
