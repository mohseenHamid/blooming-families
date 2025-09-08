"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { OrganisationEnquiryForm } from '@/components/OrganisationEnquiryForm';

const services = [
  {
    title: 'Tailored training programmes',
    description: 'Custom-built workshops and training series designed to meet the specific needs of your organisation. We cover topics like mental health in the workplace, family-friendly policies, and supporting employees through life transitions.',
  },
  {
    title: 'Speaker events',
    description: 'Engaging and informative talks from our founder, Dr. Ruby, on topics ranging from parenting and relationships to emotional wellbeing. Perfect for conferences, team away-days, and community events.',
  },
  {
    title: 'Course delivery',
    description: 'We can deliver our evidence-based parenting and couples courses directly to your organisation, providing valuable skills and support to your employees or community members.',
  },
];

export default function OrganisationsPageClient() {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  return (
    <div className="bg-background-white">
      <header className="bg-gradient-to-br from-background-white to-primary-navy/5 py-16 lg:py-24">
        <div className="page-container text-center">
          <h1 className="page-title">Training & events for organisations</h1>
          <p className="page-intro mt-4">Supporting your team’s wellbeing with tailored programmes and expert speakers.</p>
        </div>
      </header>

      <main className="page-container py-16 lg:py-20 space-y-16">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-navy">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-text-grey">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <div className="text-center border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-heading font-semibold text-primary-navy mb-4">Ready to partner with us?</h3>
          <Button variant="secondary" onClick={() => setIsEnquiryOpen(true)}>Enquire now</Button>
          <p className="text-text-light text-sm mt-4">Let's discuss how we can support your organisation's goals.</p>
        </div>
      </main>
      <OrganisationEnquiryForm open={isEnquiryOpen} onOpenChange={setIsEnquiryOpen} />
    </div>
  );
}
