"use client"

import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/components/ui/Button'
import ContactUsContent, { ContactUsContentHandle } from '@/components/ContactUsContent'

type ContactUsOverlayProps = {
  open: boolean
  onClose: () => void
}

export default function ContactUsOverlay({ open, onClose }: ContactUsOverlayProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const contentRef = useRef<ContactUsContentHandle | null>(null)

  const attemptClose = () => {
    if (contentRef.current) {
      contentRef.current.attemptBack()
    } else {
      onClose()
    }
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') attemptClose()
    }
    if (open) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  // Allow Navigation to request a guarded close on browser Back via custom event
  useEffect(() => {
    const onAttempt = () => attemptClose()
    window.addEventListener('attempt-close-contact', onAttempt as EventListener)
    return () => window.removeEventListener('attempt-close-contact', onAttempt as EventListener)
  }, [])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[100]">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={attemptClose} />

      {/* Overlay content with page styling */}
      <div ref={scrollRef} className="relative inset-0 h-full w-full overflow-y-auto">
        <ContactUsContent ref={contentRef} showBack onBack={onClose} />
      </div>
    </div>,
    typeof window !== 'undefined' ? document.body : (globalThis as any).document?.body
  )
}
