"use client"

import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Button } from '@/components/ui/Button'
import ConfirmDialog from '@/components/ui/ConfirmDialog'
import { toast } from 'sonner'
import FAQAccordion from '@/components/FAQAccordion'

export type ContactUsContentHandle = { attemptBack: () => void }

const ContactUsContent = ({ showBack = false, onBack }: { showBack?: boolean; onBack?: () => void }, ref: React.Ref<ContactUsContentHandle>) => {
  const [confirmOpen, setConfirmOpen] = useState(false)
  // Track dirty state early so it's available to handlers
  const [isDirty, setIsDirty] = useState(false)
  const onAnyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (!isDirty) setIsDirty(true)
  }

  const handleAttemptBack = () => {
    // If any field has been touched, show styled confirm dialog
    if (isDirty) {
      setConfirmOpen(true)
      return
    }
    onBack?.()
  }

  useImperativeHandle(ref, () => ({ attemptBack: handleAttemptBack }), [isDirty, onBack])

  // Warn on hard navigations (refresh/close/tab navigation)
  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      if (!isDirty) return
      e.preventDefault()
      e.returnValue = ''
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => window.removeEventListener('beforeunload', handleBeforeUnload)
  }, [isDirty])

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') || '')
    const email = String(formData.get('email') || '')
    const phone = String(formData.get('phone') || '')
    const message = String(formData.get('message') || '')
    const subjectInput = String(formData.get('subject') || '').trim()
    const subject = encodeURIComponent(subjectInput || `Contact inquiry from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`
    )
    window.location.href = `mailto:info@bloomingfamilies.co.uk?subject=${subject}&body=${body}`
    // Notify user their email client was opened
    toast.success('Opening your email client to send the message')

    if (onBack) onBack()
  }

  // (onAnyChange defined earlier)

  return (
    <section className="min-h-screen py-20 md:py-24 pb-24 bg-gradient-to-br from-background-light via-background-white to-background-light">
      <div className="page-container">
        <div className="page-header-row">
          <div className="flex items-center justify-between gap-4">
            <h1 className="page-title">Contact us</h1>
            {showBack && (
              <Button variant="outline" onClick={handleAttemptBack} aria-label="Go back">Back</Button>
            )}
          </div>
          <p className="page-intro">We'd love to hear from you. Send us a message and we'll get back to you shortly.</p>
          <div className="mt-3 inline-flex items-start gap-3 rounded-md border border-primary-green/20 bg-primary-green/10 px-4 py-3 text-sm text-primary-navy">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-primary-green mt-0.5">
              <rect x="3" y="7" width="12" height="10" rx="2" ry="2" />
              <path d="M21 8l-5 3v2l5 3V8z" fill="currentColor" />
            </svg>
            <span>For bookings, use the Book now button. For general questions or collaboration inquiries, use this form.</span>
          </div>
        </div>

        <div className="relative mb-10" aria-hidden="true">
          <div className="h-[3px] w-full bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50" />
        </div>

        <div className="grid grid-cols-1 gap-12">
          <div className="space-y-6">
            <h2 className="text-xl font-heading font-semibold text-primary-navy">How we can help</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <ul className="list-disc pl-5 space-y-2 text-text-grey">
                <li>Questions about coaching and services</li>
                <li>Speaking and collaboration requests</li>
                <li>Press and media enquiries</li>
                <li>Anything else — we're listening</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-heading font-semibold text-primary-navy">Send us a message</h2>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-grey mb-1">Name</label>
                    <input id="name" name="name" type="text" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green/40 focus:border-primary-green" placeholder="Your full name" onChange={onAnyChange} />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-grey mb-1">Email</label>
                    <input id="email" name="email" type="email" required className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green/40 focus:border-primary-green" placeholder="you@example.com" onChange={onAnyChange} />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-grey mb-1">Phone (optional)</label>
                    <input id="phone" name="phone" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green/40 focus:border-primary-green" placeholder="+44 7700 900123" onChange={onAnyChange} />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-grey mb-1">Subject</label>
                  <select id="subject" name="subject" defaultValue="" className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-green/40 focus:border-primary-green" onChange={onAnyChange}>
                    <option value="" disabled>Select a subject</option>
                    <option value="General enquiry">General enquiry</option>
                    <option value="Coaching question">Coaching question</option>
                    <option value="Collaboration request">Collaboration request</option>
                    <option value="Press / media">Press / media</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-grey mb-1">Message</label>
                  <textarea id="message" name="message" required rows={6} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green/40 focus:border-primary-green" placeholder="Share a few details about your enquiry" onChange={onAnyChange} />
                </div>
                <div className="flex items-center justify-end gap-3 pt-2">
                  {showBack && (
                    <Button type="button" variant="outline" onClick={handleAttemptBack}>Cancel</Button>
                  )}
                  <Button type="submit">Send message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative my-10" aria-hidden="true">
          <div className="h-[3px] w-full bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50" />
        </div>

        {/* FAQs */}
        <FAQAccordion title="FAQs" />
      </div>
      <ConfirmDialog
        open={confirmOpen}
        onCancel={() => setConfirmOpen(false)}
        onConfirm={() => { setConfirmOpen(false); toast.warning('Your changes were not saved'); onBack?.() }}
        title="Leave this page?"
        description={<span>You have unsent changes. If you leave now, your message will not be saved.</span>}
        confirmText="Leave without saving"
        cancelText="Stay on page"
      />
    </section>
  )
}

export default forwardRef(ContactUsContent)
