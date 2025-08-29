import Link from 'next/link'
import { Users, BookOpen } from 'lucide-react'

export default function ServicesOverview() {
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
          {/* 121 Coaching */}
          <article className="card text-center group" aria-labelledby="svc-121-title">
            <div className="mb-6">
              <Users className="w-16 h-16 text-primary-green mx-auto mb-4" aria-hidden />
              <h3 id="svc-121-title" className="text-2xl font-heading font-semibold text-primary-navy mb-4">
                121 coaching
              </h3>
              <p className="text-text-grey text-base md:text-lg leading-relaxed mb-6">
                Personalised 1-to-1 support for individuals seeking clarity, direction, or healing
              </p>
              <Link 
                href="/coaching" 
                className="text-primary-green font-semibold text-base md:text-lg hover:text-primary-green-hover transition-colors"
              >
                Learn more →
              </Link>
            </div>
          </article>

          {/* Couples Coaching */}
          <article className="card text-center group" aria-labelledby="svc-couples-title">
            <div className="mb-6">
              <Users className="w-16 h-16 text-primary-green mx-auto mb-4" aria-hidden />
              <h3 id="svc-couples-title" className="text-2xl font-heading font-semibold text-primary-navy mb-4">
                Couples coaching
              </h3>
              <p className="text-text-grey text-base md:text-lg leading-relaxed mb-6">
                Guidance and facilitation for couples preparing for or navigating marriage and parenting
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
      </div>
    </section>
  )
}
