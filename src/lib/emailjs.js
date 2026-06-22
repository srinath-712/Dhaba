import emailjs from '@emailjs/browser'

export const sendContactForm = (formData) => {
  return emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    formData,
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
}
