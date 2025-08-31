import FullPageHero from '@/components/FullPageHero'
import AboutMerged from '@/components/AboutMerged'
import ServicesWithTestimonials from '@/components/ServicesWithTestimonials'
import CTASection from '@/components/CTASection'
import FAQAccordion from '@/components/FAQAccordion'

export default function HomePage() {
  return (
    <>
      <FullPageHero />
      <AboutMerged />
      <ServicesWithTestimonials />
      <section className="py-16 bg-gradient-to-br from-background-light via-background-white to-background-light">
        <div className="page-container">
          <FAQAccordion title="FAQs" limit={4} />
        </div>
      </section>
    </>
  )
}
