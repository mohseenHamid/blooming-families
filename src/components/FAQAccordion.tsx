"use client"

import { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
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
      <Accordion type="single" collapsible className="w-full">
        {visibleItems.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>
              <p className="text-text-grey leading-relaxed">{faq.answer}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
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
