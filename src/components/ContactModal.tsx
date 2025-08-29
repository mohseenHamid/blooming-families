"use client"

import { useEffect, useRef } from 'react'

type ContactModalProps = {
  open: boolean
  onClose: () => void
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const dialogRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handler)
    }
    return () => document.removeEventListener('keydown', handler)
  }, [open, onClose])

  if (!open) return null

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get('name') as string) || ''
    const email = (formData.get('email') as string) || ''
    const message = (formData.get('message') as string) || ''

    const subject = encodeURIComponent(`Website enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:info@bloomingfamilies.example?subject=${subject}&body=${body}`
    onClose()
  }

  return (
    <div
      aria-modal
      role="dialog"
      aria-labelledby="contact-title"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className="relative z-[101] w-[92vw] max-w-lg bg-white rounded-xl shadow-2xl p-6 md:p-8"
      >
        <div className="flex items-center justify-between mb-4">
          <h2 id="contact-title" className="text-xl font-heading font-semibold text-primary-navy">Contact us</h2>
          <button onClick={onClose} aria-label="Close contact form" className="text-text-grey hover:text-primary-green">✕</button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-primary-navy mb-1">Name</label>
            <input id="name" name="name" type="text" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green/50" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-primary-navy mb-1">Email</label>
            <input id="email" name="email" type="email" required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green/50" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-primary-navy mb-1">Message</label>
            <textarea id="message" name="message" rows={5} required className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-green/50" />
          </div>
          <div className="flex items-center justify-end gap-3 pt-2">
            <button type="button" onClick={onClose} className="btn-outline">Cancel</button>
            <button type="submit" className="btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  )
}
