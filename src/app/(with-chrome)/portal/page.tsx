import BulletIcon from '@/components/ui/BulletIcon';

export const metadata = {
  title: 'Client portal | Blooming Families',
  description: 'Manage your bookings, view past sessions, and access downloadable resources.',
};

export default function PortalPage() {
  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-background-white to-primary-green/5 py-16 lg:py-24">
        <div className="page-container text-center">
          <h1 className="page-title">Client portal (coming soon)</h1>
        </div>
      </header>

      <main className="page-container py-16 lg:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-text-grey mb-8">This is where you will be able to manage your journey with Blooming Families. We are working hard to bring this feature to you.</p>
          <div className="inline-block bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-semibold text-primary-navy mb-4">Features will include:</h2>
            <ul className="space-y-3 text-left">
              <li className="flex items-center gap-3">
                <BulletIcon className="text-primary-green" />
                <span>Manage your bookings</span>
              </li>
              <li className="flex items-center gap-3">
                <BulletIcon className="text-primary-green" />
                <span>View past sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <BulletIcon className="text-primary-green" />
                <span>Access downloadable resources</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
