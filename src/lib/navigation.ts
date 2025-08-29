"use client"

import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

/**
 * Navigates back if history is available, otherwise pushes a fallback path.
 */
export function safeBack(router: AppRouterInstance, fallback: string) {
  if (typeof window !== 'undefined' && window.history.length > 1) {
    router.back()
  } else {
    router.push(fallback)
  }
}

/**
 * Exits the flow to a specific path (defaults to '/coaching').
 */
export function exitFlow(router: AppRouterInstance, to: string = '/coaching') {
  router.push(to)
}
