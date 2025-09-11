"use client"
import Link from 'next/link';
import { Users, BookOpen } from 'lucide-react';
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
    { name: '– S.B.', content: 'Provided a safe space to explore our challenges.' },
  ]

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

        {/* Testimonials Reel */}
        <div className="mt-10 sm:mt-12 lg:mt-16 border-t border-gray-200 pt-8 sm:pt-10">
          <div className="text-center mb-6 sm:mb-8">
            <span className="inline-block bg-primary-green/10 text-primary-green px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-medium mb-4">
              Client experiences
            </span>
            <h3 className="sr-only">Client experiences</h3>
          </div>
          <div className="relative">
            <div className="flex overflow-x-auto space-x-6 pb-4 -mx-4 px-4 sm:-mx-6 sm:px-6 scrollbar-thin scrollbar-thumb-primary-green/40 scrollbar-track-primary-green/10 scrollbar-thumb-rounded-full">
              {testimonials.map((t, i) => (
                <div key={i} className="flex-shrink-0 w-[300px]">
                  <div className="card h-full p-6 flex flex-col justify-between">
                    <p className="text-text-grey italic leading-relaxed text-base">"{t.content}"</p>
                    <p className="font-semibold text-primary-green mt-4 text-sm">{t.name}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-primary-green/5 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-primary-green/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
      </section>
    </>
  );
}
