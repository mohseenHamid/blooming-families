"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react'

export default function ServicesWithTestimonials() {
  const testimonials = [
    { name: '– A & M', content: 'The sessions gave us clarity and hope again.' },
    { name: '– Z.T.', content: 'A deeply insightful, spiritual and practical experience.' },
    { name: '– R.K.', content: 'We felt listened to and left with practical next steps.' },
    { name: '– L & H', content: 'Helped us rebuild communication and trust.' },
  ]
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(1)
  const [slidePct, setSlidePct] = useState(100)
  const maxIndex = Math.max(0, testimonials.length - visible)
  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1))

  useEffect(() => {
    if (typeof window === 'undefined') return
    const media = window.matchMedia('(min-width: 768px)') // md breakpoint
    const apply = () => {
      if (media.matches) {
        setVisible(2)
        setSlidePct(50)
      } else {
        setVisible(1)
        setSlidePct(100)
      }
      setIndex(0)
    }
    apply()
    media.addEventListener('change', apply)
    return () => media.removeEventListener('change', apply)
  }, [])

  return (
    <section id="services" className="pt-16 lg:pt-10 pb-16 lg:pb-20 bg-background-white overflow-hidden">
      <div className="container-custom">
        {/* Section header */}
        <div className="mx-auto text-center mb-8 md:mb-10 lg:mb-8">
          <span className="inline-block bg-primary-green/10 text-primary-green px-3 py-1.5 md:px-4 md:py-1.5 rounded-full text-sm font-medium mb-4">
            Our services
          </span>
          <h2 className="text-[clamp(1.5rem,3.8vw+0.4rem,2.5rem)] font-heading font-bold text-primary-navy mb-3 lg:mb-2">
            Support for families, couples, and individuals
          </h2>
          <p className="text-text-grey text-base md:text-lg leading-relaxed">
            This is the Blooming Families roster of services. Explore what we offer and choose the path that fits your needs today—each card leads to a detailed page.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
          {/* Coaching */}
          <article className="card text-center group" aria-labelledby="svc-coaching-title">
            <div className="mb-6">
              <Users className="w-16 h-16 text-primary-green mx-auto mb-4" aria-hidden />
              <h3 id="svc-coaching-title" className="text-2xl font-heading font-semibold text-primary-navy mb-4">
                Coaching
              </h3>
              <p className="text-text-grey text-base md:text-lg leading-relaxed mb-6">
                One-to-one and couples coaching. Personalised support for individuals seeking clarity, direction, or healing, and facilitated guidance for couples preparing for or navigating marriage and parenting.
              </p>
              <Link 
                href="/coaching" 
                className="text-primary-green font-semibold text-base md:text-lg hover:text-primary-green-hover transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </article>

          {/* Workshops & Courses */}
          <article className="card text-center group" aria-labelledby="svc-courses-title">
            <div className="mb-6">
              <BookOpen className="w-16 h-16 text-primary-green mx-auto mb-4" aria-hidden />
              <h3 id="svc-courses-title" className="text-2xl font-heading font-semibold text-primary-navy mb-4">
                Workshops & courses
              </h3>
              <p className="text-text-grey text-base md:text-lg leading-relaxed mb-6">
                Group-based learning opportunities for parents and couples (online or residential)
              </p>
              <Link 
                href="/courses" 
                className="text-primary-green font-semibold text-base md:text-lg hover:text-primary-green-hover transition-colors"
              >
                View courses →
              </Link>
            </div>
          </article>
        </div>

        {/* Compact testimonials carousel */}
        <div className="mt-10 lg:mt-12 border-t border-gray-200 pt-8">
          <div className="text-center mb-6">
            <span className="inline-block bg-primary-navy/10 text-primary-navy px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-medium mb-4">
              Client experiences
            </span>
            <h3 className="sr-only">Client experiences</h3>
          </div>
          <div className="relative">
            <div className="container-custom overflow-hidden md:-mx-3">
              <div
                className="flex transition-transform duration-300 ease-out gap-0"
                style={{ transform: `translateX(-${index * slidePct}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full md:min-w-[50%]">
                    {/* inner padding creates spacing without affecting slide width */}
                    <div className="h-full px-0 md:px-3">
                      <div className="card h-full p-5">
                        <div className="bg-primary-navy/5 p-5 rounded-lg border-l-4 border-primary-navy/60">
                          <p className="text-text-grey italic leading-relaxed text-base md:text-lg">"{t.content}"</p>
                        </div>
                        <p className="font-semibold text-primary-navy mt-3">{t.name}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Controls bar below: arrows in pill-shaped buttons, row full-width */}
            <div className="container-custom px-0 md:-mx-3 mt-4 flex items-center justify-between">
              <button
                className="inline-flex items-center gap-2 border border-primary-navy/30 text-primary-navy rounded-full px-3 py-1.5 hover:bg-primary-navy/5"
                onClick={prev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <div className="flex-1 flex justify-center">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <span key={i} className={`h-2 w-2 rounded-full ${i === index ? 'bg-primary-navy' : 'bg-gray-300'}`} />
                  ))}
                </div>
              </div>
              <button
                className="inline-flex items-center gap-2 border border-primary-navy/30 text-primary-navy rounded-full px-3 py-1.5 hover:bg-primary-navy/5"
                onClick={next}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
