/* Archived copy of src/components/Hero_Backup.tsx */
import BulletIcon from '@/components/ui/BulletIcon'

export default function Hero() {
  return (
    <section className="pt-16 lg:pt-10 pb-16 lg:pb-20 bg-gradient-to-br from-background-white to-primary-green/5 min-h-[70vh] overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[60vh]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            {/* Tagline */}
            <div className="mb-6">
              <span className="inline-block bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium">
                Transform your relationships
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-[clamp(2rem,5vw+0.5rem,3.75rem)] font-heading font-bold text-primary-navy leading-tight mb-6">
              Build stronger connections
              <span className="block"> with expert <span className="text-primary-green">guidance</span></span>
            </h1>

            {/* Subheading */}
            <p className="text-lg text-text-grey leading-relaxed mb-8 max-w-xl lg:max-w-none">
              Professional coaching to help you navigate relationship challenges, strengthen family bonds, and create lasting positive change.
            </p>

            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start">
              <button
                type="button"
                className="btn-secondary shadow-lg w-full sm:w-auto"
                data-cal-link="blooming-families/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                aria-label="Book a consultation"
              >
                Book Now
              </button>
              <a
                href="/#services"
                className="btn-outline-green w-full sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Right Column - Profile Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl shadow-xl p-8 max-w-sm w-full border border-gray-100">
              {/* Profile Photo Placeholder */}
              <div className="text-center mb-6">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-green/20 to-primary-green/40 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-primary-navy mb-1">Sarah Johnson</h3>
                <p className="text-sm text-text-grey">Certified Relationship Coach</p>
              </div>

              {/* Professional Credentials */}
              <div className="space-y-4">
                <h4 className="text-sm font-semibold text-primary-navy mb-4">Qualifications & Experience</h4>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1.5 flex-shrink-0">
                    <BulletIcon />
                  </div>
                  <p className="text-sm text-text-grey">MSc in Counselling Psychology</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1.5 flex-shrink-0">
                    <BulletIcon />
                  </div>
                  <p className="text-sm text-text-grey">Certified Gottman Method Therapist</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1.5 flex-shrink-0">
                    <BulletIcon />
                  </div>
                  <p className="text-sm text-text-grey">15+ years clinical experience</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1.5 flex-shrink-0">
                    <BulletIcon />
                  </div>
                  <p className="text-sm text-text-grey">Specializes in family dynamics</p>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="mt-1.5 flex-shrink-0">
                    <BulletIcon />
                  </div>
                  <p className="text-sm text-text-grey">BACP registered practitioner</p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-center space-x-2">
                  <svg className="w-4 h-4 text-primary-green" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
                  </svg>
                  <span className="text-xs text-text-grey">Trusted by 800+ clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
