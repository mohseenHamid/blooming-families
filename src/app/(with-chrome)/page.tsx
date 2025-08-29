import FullPageHero from '@/components/FullPageHero'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ServicesOverview from '@/components/ServicesOverview'
import UpcomingCourses from '@/components/UpcomingCourses'
import Testimonials from '@/components/Testimonials'
import CTASection from '@/components/CTASection'

export default function HomePage() {
  return (
    <>
      <FullPageHero />
      <Hero />
      <About />
      <ServicesOverview />
      <UpcomingCourses />
      <Testimonials />
      <CTASection />
    </>
  )
}
