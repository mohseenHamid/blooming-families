import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import ToastProvider from '@/components/providers/ToastProvider'

export const metadata: Metadata = {
  title: 'Blooming Families - Coaching & Family Services',
  description: 'Professional coaching and courses for families, couples, and individuals. Supporting your journey through life transitions.',
  keywords: 'family coaching, couples therapy, parenting support, pre-marriage counseling, UK',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-body text-text-dark bg-background-light min-h-screen flex flex-col">
        {/* Cal.com embed: enables elements with data-cal-* attributes to open the scheduler */}
        <Script id="cal-embed" strategy="afterInteractive">{`
          (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
          Cal("init", "30min", {origin:"https://app.cal.com"});
          Cal.ns["30min"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        `}</Script>
        {children}
        <ToastProvider />
      </body>
    </html>
  )
}
