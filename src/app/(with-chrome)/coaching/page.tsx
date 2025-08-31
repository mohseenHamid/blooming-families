import BulletIcon from '@/components/ui/BulletIcon'
import Link from 'next/link'

export const metadata = {
  title: '1:1 and Couples Coaching | Blooming Families',
  description: 'Tailored support for emotional, relational, and spiritual wellbeing.'
}

export default function CoachingPage() {
  return (
    <section className="py-16 bg-gradient-to-br from-background-light via-background-white to-background-light">
      <div className="page-container space-y-16">
        {/* Hero */}
        <header className="page-header">
          <span className="inline-block bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium">
            Coaching Services
          </span>
          <h1 className="page-title">
            1:1 and Couples Coaching
          </h1>
          <p className="page-intro leading-relaxed max-w-2xl mx-auto">
            Tailored support for emotional, relational, and spiritual wellbeing
          </p>
        </header>

        {/* Coaching Types */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="text-center space-y-6">
            <h2 className="text-2xl font-heading font-semibold text-primary-navy">Coaching Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
              <div className="card">
                <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2">121 Coaching</h3>
                <p className="text-text-grey mb-3">Available across pre-marriage, marriage, parenting, and personal development</p>
                <p className="text-primary-navy font-medium">From £45/hr (consultation) – £70/hr (coaching)</p>
              </div>
              <div className="card">
                <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2">Couples Coaching (221)</h3>
                <p className="text-text-grey mb-3">Joint sessions for couples with specialised facilitation</p>
                <p className="text-primary-navy font-medium">£135/hr</p>
              </div>
            </div>
            <div className="text-center">
              <button
                type="button"
                className="btn-secondary shadow-lg"
                data-cal-link="blooming-families/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
              >
                Request initial consultation
              </button>
          </div>
          </div>
        </div>

        {/* What's included */}
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-semibold text-primary-navy text-center">
            What's included
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Personalized coaching approach',
              'Practical strategies and tools',
              'Confidential, judgment-free space',
              'Follow-up resources and action plan',
              'Flexible scheduling options',
              '24-hour cancellation policy'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3">
                <BulletIcon className="w-2" />
                <span className="text-text-grey">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button 
            type="button"
            className="btn-secondary shadow-lg"
            data-cal-link="blooming-families/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Book your session
          </button>
          <p className="text-text-light text-sm mt-4">
            Choose your preferred date and time in the next step
          </p>
        </div>
      </div>
    </section>
  )
}
