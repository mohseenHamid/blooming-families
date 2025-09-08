"use client"

import Link from 'next/link'
import Image from 'next/image'
import { Instagram } from 'lucide-react'
import { Button } from './ui/Button'

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Link href="/" className="flex items-center" aria-label="Blooming Families home">
                <Image
                  src="/logo/BP-families-colour-Logo.svg"
                  alt="Blooming Families"
                  width={120}
                  height={48}
                  priority
                />
              </Link>
            </div>
            <p className="text-text-light mb-4">
              Supporting families, couples, and individuals through life's journey with expert coaching and courses.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link href="/contact" aria-label="Contact us">
                <Button variant="secondary" className="whitespace-nowrap">Contact us</Button>
              </Link>
              <Link
                href="https://www.instagram.com/bloomingparenting"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Instagram"
                className="inline-flex items-center justify-center rounded-md bg-primary-navy text-white hover:bg-primary-navy/90 px-3 py-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-navy"
              >
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Links and Copyright */}
          <div className="flex flex-col md:items-end justify-between">
            <div className="flex items-center justify-center md:justify-end space-x-4">
              <Link href="/privacy-policy" className="text-sm text-text-light hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-sm text-text-light hover:text-white transition-colors">Terms</Link>
              <Link href="/contact" className="text-sm text-text-light hover:text-white transition-colors">Contact</Link>
            </div>
            <p className="text-text-light/80 text-xs text-center md:text-right mt-8 md:mt-0">&copy; 2025 Blooming Families. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
