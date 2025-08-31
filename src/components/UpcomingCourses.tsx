import Link from 'next/link'
import { Calendar, Users, MapPin } from 'lucide-react'

export default function UpcomingCourses() {
  // Mock data - will be replaced with Sanity CMS data
  const courses = [
    {
      id: 1,
      title: "Pre-Marriage Preparation",
      format: "Online",
      date: "2024-02-15",
      price: 149,
      capacity: 12,
      enrolled: 8,
      status: "open"
    },
    {
      id: 2,
      title: "Positive Parenting Workshop",
      format: "In-Person",
      date: "2024-02-28",
      price: 89,
      capacity: 20,
      enrolled: 15,
      status: "open"
    },
    {
      id: 3,
      title: "Communication in Marriage",
      format: "Online",
      date: "2024-03-10",
      price: 129,
      capacity: 15,
      enrolled: 15,
      status: "waitlist"
    }
  ]

  return (
    <section className="pt-16 lg:pt-10 pb-16 lg:pb-20 bg-background-grey overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-10 lg:mb-8">
          <span className="inline-block bg-primary-navy/10 text-primary-navy px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm font-medium mb-4">
            Programmes
          </span>
          <h2 className="text-[clamp(1.5rem,3.8vw+0.4rem,2.5rem)] font-heading font-bold text-primary-navy mb-3 lg:mb-2">
            Professional development programmes
          </h2>
          <p className="text-base md:text-lg text-text-grey max-w-2xl mx-auto">
            Structured learning opportunities for families seeking targeted support and skill development.
          </p>
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-blue-800 font-medium">Currently developing new programmes for 2024. Contact us to discuss your specific needs.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course) => (
            <div key={course.id} className="card">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.format === 'Online' 
                      ? 'bg-blue-100 text-blue-800' 
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {course.format}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.status === 'open' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-orange-100 text-orange-800'
                  }`}>
                    {course.status === 'open' ? 'Open' : 'Waitlist'}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary-navy mb-2">
                  {course.title}
                </h3>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-text-grey">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{new Date(course.date).toLocaleDateString('en-GB', { 
                    day: 'numeric', 
                    month: 'long', 
                    year: 'numeric' 
                  })}</span>
                </div>
                <div className="flex items-center text-text-grey">
                  <Users className="w-4 h-4 mr-2" />
                  <span>{course.enrolled}/{course.capacity} enrolled</span>
                </div>
                <div className="flex items-center text-text-grey">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{course.format === 'Online' ? 'Via Zoom' : 'London, UK'}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-navy">
                  £{course.price}
                </span>
                <Link 
                  href={`/courses#${course.id}`}
                  className={`px-5 py-3 md:px-6 md:py-3.5 rounded-custom font-semibold transition-colors text-sm md:text-base ${
                    course.status === 'open'
                      ? 'bg-primary-green text-white hover:bg-primary-green-hover'
                      : 'bg-orange-500 text-white hover:bg-orange-600'
                  }`}
                >
                  {course.status === 'open' ? 'Register' : 'Join Waitlist'}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/courses" className="btn-outline">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}
