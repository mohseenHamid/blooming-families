export const metadata = {
  title: 'Publications & Resources'
}

export default function ResourcesPage() {
  return (
    <section className="min-h-screen py-20 md:py-24 pb-24 bg-gradient-to-br from-background-light via-background-white to-background-light">
      <div className="page-container">
        <div className="page-header-row">
          <h1 className="page-title">Publications & Resources</h1>
          <p className="page-intro">Explore articles, talks, and downloadable resources from Blooming Families. This page contains placeholder content for now.</p>
        </div>

        <div className="relative my-10" aria-hidden="true">
          <div className="h-[3px] w-full bg-gradient-to-r from-gray-50 via-gray-300 to-gray-50" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-heading font-semibold text-primary-navy">Publications</h2>
            <ul className="mt-4 space-y-3 text-text-grey list-disc pl-5">
              <li>Article title placeholder — Publication name (2025)</li>
              <li>Conference talk placeholder — Event name (2025)</li>
              <li>Blog post placeholder — Topic (2025)</li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <h2 className="text-xl font-heading font-semibold text-primary-navy">Guides & Downloads</h2>
            <ul className="mt-4 space-y-3 text-text-grey list-disc pl-5">
              <li>PDF guide placeholder — Getting started</li>
              <li>Checklist placeholder — Session preparation</li>
              <li>Worksheet placeholder — Reflection prompts</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
