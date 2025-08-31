"use client"

import { useState } from 'react'
import { faqs as defaultFaqs, FAQItem } from '@/lib/faqs'

type Props = {
  items?: FAQItem[]
  title?: string
  limit?: number // show only first N items by default, with a Show more toggle
}

export default function FAQAccordion({ items = defaultFaqs, title = 'FAQs', limit }: Props) {
  const [expanded, setExpanded] = useState(false)
  const visibleItems = limit && !expanded ? items.slice(0, limit) : items

  return (
    <div className="space-y-8 mt-2">
      <h2 className="text-2xl font-heading font-semibold text-primary-navy">{title}</h2>
      <div className="grid grid-cols-1 gap-4">
        {visibleItems.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <details className="group">
              <summary className="flex w-full items-center justify-between cursor-pointer px-6 py-5 text-primary-navy font-medium list-none hover:bg-gray-50">
                <span>{faq.question}</span>
                <svg className="w-5 h-5 text-text-grey transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </summary>
              <div className="px-6 pt-4 pb-6 text-text-grey border-t leading-relaxed">
                {faq.answer}
              </div>
            </details>
          </div>
        ))}
      </div>
      {limit && items.length > limit && (
        <div className="pt-2">
          <button
            type="button"
            className="btn-outline"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
          >
            {expanded ? 'Show fewer questions' : 'Show all FAQs'}
          </button>
        </div>
      )}
    </div>
  )
}
