import type { Metadata } from 'next'
import { Button } from '@/components/Button'
import Link from 'next/link'

export const metadata: Metadata = {
  title: '2Gamble',
  description: 'Token economy platform prototype with auth, admin analytics, and payments integration.',
  alternates: {
    canonical: 'https://thewoob.com/work/2gamble',
  },
}

export default function TwoGamblePage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="inline-flex items-center text-dark-muted hover:text-white mb-8 transition-colors">
          ← Back to Projects
        </Link>

        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-5xl md:text-6xl font-bold">2Gamble</h1>
          <span className="px-3 py-1 text-sm font-medium bg-orange-500/20 text-orange-300 border border-orange-500/40 rounded">
            Prototype
          </span>
        </div>

        <p className="text-xl text-dark-muted mb-12 leading-relaxed">
          Token economy platform prototype demonstrating deposit/withdrawal flows, user token management, and admin analytics. 
          Built to explore payment integration patterns and real-money balance systems.
        </p>

        {/* What It Does */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What It Does</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">User authentication with secure session management</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Stripe integration for deposits and withdrawals with transaction logging</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Token-based economy with user balances and transaction history</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Admin dashboard with user analytics, transaction monitoring, and controls</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Withdrawal approval workflow with admin review and payout processing</span>
            </li>
          </ul>
        </section>

        {/* What I Built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Built</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Next.js application with API routes for payment processing</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">PostgreSQL database schema for users, balances, and transaction ledger</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Stripe payment intent flow with webhook handlers for deposit confirmations</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Admin panel with role-based access control and transaction filtering</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Balance reconciliation system to prevent double-spending or overdrafts</span>
            </li>
          </ul>
        </section>

        {/* Technical Challenges */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Technical Challenges</h2>
          <div className="space-y-6">
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Payment Reconciliation</h3>
              <p className="text-dark-muted">
                Stripe webhooks can arrive out of order or fail silently. Built an idempotency system to ensure 
                deposits are credited exactly once, even if webhooks are replayed or delayed.
              </p>
            </div>
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Transaction Integrity</h3>
              <p className="text-dark-muted">
                User balances must never go negative or duplicate. Used database transactions and row-level locking 
                to prevent race conditions when processing concurrent deposits/withdrawals.
              </p>
            </div>
            <div className="p-6 bg-dark-card border border-dark-border rounded-lg">
              <h3 className="text-xl font-bold mb-3">Withdrawal Approval Flow</h3>
              <p className="text-dark-muted">
                Withdrawals require admin approval to prevent fraud. Built a queue system where pending withdrawals 
                are frozen in user balances until approved or rejected by admins.
              </p>
            </div>
          </div>
        </section>

        {/* What I Learned */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">What I Learned</h2>
          <div className="space-y-4 text-dark-muted">
            <p>
              <strong className="text-white">Handling real money is different:</strong> Unlike typical CRUD apps, 
              financial systems require idempotency, audit trails, and reconciliation logic. Every transaction needs 
              a paper trail.
            </p>
            <p>
              <strong className="text-white">Stripe webhooks are asynchronous:</strong> Payment confirmations don't 
              happen instantly. The user experience needs to handle "processing" states gracefully while webhooks 
              finalize in the background.
            </p>
            <p>
              <strong className="text-white">Admin controls are critical:</strong> Any platform handling deposits/withdrawals 
              needs fraud detection, manual review capabilities, and the ability to freeze accounts or reverse transactions.
            </p>
          </div>
        </section>

        {/* Use Cases for This Pattern */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Where This Pattern Applies</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Marketplace platforms with escrow or seller payouts</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Subscription services with credits or wallet systems</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Reward programs with point redemption and cash-out options</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-3">→</span>
              <span className="text-dark-muted">Gaming platforms with in-game currency and real-money conversion</span>
            </li>
          </ul>
        </section>

        {/* CTA */}
        <div className="flex gap-4">
          <Button href="/contact?project=2gamble">Discuss Similar Build</Button>
          <Button href="/services/dashboard-build" variant="secondary">
            See Dashboard Service
          </Button>
        </div>
      </div>
    </div>
  )
}
