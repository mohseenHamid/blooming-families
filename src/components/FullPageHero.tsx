import Link from 'next/link'

export default function FullPageHero() {
  return (
    <section className="relative overflow-hidden min-h-[calc(100vh-4rem)] lg:h-[calc(100vh-5rem)] pt-20 pb-12 lg:pt-8 lg:pb-0 flex items-center justify-center bg-gradient-to-br from-background-white to-primary-green/5">

      {/* Soft background overlay with subtle green blobs */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-60 md:opacity-90"
        aria-hidden="true"
        style={{
          backgroundImage: `
            radial-gradient(80px 80px at 15% 20%, rgba(16,185,129,0.15), transparent 50%),
            radial-gradient(100px 100px at 85% 30%, rgba(16,185,129,0.15), transparent 50%)
          `,
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Simplified decorative elements for mobile performance */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden md:block" aria-hidden="true">
        {/* Left vertical twig - simplified */}
        <div className="absolute left-2 lg:left-4 top-1/4 h-1/2 w-8 lg:w-12 opacity-15">
          <div className="h-full w-0.5 bg-primary-green/40 mx-auto"></div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-5 bg-primary-green/30 rounded-full"></div>
          <div className="absolute top-3/4 left-1/2 -translate-x-1/2 w-2 h-4 bg-primary-green/30 rounded-full"></div>
        </div>

        {/* Right vertical twig - simplified */}
        <div className="absolute right-2 lg:right-4 top-1/4 h-1/2 w-8 lg:w-12 opacity-15">
          <div className="h-full w-0.5 bg-primary-green/40 mx-auto"></div>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-3 h-5 bg-primary-green/30 rounded-full"></div>
          <div className="absolute top-2/3 left-1/2 -translate-x-1/2 w-2 h-4 bg-primary-green/30 rounded-full"></div>
        </div>
      </div>

      <div className="relative z-10 container-custom text-center px-4 sm:px-6">
        {/* Tagline */}
        <div className="mb-6 lg:mb-4">
          <span className="inline-block bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium">
            Empowering families
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[clamp(1.75rem,4.5vw+0.5rem,3.5rem)] font-heading font-bold text-primary-navy leading-tight mb-5 lg:mb-3 max-w-4xl mx-auto">
          Supporting families
          <span className="block md:inline"> through <span className="text-primary-green">every stage</span></span>
        </h1>

        {/* Divider with centered logo */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 mb-6 lg:mb-4">
          <span className="h-px w-12 sm:w-20 bg-primary-navy/20" />
          <img
            src="/logo/favicon.svg"
            alt="Blooming Families"
            className="h-12 sm:h-16 lg:h-20 rounded-full p-1 shadow-sm"
            loading="lazy"
          />
          <span className="h-px w-12 sm:w-20 bg-primary-navy/20" />
        </div>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-text-grey leading-relaxed mb-8 md:mb-10 lg:mb-6 max-w-2xl mx-auto px-2">
          Specialised coaching for individuals, couples, and parents navigating key life transitions
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="mb-6 md:mb-8 lg:mb-0 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            className="btn-secondary shadow-lg w-full sm:w-auto min-h-[48px]"
            data-cal-link="blooming-families/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            aria-label="Book a consultation"
          >
            Book a consultation
          </button>
          <Link
            href="/#services"
            className="btn-outline-green w-full sm:w-auto min-h-[48px] flex items-center justify-center"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  )
}
