import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="pt-16 lg:pt-10 pb-16 lg:pb-20 bg-primary-navy flex items-center min-h-[50vh] overflow-hidden">
      <div className="container-custom">
        <div className="text-center">
          <h2 className="text-[clamp(1.5rem,3.8vw+0.4rem,2.5rem)] font-heading font-bold text-white mb-5 lg:mb-4">
            Ready to take the next step?
          </h2>
          <p className="text-base md:text-lg text-white/90 mb-8 lg:mb-6 max-w-2xl mx-auto">
            Connect with our professional family support services. We're here to listen, understand your situation, and provide the guidance you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/coaching#booking" 
              className="btn-secondary text-center"
              data-cal-link="blooming-families/30min"
              data-cal-namespace="30min"
              data-cal-config='{"layout":"month_view"}'
            >
              Schedule a consultation
            </Link>
            <Link href="mailto:hello@bloomingfamilies.com" className="btn-outline-white text-center">
              Get in touch
            </Link>
          </div>
          <p className="text-white/70 text-sm mt-6">
            Confidential support • Professional guidance • Tailored to your family's needs
          </p>
        </div>
      </div>
    </section>
  )
}
