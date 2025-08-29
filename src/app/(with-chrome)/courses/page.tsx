import Link from 'next/link'

export const metadata = {
  title: 'Courses & workshops | Blooming Families',
  description: 'Faith-grounded, family-focused learning — live, online, and residential formats.',
}

export default function CoursesPage() {
  return (
    <section className="py-16 bg-gradient-to-br from-background-light via-background-white to-background-light">
      <div className="page-container space-y-16">
        {/* Hero */}
        <header className="page-header text-center">
          <span className="inline-block bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium">
            Courses & workshops
          </span>
          <h1 className="page-title">Courses & workshops</h1>
          <p className="page-intro leading-relaxed max-w-2xl mx-auto">
            Faith-grounded, family-focused learning — live, online, and residential formats
          </p>
        </header>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Course 1 */}
          <article className="card" aria-labelledby="course-1-title">
            <h3 id="course-1-title" className="text-xl font-heading font-semibold text-primary-navy mb-2">
              Parenting in the primary years
            </h3>
            <p className="text-text-grey">Online course (8 weeks)</p>
            <p className="text-text-light mb-4">Next run: Autumn 2025</p>
            <button className="btn-outline w-full">Register interest</button>
          </article>

          {/* Course 2 */}
          <article className="card" aria-labelledby="course-2-title">
            <h3 id="course-2-title" className="text-xl font-heading font-semibold text-primary-navy mb-2">
              Preparing for marriage
            </h3>
            <p className="text-text-grey">Residential weekend</p>
            <p className="text-text-light mb-4">Coming soon</p>
            <button className="btn-outline w-full">Register interest</button>
          </article>

          {/* Course 3 */}
          <article className="card" aria-labelledby="course-3-title">
            <h3 id="course-3-title" className="text-xl font-heading font-semibold text-primary-navy mb-2">
              Parenting teens
            </h3>
            <p className="text-text-grey">Online workshop</p>
            <p className="text-text-light mb-4">Live event monthly</p>
            <button className="btn-outline w-full">Register interest</button>
          </article>
        </div>

        {/* Interest form */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-heading font-semibold text-primary-navy text-center mb-6">Register your interest</h2>
          <form className="max-w-2xl mx-auto grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Full name</label>
              <input className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Email address</label>
              <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Interested in</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent">
                <option>Parenting (primary)</option>
                <option>Parenting (teens)</option>
                <option>Preparing for marriage</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-navy mb-1">Any notes or questions</label>
              <textarea rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent" />
            </div>
            <div className="text-center mt-2">
              <button type="submit" className="btn-primary">Submit interest</button>
            </div>
          </form>
        </div>

        {/* Footer CTA */}
        <div className="text-center">
          <Link href="/courses" className="btn-outline">
            View all courses
          </Link>
        </div>
      </div>
    </section>
  )
}
