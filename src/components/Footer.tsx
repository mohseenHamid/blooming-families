"use client"

import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-text-dark text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
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
            <p className="text-text-light">
              <strong>Email:</strong> info@bloomingfamilies.com<br />
              <strong>Instagram:</strong> @bloomingfamilies
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/coaching" className="text-text-light hover:text-primary-green transition-colors">
                  1:1 coaching
                </Link>
              </li>
              <li>
                <Link href="/coaching" className="text-text-light hover:text-primary-green transition-colors">
                  Couples coaching
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-text-light hover:text-primary-green transition-colors">
                  Courses & workshops
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/coaching#booking" className="text-text-light hover:text-primary-green transition-colors">
                  Book session
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-text-light hover:text-primary-green transition-colors">
                  View courses
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-light hover:text-primary-green transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-text-grey mt-12 pt-8 text-center">
          <p className="text-text-light">
            &copy; 2024 Blooming Families. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
