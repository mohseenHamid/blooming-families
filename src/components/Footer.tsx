"use client"

import Link from 'next/link'
import Image from 'next/image'
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
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
              <p className="text-text-light">
                <strong>Email:</strong> info@bloomingfamilies.com<br />
                <strong>Instagram:</strong> @bloomingfamilies
              </p>
              <Link href="/contact" aria-label="Contact us">
                <Button variant="secondary" className="whitespace-nowrap">Contact us</Button>
              </Link>
            </div>
          </div>

          {/* Newsletter + Copyright (RHS) */}
          <div className="flex flex-col md:items-end">
            <div className="w-full md:max-w-sm">
              <h4 className="font-heading font-semibold text-lg mb-2 md:text-right">Subscribe to our newsletter</h4>
              <p className="text-text-light mb-4 md:text-right">Monthly insights and upcoming programmes. No spam.</p>
              <form className="flex w-full md:justify-end" onSubmit={(e) => e.preventDefault()}>
                <div className="w-full md:w-auto md:flex md:items-center md:gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="w-full md:w-64 rounded-full px-4 py-2 text-text-dark placeholder:text-text-grey focus:outline-none focus:ring-2 focus:ring-primary-green"
                    aria-label="Email address"
                  />
                  <button
                    type="submit"
                    className="mt-2 md:mt-0 inline-flex items-center justify-center rounded-full bg-primary-green text-text-dark font-medium px-4 py-2 hover:bg-primary-green/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>

            {/* Copyright inline on RHS */}
            <p className="text-text-light/80 text-xs md:text-right mt-6">&copy; 2025 Blooming Families. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
