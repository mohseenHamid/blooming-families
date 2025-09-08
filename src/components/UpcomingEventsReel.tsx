import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/Card';
import { Button } from './ui/Button';

const events = [
  {
    id: 1,
    title: "Pre-Marriage Preparation",
    format: "Online",
    date: "2024-10-15",
    description: "A comprehensive course for couples preparing for marriage."
  },
  {
    id: 2,
    title: "Positive Parenting Workshop",
    format: "In-Person",
    date: "2024-11-05",
    description: "Learn practical strategies for raising resilient and happy children."
  },
  {
    id: 3,
    title: "Communication in Marriage",
    format: "Online",
    date: "2024-11-20",
    description: "Strengthen your marital bond through effective communication techniques."
  },
  {
    id: 4,
    title: "Navigating Family Dynamics",
    format: "Online",
    date: "2024-12-10",
    description: "A workshop for understanding and improving family relationships."
  },
];

export default function UpcomingEventsReel() {
  return (
    <section className="py-16 lg:py-20 bg-background-grey">
      <div className="container-custom">
        <h2 className="text-3xl font-heading font-bold text-primary-navy text-center mb-8">Upcoming events & workshops</h2>
        <div className="flex overflow-x-auto space-x-6 pb-4">
          {events.map(event => (
            <div key={event.id} className="flex-shrink-0 w-[300px]">
              <Card className="h-full flex flex-col">
                <CardContent className="p-6 flex flex-col flex-grow">
                  <p className="text-sm font-medium text-primary-green">{event.format}</p>
                  <h3 className="text-xl font-semibold text-primary-navy mt-2 mb-2">{event.title}</h3>
                  <p className="text-sm text-text-grey mb-4">{new Date(event.date).toLocaleDateString('en-GB', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  <p className="text-text-grey flex-grow">{event.description}</p>
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm">
                      <Link href={`/events/${event.id}`}>Learn more</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
