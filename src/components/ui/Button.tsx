"use client"

import { Slot } from '@radix-ui/react-slot'
import clsx from 'clsx'
import React from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'orange';
type Size = 'default' | 'sm' | 'lg' | 'icon';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: Variant;
  size?: Size;
};

const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed min-h-[44px]'

const sizes: Record<Size, string> = {
  default: 'px-4 py-3 sm:px-6',
  sm: 'h-9 rounded-md px-3 min-h-[36px]',
  lg: 'h-12 rounded-lg px-6 sm:px-8 min-h-[48px]',
  icon: 'h-11 w-11 min-h-[44px] min-w-[44px]',
};

const variants: Record<Variant, string> = {
  primary: 'bg-primary-green text-white hover:bg-primary-green-hover focus:ring-primary-green',
  secondary: 'bg-primary-navy text-white hover:bg-primary-navy/90 focus:ring-primary-navy',
  outline: 'border border-gray-200 text-primary-navy hover:bg-gray-100 focus:ring-gray-300 transition-shadow hover:shadow-sm',
  ghost: 'text-primary-navy hover:bg-gray-50 focus:ring-gray-200',
  orange: 'bg-primary-orange text-white hover:bg-primary-orange-hover focus:ring-primary-orange',
}

export function Button({ className, variant = 'primary', size = 'default', asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  )
}
