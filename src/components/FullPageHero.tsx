import Link from 'next/link'

export default function FullPageHero() {
  return (
    <section className="relative overflow-hidden lg:h-[calc(100dvh-5rem)] pt-16 lg:pt-8 flex items-center justify-center bg-gradient-to-br from-background-white to-primary-green/5">

      {/* Soft background overlay with subtle green blobs */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-90"
        aria-hidden
        style={{
          backgroundImage: `
            radial-gradient(120px 120px at 12% 18%, rgba(16,185,129,0.18), transparent 60%),
            radial-gradient(140px 140px at 78% 38%, rgba(16,185,129,0.18), transparent 60%)
          `,
          backgroundRepeat: 'no-repeat'
        }}
      />

      {/* Vertical edge twigs with leaves (constrained to sides) */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        {/* Left vertical twig */}
        <svg
          viewBox="0 0 100 800"
          className="absolute left-0 top-0 h-full w-16 md:w-20 opacity-20"
          preserveAspectRatio="xMidYMax meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M30 800 C32 720, 34 640, 36 560 C38 480, 40 400, 42 320 C44 240, 46 160, 48 80" stroke="#6BAE7A" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="40" cy="680" rx="6" ry="10" fill="#90C39A" transform="rotate(-18 40 680)" />
          <ellipse cx="38" cy="560" rx="5" ry="9" fill="#90C39A" transform="rotate(16 38 560)" />
          <ellipse cx="42" cy="440" rx="6" ry="10" fill="#90C39A" transform="rotate(-12 42 440)" />
          <ellipse cx="44" cy="320" rx="5" ry="9" fill="#90C39A" transform="rotate(14 44 320)" />
          <ellipse cx="46" cy="200" rx="6" ry="10" fill="#90C39A" transform="rotate(-10 46 200)" />
        </svg>

        {/* Right vertical twig */}
        <svg
          viewBox="0 0 100 800"
          className="absolute right-0 top-0 h-full w-16 md:w-20 opacity-20"
          preserveAspectRatio="xMidYMax meet"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M70 800 C68 720, 66 640, 64 560 C62 480, 60 400, 58 320 C56 240, 54 160, 52 80" stroke="#6BAE7A" strokeWidth="4" strokeLinecap="round" />
          <ellipse cx="60" cy="680" rx="6" ry="10" fill="#90C39A" transform="rotate(18 60 680)" />
          <ellipse cx="62" cy="560" rx="5" ry="9" fill="#90C39A" transform="rotate(-16 62 560)" />
          <ellipse cx="58" cy="440" rx="6" ry="10" fill="#90C39A" transform="rotate(12 58 440)" />
          <ellipse cx="56" cy="320" rx="5" ry="9" fill="#90C39A" transform="rotate(-14 56 320)" />
          <ellipse cx="54" cy="200" rx="6" ry="10" fill="#90C39A" transform="rotate(10 54 200)" />
        </svg>
      </div>

      <div className="relative z-10 container-custom text-center px-6">
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
        <div className="flex items-center justify-center gap-4 mb-6 lg:mb-4">
          <span className="h-px w-20 bg-primary-navy/20" />
          <img
            src="/logo/favicon.svg"
            alt="Blooming Families"
            className="h-20 rounded-full p-1 shadow-sm"
            loading="lazy"
          />
          <span className="h-px w-20 bg-primary-navy/20" />
        </div>

        {/* Subheading */}
        <p className="text-base md:text-lg text-text-grey leading-relaxed mb-8 md:mb-10 lg:mb-6 max-w-2xl mx-auto">
          Specialised coaching for individuals, couples, and parents navigating key life transitions
        </p>

        {/* Primary & Secondary CTAs */}
        <div className="mb-6 md:mb-8 lg:mb-0 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            className="btn-secondary shadow-lg"
            data-cal-link="blooming-families/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
            aria-label="Book a consultation"
          >
            Book a consultation
          </button>
          <Link
            href="/#services"
            className="btn-outline-green"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  )
}
