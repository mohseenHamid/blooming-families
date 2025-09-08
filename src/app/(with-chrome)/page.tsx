"use client";

"use client";

import { useState } from 'react';
import FullPageHero from '@/components/FullPageHero';
import AboutMerged from '@/components/AboutMerged';
import ServicesWithTestimonials from '@/components/ServicesWithTestimonials';
import FAQAccordion from '@/components/FAQAccordion';
import UpcomingEventsReel from '@/components/UpcomingEventsReel';
import { OrganisationEnquiryForm } from '@/components/OrganisationEnquiryForm';

export default function HomePage() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  return (
    <>
      <FullPageHero />
      <AboutMerged />
      <ServicesWithTestimonials onEnquiryClick={() => setIsEnquiryOpen(true)} />
      <section className="py-16 bg-gradient-to-br from-background-light via-background-white to-background-light">
        <div className="page-container">
          <FAQAccordion title="FAQs" limit={4} />
        </div>
      </section>
      <UpcomingEventsReel />
      <OrganisationEnquiryForm open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </>
  );
}
