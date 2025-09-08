"use client"
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import BulletIcon from '@/components/ui/BulletIcon';

export default function AboutMerged() {
  const leftRef = useRef<HTMLDivElement>(null)
  const rightCardRef = useRef<HTMLDivElement>(null)
  const [maxH, setMaxH] = useState<number | undefined>(undefined)

  useEffect(() => {
    if (!leftRef.current) return
    const el = leftRef.current
    const update = () => {
      // Apply only on lg and above (Tailwind lg ~ 1024px)
      if (typeof window !== 'undefined' && window.innerWidth >= 1024) {
        setMaxH(el.getBoundingClientRect().height)
      } else {
        setMaxH(undefined)
      }
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section className="pt-12 sm:pt-16 lg:pt-10 pb-12 sm:pb-16 lg:pb-20 bg-background-white overflow-hidden">
      <div className="container-custom px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-start mx-auto">
          {/* Left: About your coach content + CTAs */}
          <div className="space-y-6 sm:space-y-8" ref={leftRef}>
            <div>
              <span className="inline-block bg-primary-navy/10 text-primary-navy px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium mb-4">
                About your coach
              </span>
              <h2 className="text-[clamp(1.5rem,4vw+0.5rem,2.5rem)] font-heading font-bold text-primary-navy mb-4 sm:mb-5 lg:mb-4 px-1">
                A personal approach to family support
              </h2>
            </div>

            <div className="space-y-4 sm:space-y-5 text-text-grey leading-relaxed text-base sm:text-lg">
              <p>
                I understand that every family's journey is unique. Having worked with families for over a decade,
                I've learned that the most meaningful change happens when you feel truly heard and supported.
              </p>
              <p>
                My approach combines professional expertise with genuine warmth. Whether you're navigating
                relationship challenges, parenting transitions, or seeking to strengthen family bonds,
                I'm here to walk alongside you with compassion and practical guidance.
              </p>
              <p>
                Through my partnership work with local councils and private practice, I've had the privilege
                of supporting hundreds of families through their most important transitions. Each family
                teaches me something new about resilience, love, and growth.
              </p>
            </div>

            {/* Quote removed per request */}

            {/* My approach (restyled to match overall tone) */}
            <div>
              <h3 className="text-lg md:text-xl font-heading font-semibold text-primary-navy mb-3">My approach</h3>
              <div className="space-y-2.5">
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                  <p className="text-text-grey">Confidential, non-judgmental support</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                  <p className="text-text-grey">Practical strategies tailored to your family</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                  <p className="text-text-grey">Focus on your strengths and resources</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                  <p className="text-text-grey">Flexible support that fits your life</p>
                </div>
              </div>
            </div>

            {/* CTAs (from Hero), with updated labels/links */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-start">
              <button
                type="button"
                className="btn-primary shadow-lg w-full sm:w-auto min-h-[48px]"
                data-cal-link="blooming-families/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                aria-label="Book a consultation"
              >
                Book a consultation
              </button>
              <Link href="/about" className="btn-outline w-full sm:w-auto min-h-[48px] flex items-center justify-center">
                Read our story
              </Link>
            </div>

            {/* No spacer needed; height sync handled dynamically */}
          </div>

          {/* Right: Profile card with qualifications */}
          <div className="flex justify-center lg:justify-end min-h-0">
            <div className="w-full max-w-md lg:h-full lg:flex min-h-0">
              {/* Profile Card */}
              <div
                ref={rightCardRef}
                className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 w-full border border-gray-100 h-full flex flex-col justify-between overflow-hidden"
                style={{ maxHeight: maxH ? `${maxH}px` : undefined }}
              >
                <div className="shrink-0">
                  {/* Name/Role */}
                  <div className="text-center mb-5 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-primary-navy mb-1">Sarah Johnson</h3>
                    <p className="text-sm sm:text-base lg:text-lg text-text-grey">Certified Relationship Coach</p>
                  </div>

                  {/* Value-add: Areas of focus pills */}
                  <div className="flex flex-wrap justify-center gap-2 mb-4 sm:mb-5">
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-primary-navy/5 text-primary-navy">Conflict resolution</span>
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-primary-navy/5 text-primary-navy">Parenting support</span>
                    <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-primary-navy/5 text-primary-navy">Pre-marital prep</span>
                  </div>

                  {/* Divider before qualifications (replaces header) */}
                  <div className="border-t-2 border-gray-200 mt-2 mb-5" />
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start justify-center gap-3">
                      <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                      <p className="text-sm text-text-grey">MSc in Counselling Psychology</p>
                    </div>
                    <div className="flex items-start justify-center gap-3">
                      <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                      <p className="text-sm text-text-grey">Certified Gottman Method Therapist</p>
                    </div>
                    <div className="flex items-start justify-center gap-3">
                      <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                      <p className="text-sm text-text-grey">15+ years clinical experience</p>
                    </div>
                    <div className="flex items-start justify-center gap-3">
                      <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                      <p className="text-sm text-text-grey">Specializes in family dynamics</p>
                    </div>
                    <div className="flex items-start justify-center gap-3">
                      <div className="mt-1.5 flex-shrink-0"><BulletIcon /></div>
                      <p className="text-sm text-text-grey">BACP registered practitioner</p>
                    </div>
                  </div>
                </div>

                {/* Trust Badge at bottom */}
                <div className="pt-6 border-t-2 border-gray-200 shrink-0 mt-auto">
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-4 h-4 text-primary-navy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                    </svg>
                    <span className="text-xs text-primary-navy">Trusted by 800+ clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
