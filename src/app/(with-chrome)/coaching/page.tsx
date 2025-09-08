import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import BulletIcon from '@/components/ui/BulletIcon';

export const metadata = {
  title: '1:1 & couples coaching | Blooming Families',
  description: 'Personalised 1:1 and couples support tailored to you. All coaching starts with an initial consultation to discuss your needs.',
};

const oneOnOneTopics = [
  { title: 'Parenting', description: 'Guidance for navigating the challenges of parenthood.' },
  { title: 'Co-parenting after divorce', description: 'Strategies for effective and harmonious co-parenting.' },
  { title: 'Family dynamics', description: 'Support for improving communication and relationships within the family.' },
];

const couplesTopics = [
  { title: 'New couples', description: 'Building a strong foundation for a new relationship.' },
  { title: 'Long-term couples', description: 'Rediscover connection and navigate challenges together.' },
  { title: 'Joint sessions & mediation', description: 'Facilitated discussions to resolve conflicts and find common ground.' },
  { title: 'Family coaching', description: 'Involving multiple family members to improve group dynamics.' },
];

const generalInfo = [
  'What’s included in a session',
  'Block booking facility',
  'Refund information',
  'Cancellation policy',
  'Our confidentiality promise',
  'A personalised & tailored approach',
  'Coaching agreement overview',
];

export default function CoachingPage() {
  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-background-white to-primary-green/5 py-12 sm:py-16 lg:py-24">
        <div className="page-container px-4 sm:px-6 text-center">
          <h1 className="page-title">1:1 & couples coaching</h1>
          <p className="page-intro mt-4">Personalised support for wherever you are on your journey.</p>
        </div>
      </header>

      <main className="page-container px-4 sm:px-6 py-12 sm:py-16 lg:py-20 space-y-12 sm:space-y-16">
        {/* Important Note Section */}
        <div className="bg-primary-navy/5 border-l-4 border-primary-navy text-primary-navy p-4 sm:p-6 rounded-r-lg">
          <h2 className="font-heading font-semibold text-lg sm:text-xl mb-2">Start your journey here</h2>
          <p className="text-text-grey text-sm sm:text-base">
            All coaching starts with an initial consultation. This allows us to understand your needs and discuss which coaching session types and pricing options are right for you.
          </p>
        </div>

        {/* Session Types Accordion */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-primary-navy text-center mb-8">Our coaching services</h2>
          <Accordion type="single" collapsible className="w-full bg-white rounded-2xl p-4 sm:p-8 shadow-sm border border-gray-100">
            <AccordionItem value="item-1">
              <AccordionTrigger>1:1 coaching</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <p>Individual sessions designed to provide you with personalised support and strategies.</p>
                  <ul className="space-y-3">
                    {oneOnOneTopics.map(topic => (
                      <li key={topic.title} className="flex items-start gap-3">
                        <BulletIcon className="mt-1.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary-navy">{topic.title}</h4>
                          <p className="text-sm text-text-grey">{topic.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Couples coaching</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <p>Joint sessions to help couples navigate their journey together, fostering communication and understanding.</p>
                  <ul className="space-y-3">
                    {couplesTopics.map(topic => (
                      <li key={topic.title} className="flex items-start gap-3">
                        <BulletIcon className="mt-1.5 shrink-0" />
                        <div>
                          <h4 className="font-semibold text-primary-navy">{topic.title}</h4>
                          <p className="text-sm text-text-grey">{topic.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* General Information Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-primary-navy text-center mb-8">What to expect</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {generalInfo.map(item => (
              <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-lg border border-gray-100 shadow-sm">
                <BulletIcon className="text-primary-green shrink-0" />
                <span className="font-medium text-text-grey">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center border-t border-gray-200 pt-12">
          <h3 className="text-2xl font-heading font-semibold text-primary-navy mb-4">What to expect</h3>
          <button
            type="button"
            className="btn-secondary shadow-lg"
            data-cal-link="blooming-families/30min"
            data-cal-namespace="30min"
            data-cal-config='{"layout":"month_view"}'
          >
            Book your initial consultation
          </button>
          <p className="text-text-light text-sm mt-4">Choose a date and time that works for you in the next step.</p>
        </div>
      </main>
    </div>
  );
}
