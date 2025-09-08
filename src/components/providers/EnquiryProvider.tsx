"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { OrganisationEnquiryForm } from '@/components/OrganisationEnquiryForm';

interface EnquiryContextType {
  openEnquiry: () => void;
}

const EnquiryContext = createContext<EnquiryContextType | undefined>(undefined);

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error('useEnquiry must be used within an EnquiryProvider');
  }
  return context;
}

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openEnquiry = () => setIsOpen(true);

  return (
    <EnquiryContext.Provider value={{ openEnquiry }}>
      {children}
      <OrganisationEnquiryForm open={isOpen} onOpenChange={setIsOpen} />
    </EnquiryContext.Provider>
  );
}
