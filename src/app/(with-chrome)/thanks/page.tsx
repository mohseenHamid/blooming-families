import Link from 'next/link'

export const metadata = {
  title: 'Thank You | Blooming Families',
  description: 'Thanks for getting in touch. We will be in contact shortly.',
}

export default function ThanksPage() {
  return (
    <section className="min-h-[calc(100vh-5rem)] pt-20 flex items-center bg-gradient-to-br from-background-light via-background-white to-background-light">
      <div className="page-container">
        <div className="max-w-2xl mx-auto text-center card">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-primary-navy mb-4">Thank you!</h1>
          <p className="text-lg text-text-grey mb-6">
            Your message has been received. We'll get back to you as soon as possible.
          </p>
          <Link href="/" className="inline-block btn-primary">Return Home</Link>
        </div>
      </div>
    </section>
  )
}
