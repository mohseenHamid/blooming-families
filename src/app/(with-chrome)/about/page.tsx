import { Button } from '@/components/ui/Button';

export const metadata = {
  title: 'About Us | Blooming Families',
  description: 'Learn about the mission, history, and values behind Blooming Families.',
};

export default function AboutPage() {
  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-background-white to-primary-green/5 py-16 lg:py-24">
        <div className="page-container text-center">
          <h1 className="page-title">Our Story</h1>
        </div>
      </header>

      <main className="page-container py-16 lg:py-20 space-y-16">
        {/* Why Blooming Families? Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-primary-navy text-center mb-8">Why Blooming Families?</h2>
          <div className="prose prose-lg max-w-none mx-auto text-text-grey">
            <p>Content placeholder for the mission, purpose, and unique value of Blooming Families.</p>
          </div>
        </section>

        {/* Our History Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-primary-navy text-center mb-8">Our History</h2>
          <div className="prose prose-lg max-w-none mx-auto text-text-grey">
            <p>Content placeholder for the background on how the service started.</p>
          </div>
        </section>

        {/* The Need We Saw Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-primary-navy text-center mb-8">The Need We Saw</h2>
          <div className="prose prose-lg max-w-none mx-auto text-text-grey">
            <p>Content block describing the real-world gaps this service addresses.</p>
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-heading font-semibold text-primary-navy mb-4">Interested in joining our team?</h3>
          <Button variant="secondary" disabled>Meet the Team (Coming Soon)</Button>
        </div>
      </main>
    </div>
  );
}
