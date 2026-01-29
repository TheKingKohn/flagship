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
  { value: 'mountainhighway', label: 'Mountain Highway Demo' },
  { value: 'unsure', label: 'Not sure / Just exploring' },
  { value: 'other', label: 'Other' },
]

export function ContactForm() {
  const searchParams = useSearchParams()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    budget: '',
    timeline: '',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validate required fields
    if (!formData.name || !formData.email || !formData.project) {
      setErrorMessage('Please fill in all required fields.')
      setSubmitStatus('error')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          project: '',
          budget: '',
          timeline: '',
          notes: '',
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Failed to send message. Please try emailing info@thewoob.com directly.')
    } finally {
      setIsSubmitting(false)
    }
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
        <label htmlFor="budget" className="block text-sm font-medium mb-2">
          Budget Range <span className="text-dark-muted">(optional)</span>
        </label>
        <select
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-white transition-colors"
        >
          <option value="">Select a budget range...</option>
          <option value="$500 - $1,500">$500 - $1,500</option>
          <option value="$1,500 - $3,000">$1,500 - $3,000</option>
          <option value="$3,000 - $5,000">$3,000 - $5,000</option>
          <option value="$5,000+">$5,000+</option>
          <option value="Not sure yet">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="timeline" className="block text-sm font-medium mb-2">
          Deadline <span className="text-dark-muted">(optional)</span>
        </label>
        <select
          id="timeline"
          name="timeline"
          value={formData.timeline}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-white transition-colors"
        >
          <option value="">Select a timeline...</option>
          <option value="ASAP">ASAP (within 2 weeks)</option>
          <option value="1 month">Within 1 month</option>
          <option value="2-3 months">2-3 months</option>
          <option value="Flexible">Flexible</option>
        </select>
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium mb-2">
          What are you trying to build?
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={6}
          value={formData.notes}
          onChange={handleChange}
          className="w-full px-4 py-3 bg-dark-card border border-dark-border rounded-lg focus:outline-none focus:border-white transition-colors resize-none"
          placeholder="Tell me about your project, goals, and any specific requirements..."
        />
      </div>

      {submitStatus === 'success' && (
        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <p className="text-green-400 font-medium">✓ Message sent successfully!</p>
          <p className="text-sm text-dark-muted mt-1">
            I'll get back to you within 24-48 hours. Check your email for a confirmation.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
          <p className="text-red-400 font-medium">✗ {errorMessage}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-8 py-4 bg-white text-dark-bg rounded-lg font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
