"use client"
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Users, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import BannerCTA from './BannerCTA';

interface ServicesWithTestimonialsProps {
  onEnquiryClick: () => void;
}


export default function ServicesWithTestimonials({ onEnquiryClick }: ServicesWithTestimonialsProps) {
  const testimonials = [
    { name: '– A & M', content: 'The sessions gave us clarity and hope again.' },
    { name: '– Z.T.', content: 'A deeply insightful, spiritual and practical experience.' },
    { name: '– R.K.', content: 'We felt listened to and left with practical next steps.' },
    { name: '– L & H', content: 'Helped us rebuild communication and trust.' },
  ]
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(1)
  const [slidePct, setSlidePct] = useState(100);
  const maxIndex = Math.max(0, testimonials.length - visible);
  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

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
    <>
      <section id="services" className="pt-12 sm:pt-16 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 bg-gradient-to-br from-background-white to-primary-green/5 overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        {/* Section header */}
        <div className="mx-auto text-center mb-8 sm:mb-10 lg:mb-8">
          <span className="inline-block bg-primary-green/10 text-primary-green px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium mb-4">
            Our services
          </span>
          <h2 className="text-[clamp(1.5rem,4vw+0.5rem,2.5rem)] font-heading font-bold text-primary-navy mb-4 lg:mb-3 px-2">
            Support for families, couples, and individuals
          </h2>
          <p className="text-text-grey text-base sm:text-lg leading-relaxed max-w-3xl mx-auto px-2">
            This is the Blooming Families roster of services. Explore what we offer and choose the path that fits your needs today—each card leads to a detailed page.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
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

        {/* Banner CTA for Organisations */}
        <div className="mt-10 sm:mt-12">
          <BannerCTA 
            title="Interested in our workshops or courses for your organisation?"
            primaryActionText="Enquire now"
            onPrimaryAction={onEnquiryClick}
            secondaryActionText="Learn more"
            secondaryActionLink="/organisations"
          />
        </div>

        {/* Compact testimonials carousel */}
        <div className="mt-10 sm:mt-12 lg:mt-16 border-t border-gray-200 pt-8 sm:pt-10">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block bg-primary-green/10 text-primary-green px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium mb-4">
              Client experiences
            </span>
            <h3 className="sr-only">Client experiences</h3>
          </div>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${index * slidePct}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full md:min-w-[50%] px-2 sm:px-3">
                    <div className="card h-full p-4 sm:p-6">
                      <div className="bg-primary-green/5 p-4 sm:p-5 rounded-lg border-l-4 border-primary-green/60">
                        <p className="text-text-grey italic leading-relaxed text-base sm:text-lg">"{t.content}"</p>
                      </div>
                      <p className="font-semibold text-primary-green mt-3 text-sm sm:text-base">{t.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Enhanced mobile-friendly controls */}
            <div className="mt-6 flex items-center justify-between">
              <button
                className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-primary-green/30 text-primary-green rounded-full hover:bg-primary-green/5 transition-colors disabled:opacity-50"
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
              <div className="flex gap-2 sm:gap-3">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors ${
                      i === index ? 'bg-primary-green' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    onClick={() => setIndex(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border border-primary-green/30 text-primary-green rounded-full hover:bg-primary-green/5 transition-colors disabled:opacity-50"
                onClick={next}
                disabled={index === maxIndex}
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
