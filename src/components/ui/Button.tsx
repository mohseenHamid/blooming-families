"use client"

import clsx from 'clsx'
import React from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
}

const base = 'inline-flex items-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'

const variants: Record<Variant, string> = {
  primary: 'bg-primary-green text-white hover:bg-primary-green-hover px-6 py-3 focus:ring-primary-green',
  secondary: 'bg-primary-navy text-white hover:bg-primary-navy/90 px-6 py-3 focus:ring-primary-navy',
  outline: 'border border-gray-200 text-primary-navy hover:bg-gray-50 px-4 py-2 focus:ring-gray-300',
  ghost: 'text-primary-navy hover:bg-gray-50 px-3 py-2 focus:ring-gray-200',
}

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={clsx(base, variants[variant], className)}
      {...props}
    />
  )
}
