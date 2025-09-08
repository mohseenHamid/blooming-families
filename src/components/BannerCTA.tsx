"use client"

import { Button } from "./ui/Button";

import Link from 'next/link';

interface BannerCTAProps {
  title: string;
  primaryActionText: string;
  onPrimaryAction: () => void;
  secondaryActionText?: string;
  secondaryActionLink?: string;
}

export default function BannerCTA({ title, primaryActionText, onPrimaryAction, secondaryActionText, secondaryActionLink }: BannerCTAProps) {
  return (
    <section className="bg-primary-navy text-white rounded-2xl mx-auto">
      <div className="px-6 md:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-xl md:text-2xl font-heading text-center md:text-left flex-1">{title}</h2>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Button 
              variant="secondary"
              onClick={onPrimaryAction}
              className="w-full sm:w-auto"
            >
              {primaryActionText}
            </Button>
            {secondaryActionLink && secondaryActionText && (
              <Button asChild variant="ghost" className="text-white hover:bg-white/10 border-white/20 w-full sm:w-auto">
                <Link href={secondaryActionLink}>{secondaryActionText}</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
