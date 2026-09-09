import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CardioPredict | Heart Disease Risk Prediction',
  description: 'An academic machine-learning demonstration using a Random Forest Classifier to estimate heart disease risk from 13 patient features.',
  generator: 'CardioPredict Academic Project',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7fcfa',
  userScalable: true,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="bg-background">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
