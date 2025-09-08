import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import BulletIcon from '@/components/ui/BulletIcon';
import UpcomingCourses from '@/components/UpcomingCourses';

export const metadata = {
  title: 'Parenting & couples courses | Blooming Families',
  description: 'Explore our structured group programmes, online and in-person, designed to support you at every stage of your family journey.',
};

const courseCategories = [
  {
    title: 'Parenting courses',
    items: ['Primary Age', 'Secondary Age'],
  },
  {
    title: 'Couples courses',
    items: ['New Couples (Online & Residential)', 'Recorded Workshop Series'],
  },
];

export default function CoursesPage() {
  return (
    <div className="bg-background-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-background-white to-primary-green/5 py-16 lg:py-24">
        <div className="page-container text-center">
          <h1 className="page-title">Parenting & couples courses</h1>
          <p className="page-intro mt-4">Explore our structured group programmes, online and in-person.</p>
        </div>
      </header>

      <main className="page-container py-16 lg:py-20 space-y-16">
        {/* Course Categories Section */}
        <section>
          <h2 className="text-3xl font-heading font-bold text-primary-navy text-center mb-8">Course categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseCategories.map((category) => (
              <Card key={category.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-navy">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <BulletIcon className="text-primary-green" />
                        <span className="text-text-grey">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Upcoming Courses Section */}
        <UpcomingCourses />
      </main>
    </div>
  );
}
