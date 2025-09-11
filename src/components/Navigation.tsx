'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react';
import ContactUsOverlay from '@/components/ContactUsOverlay';

export default function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const openContactOverlay = () => {
    setContactOpen(true)
    // push a history state so Back closes the overlay
    try {
      const url = new URL(window.location.href)
      if (url.searchParams.get('contact') !== '1') {
        url.searchParams.set('contact', '1')
        window.history.pushState({ contactOverlay: true }, '', url)
      }
    } catch {}
  }

  const closeContactOverlay = () => {
    setContactOpen(false)
    try {
      const url = new URL(window.location.href)
      if (url.searchParams.get('contact') === '1') {
        // Go back to previous URL (removes the overlay marker)
        window.history.back()
      }
    } catch {}
  }

  // Allow other components (e.g., Footer) to open the contact overlay
  useEffect(() => {
    const openHandler = () => openContactOverlay()
    window.addEventListener('open-contact-overlay', openHandler as EventListener)
    return () => window.removeEventListener('open-contact-overlay', openHandler as EventListener)
  }, [])

  // Open on load if URL has ?contact=1
  useEffect(() => {
    try {
      const url = new URL(window.location.href)
      if (url.searchParams.get('contact') === '1') {
        setContactOpen(true)
      }
    } catch {}
  }, [])

  // Close when navigating back/forward to a URL without the param
  useEffect(() => {
    const onPop = () => {
      try {
        const url = new URL(window.location.href)
        if (url.searchParams.get('contact') !== '1') {
          if (contactOpen) {
            // Ask overlay to attempt a guarded close
            window.dispatchEvent(new Event('attempt-close-contact'))
            // If user cancels, overlay stays open; restore the URL param
            setTimeout(() => {
              if (contactOpen) {
                const u = new URL(window.location.href)
                if (u.searchParams.get('contact') !== '1') {
                  u.searchParams.set('contact', '1')
                  window.history.pushState({ contactOverlay: true }, '', u)
                }
              }
            }, 50)
          } else {
            setContactOpen(false)
          }
        }
      } catch {}
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [contactOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Courses', href: '/courses' },
    { name: 'Resources', href: '/resources' },
  ];

  const filteredNavigation = navigation.filter(item => item.name !== 'Home' || pathname !== '/');

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="container-custom">
        <div className="relative flex items-center justify-between h-16 xl:h-20">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="Blooming Families home">
              <Image
                src="/logo/BP-families-colour-Logo.svg"
                alt="Blooming Families"
                width={120}
                height={32}
                priority
              />
            </Link>
          </div>

          {/* Center: Desktop Navigation (Absolutely Centered) */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center space-x-4 xl:space-x-8">
            {filteredNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-grey hover:text-primary-green transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
            </div>
          </div>

          {/* Right: CTA and mobile menu */}
          <div className="flex items-center justify-end gap-1 xl:gap-2">
            <div className="hidden xl:flex items-center gap-2">
              <button
                type="button"
                className="btn-nav text-sm"
                data-cal-link="blooming-families/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                aria-label="Book now"
              >
                Book now
              </button>
              <button
                type="button"
                className="btn-nav-outline text-sm"
                onClick={openContactOverlay}
                aria-label="Contact us"
              >
                Contact us
              </button>
            </div>
            <div className="xl:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-text-grey hover:text-primary-green transition-colors duration-200 rounded-md hover:bg-gray-50"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black/20 backdrop-blur-sm xl:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <div className="xl:hidden relative">
              <div className="px-4 py-4 space-y-3 bg-white border-t shadow-lg">
                {filteredNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-text-grey hover:text-primary-green hover:bg-gray-50 transition-colors duration-200 rounded-lg font-medium"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <button
                    type="button"
                    className="block w-full btn-outline text-center"
                    onClick={() => { setIsOpen(false); openContactOverlay() }}
                    aria-label="Contact us"
                  >
                    Contact us
                  </button>
                  <button
                    type="button"
                    className="block w-full btn-primary text-center"
                    data-cal-link="blooming-families/30min"
                    data-cal-namespace="30min"
                    data-cal-config='{"layout":"month_view"}'
                    onClick={() => setIsOpen(false)}
                    aria-label="Book now"
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      
      {/* Contact Overlay */}
      {contactOpen && (
        <ContactUsOverlay 
          open={contactOpen}
          onClose={closeContactOverlay}
        />
      )}
    </nav>
  )
}
