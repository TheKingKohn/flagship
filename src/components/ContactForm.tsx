'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const projectOptions = [
  { value: '', label: 'Select a service...' },
  { value: 'website', label: 'Website Build' },
  { value: 'dashboard', label: 'Dashboard Build' },
  { value: 'automation', label: 'Automation Setup' },
  { value: 'analytics', label: 'Data Analytics' },
  { value: 'leadloom', label: 'LeadLoom Demo' },
  { value: 'vantracker', label: 'VanTracker Demo' },
  { value: 'insiderbot', label: 'SEC Insider Bot Demo' },
  { value: 'thekingkohn', label: 'TheKingKohn Demo' },
  { value: 'other', label: 'Other' },
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    project: '',
    notes: '',
  })

  useEffect(() => {
    const projectParam = searchParams?.get('project')
    if (projectParam) {
      setFormData(prev => ({ ...prev, project: projectParam }))
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.project) {
      alert('Please fill in all required fields.')
      return
    }

    // Construct mailto link
    const subject = encodeURIComponent(`Project Inquiry: ${formData.project}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      (formData.company ? `Company: ${formData.company}\n` : '') +
      `Project Interest: ${formData.project}\n\n` +
      `Notes:\n${formData.notes || 'No additional notes provided.'}`
    )

    window.location.href = `mailto:info@thewoob.com?subject=${subject}&body=${body}`
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-white transition-colors"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email <span className="text-red-400">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-white transition-colors"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company <span className="text-dark-muted">(optional)</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-white transition-colors"
          placeholder="Your company"
        />
      </div>

      <div>
        <label htmlFor="project" className="block text-sm font-medium mb-2">
          Project Interest <span className="text-red-400">*</span>
        </label>
        <select
          id="project"
          name="project"
          required
          value={formData.project}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-white transition-colors"
        >
          {projectOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-2">
          Notes
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={6}
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <button
        type="submit"
        className="w-full px-8 py-4 bg-white text-dark-bg rounded-lg font-medium hover:bg-gray-200 transition-colors"
      >
        Send via Email
      </button>

      <p className="text-sm text-dark-muted text-center">
        This will open your default email client with the message pre-filled.
      </p>
    </form>
  )
}
