import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function WithChromeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navigation />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </>
  )
}
