'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ContactModal from '@/components/ContactModal'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Coaching', href: '/coaching' },
    { name: 'Courses', href: '/courses' },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-black/5">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 nav:h-20 nav:grid nav:grid-cols-3">
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

          {/* Center: Desktop Navigation */}
          <div className="hidden nav:flex items-center justify-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-grey hover:text-primary-green transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: CTA and mobile menu */}
          <div className="flex items-center justify-end gap-2">
            <div className="hidden nav:flex items-center gap-2">
              <button
                type="button"
                className="btn-nav"
                data-cal-link="blooming-families/30min"
                data-cal-namespace="30min"
                data-cal-config='{"layout":"month_view"}'
                aria-label="Book now"
              >
                Book now
              </button>
              <button
                type="button"
                className="btn-nav-outline"
                onClick={() => setContactOpen(true)}
                aria-label="Contact us"
              >
                Contact us
              </button>
            </div>
            <div className="nav:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-2 text-text-grey hover:text-primary-green"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="nav:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-text-grey hover:text-primary-green transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <button
                type="button"
                className="block w-full mx-3 mt-2 btn-outline text-center"
                onClick={() => { setIsOpen(false); setContactOpen(true) }}
                aria-label="Contact us"
              >
                Contact us
              </button>
              <button
                type="button"
                className="block w-full mx-3 mt-4 btn-primary text-center"
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
        )}
        <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      </div>
    </nav>
  )
}
