import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion';
import { Button } from '@/components/ui/Button';
import { PlayCircle, FileText, Download } from 'lucide-react';

export const metadata = {
  title: 'Resources | Blooming Families',
  description: 'Explore articles, publications, event recordings, and downloadable tools from Blooming Families.',
};

const publications = [
  { title: 'Article Title Placeholder', source: 'Publication Name, 2025' },
  { title: 'Conference Talk Placeholder', source: 'Event Name, 2025' },
];

const recordings = [
  { title: 'Podcast Episode Title', date: 'Sep 2025' },
  { title: 'Webinar Recording: Topic', date: 'Aug 2025' },
];

const downloadables = [
  { title: 'Parenting Plan Builder', description: 'A template to help co-parents create a structured plan.' },
  { title: 'Co-Parenting Communication Templates', description: 'Sample scripts for navigating difficult conversations.' },
];

export default function ResourcesPage() {
  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-background-white to-primary-green/5 py-16 lg:py-24">
        <div className="page-container text-center">
          <h1 className="page-title">Resources Hub</h1>
          <p className="page-intro mt-4">Explore articles, event recordings, and downloadable tools.</p>
        </div>
      </header>

      <main className="page-container py-16 lg:py-20">
        <Accordion type="single" collapsible defaultValue="item-1" className="w-full max-w-3xl mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>Publications</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                <p className="text-text-grey">Coming Soon – Browse articles and publications from our founder.</p>
                {publications.map(pub => (
                  <div key={pub.title} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                    <FileText className="h-5 w-5 text-primary-navy shrink-0" />
                    <div>
                      <p className="font-semibold text-primary-navy">{pub.title}</p>
                      <p className="text-sm text-text-grey">{pub.source}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Event Recordings / Podcasts</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {recordings.map(rec => (
                  <div key={rec.title} className="flex items-center justify-between gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <PlayCircle className="h-8 w-8 text-primary-green shrink-0" />
                      <div>
                        <p className="font-semibold text-primary-navy">{rec.title}</p>
                        <p className="text-sm text-text-grey">{rec.date}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Play</Button>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Downloadables</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-4 pt-2">
                {downloadables.map(item => (
                  <div key={item.title} className="flex items-center justify-between gap-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center gap-4">
                      <Download className="h-5 w-5 text-primary-navy shrink-0" />
                      <div>
                        <p className="font-semibold text-primary-navy">{item.title}</p>
                        <p className="text-sm text-text-grey">{item.description}</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">Download</Button>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </main>
    </div>
  );
}
