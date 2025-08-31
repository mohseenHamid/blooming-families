"use client"

import { ReactNode, useEffect } from 'react'
import { Button } from '@/components/ui/Button'

type ConfirmDialogProps = {
  open: boolean
  title?: string
  description?: ReactNode
  confirmText?: string
  cancelText?: string
  onConfirm: () => void
  onCancel: () => void
}

export default function ConfirmDialog({
  open,
  title = 'Leave this page?',
  description = 'You have unsent changes. If you leave now, your message will not be saved.',
  confirmText = 'Leave without saving',
  cancelText = 'Stay on page',
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!open) return
      if (e.key === 'Escape') onCancel()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onCancel])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[200]">
      <div className="absolute inset-0 bg-black/50" onClick={onCancel} />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div role="dialog" aria-modal="true" className="w-full max-w-md rounded-2xl bg-white shadow-xl border border-gray-200 overflow-hidden">
          <div className="px-6 py-5">
            <h3 className="text-xl font-semibold text-primary-navy">{title}</h3>
            <p className="mt-2 text-base text-text-grey leading-relaxed">{description}</p>
          </div>
          <div className="px-6 py-3 bg-gray-50 border-t flex items-center justify-end gap-2">
            <Button type="button" variant="outline" className="px-3 py-1.5 text-sm font-semibold" onClick={onCancel}>{cancelText}</Button>
            <Button type="button" className="px-4 py-2 text-sm font-semibold" onClick={onConfirm}>{confirmText}</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
