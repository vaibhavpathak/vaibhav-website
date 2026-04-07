import { useEffect } from 'react'

const measurementId = import.meta.env.VITE_GA_ID

// Simple analytics tracking - replace with actual analytics service
export const trackEvent = (eventName, properties = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, properties)
  }
}

export const trackPageView = (pageName) => {
  trackEvent('page_view', {
    page_title: pageName,
    page_location: window.location.href
  })
}

const Analytics = () => {
  useEffect(() => {
    if (measurementId && typeof window !== 'undefined' && !window.gtag) {
      const script = document.createElement('script')
      script.async = true
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
      document.head.appendChild(script)

      window.dataLayer = window.dataLayer || []
      window.gtag = function gtag() {
        window.dataLayer.push(arguments)
      }
      window.gtag('js', new Date())
      window.gtag('config', measurementId)
    }

    // Track initial page load
    trackPageView('Home')

    // Track scroll depth
    const handleScroll = () => {
      const scrollTop = window.pageYOffset
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = Math.round((scrollTop / docHeight) * 100)

      if (scrollPercent >= 25 && scrollPercent < 50) {
        trackEvent('scroll_25')
      } else if (scrollPercent >= 50 && scrollPercent < 75) {
        trackEvent('scroll_50')
      } else if (scrollPercent >= 75) {
        trackEvent('scroll_75')
      }
    }

    // Track time on page
    const startTime = Date.now()
    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      trackEvent('time_on_page', { duration_seconds: timeSpent })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  return null // This component doesn't render anything
}

export default Analytics
