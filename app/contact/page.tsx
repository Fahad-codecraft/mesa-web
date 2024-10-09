import { Mail, Phone, MapPin } from 'lucide-react'
import React from 'react'

const page = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="mb-6">
            We'd love to hear from you. Please fill out the form below, and we'll get back to you as soon as possible.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="mr-2 h-5 w-5" />
              <span>info@example.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="mr-2 h-5 w-5" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="mr-2 h-5 w-5" />
              <span>123 Main St, Anytown, USA 12345</span>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScZIDgQtoAnLTNR0cuCvmRSCHwPrFtRtR4QRnEdXQYRl7hy-A/viewform?embedded=true"
            width="100%"
            height="800"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Contact Form"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </main>
  )
}

export default page