import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="pt-16 lg:pt-10 pb-16 lg:pb-20 bg-gradient-to-br from-background-white to-primary-green/5 overflow-hidden">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto card text-center">
          <span className="inline-block bg-primary-navy/10 text-primary-navy px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-medium mb-4">
            Stay connected
          </span>
          <h2 className="text-[clamp(1.5rem,3.8vw+0.4rem,2.5rem)] font-heading font-bold text-primary-navy mb-3 lg:mb-2">
            Get tools for stronger family relationships
          </h2>
          <p className="text-base md:text-lg text-text-grey mb-6 lg:mb-5">
            Practical tips, conversation prompts, and short guides delivered occasionally. No spam, just value you can use right away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#" className="btn-secondary text-center">
              Get the free starter guide
            </Link>
            <Link href="/contact" className="btn-outline text-center">
              Join the newsletter
            </Link>
          </div>
          <p className="text-text-grey/80 text-sm mt-6">
            You can unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </div>
    </section>
  )
}
