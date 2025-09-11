import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ui/ScrollToTopButton';
import { EnquiryProvider } from '@/components/providers/EnquiryProvider';

export default function WithChromeLayout({ children }: { children: React.ReactNode }) {
  return (
    <EnquiryProvider>
      <Navigation />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
      <ScrollToTopButton />
    </EnquiryProvider>
  )
}
