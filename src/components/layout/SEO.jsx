import { useEffect } from 'react'

/**
 * SEO metadata updater component.
 * Sets the document title, meta description, and keywords dynamically.
 * 
 * @param {Object} props
 * @param {string} props.title - Title for the page.
 * @param {string} props.description - Description for search engine snippet.
 * @param {string} props.keywords - Comma-separated list of keywords.
 */
export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    if (title) {
      // Avoid double-appending the brand name if it's already in the page title
      if (title.includes("Sri Punjabi's")) {
        document.title = title
      } else {
        document.title = `${title} | Sri Punjabi's Dhaba`
      }
    }

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]')
      if (!metaDesc) {
        metaDesc = document.createElement('meta')
        metaDesc.name = 'description'
        document.head.appendChild(metaDesc)
      }
      metaDesc.setAttribute('content', description)
    }

    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]')
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta')
        metaKeywords.name = 'keywords'
        document.head.appendChild(metaKeywords)
      }
      metaKeywords.setAttribute('content', keywords)
    }
  }, [title, description, keywords])

  return null
}
