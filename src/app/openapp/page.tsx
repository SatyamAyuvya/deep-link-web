'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function OpenAppPage() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor

    const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.kundlitalk&hl=en'
    const appStoreUrl = 'https://apps.apple.com/app/YOUR-IOS-APP-ID' // Replace this

    const timeout = setTimeout(() => {
      if (/android/i.test(userAgent)) {
        window.location.href = playStoreUrl
      } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        window.location.href = appStoreUrl
      }
    }, 1500)

    if (/android/i.test(userAgent)) {
      // Open Android app using intent URI
      window.location.href =
        'intent://open#Intent;scheme=kundlitalks;package=com.kundlitalk;end'
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
      // Open iOS app using custom scheme
      window.location.href = 'kundlitalks://open'
    }

    return () => clearTimeout(timeout)
  }, [])

  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Opening KundliTalk App...</h1>
      <p>
        If nothing happens,&nbsp;
        <Link href="https://play.google.com/store/apps/details?id=com.kundlitalk&hl=en">
          click here
        </Link>{' '}
        to download the app.
      </p>
    </main>
  )
}
