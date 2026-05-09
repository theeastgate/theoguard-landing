import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Terms of Use — TheoGuard',
  description:
    'The terms and conditions governing your use of TheoGuard, the AI-powered theological content analysis service.',
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = 'May 9, 2026';
const CONTACT_EMAIL = 'hello@theoguard.com';

export default function TermsPage() {
  return (
    <div className="min-h-[100dvh] bg-white">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-amber-700 rounded-md flex items-center justify-center">
              <ShieldCheck weight="fill" className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-semibold text-stone-900 text-[15px]">TheoGuard</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-500 hover:text-stone-900 transition-colors duration-150"
          >
            &larr; Back to home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="mb-12">
          <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3">
            Legal
          </p>
          <h1 className="font-display text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight mb-4">
            Terms of Use
          </h1>
          <p className="text-stone-500 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="prose prose-stone max-w-none">
          <ProseSection title="1. Acceptance of Terms">
            <p>
              By creating an account or using TheoGuard (the &ldquo;Service&rdquo;), you agree to
              be bound by these Terms of Use (&ldquo;Terms&rdquo;). If you do not agree to these
              Terms, do not use the Service.
            </p>
            <p>
              These Terms constitute a legally binding agreement between you and TheoGuard
              (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). We may update these
              Terms from time to time. Continued use of the Service after changes become effective
              constitutes acceptance of the updated Terms.
            </p>
          </ProseSection>

          <ProseSection title="2. Description of Service">
            <p>
              TheoGuard is an AI-powered theological content analysis tool. The Service allows
              users to submit content — including PDF documents, Word documents, YouTube links, book
              titles, and plain text — and receive a doctrinal soundness report analyzing the
              content across theological categories including doctrine, hermeneutics, confessional
              alignment, and psychological or philosophical frameworks.
            </p>
            <p>
              The Service is intended for use by pastors, church leaders, ministry directors,
              elders, and others engaged in theological discernment for congregational contexts.
            </p>
          </ProseSection>

          <ProseSection title="3. Account Registration">
            <p>
              To use the Service, you must create an account with a valid email address. You are
              responsible for maintaining the confidentiality of your account credentials and for
              all activity that occurs under your account.
            </p>
            <p>
              You must be at least 18 years of age to create an account. By registering, you
              represent that you are 18 or older and that the information you provide is accurate
              and current.
            </p>
            <p>
              You may not share your account with others or create accounts for the purpose of
              circumventing usage limits or subscription requirements.
            </p>
          </ProseSection>

          <ProseSection title="4. Subscription Plans and Billing">
            <h3>4.1 Free Plan</h3>
            <p>
              New accounts receive five (5) theological analyses at no charge. These analyses do
              not expire but are not replenished. No credit card is required to create a free
              account.
            </p>

            <h3>4.2 Paid Plans</h3>
            <p>We offer the following paid subscription options:</p>
            <ul>
              <li>
                <strong>Monthly:</strong> $9.00 per month, billed monthly, unlimited analyses.
                Cancel at any time; access continues through the end of the current billing period.
              </li>
              <li>
                <strong>Annual:</strong> $79.00 per year, billed annually, unlimited analyses.
                Cancel at any time; access continues through the end of the current billing year.
              </li>
              <li>
                <strong>Lifetime:</strong> $179.00 one-time payment, unlimited analyses forever,
                all future features included.
              </li>
            </ul>

            <h3>4.3 Billing and Renewal</h3>
            <p>
              Monthly and annual subscriptions renew automatically at the end of each billing
              period unless cancelled before the renewal date. You will be charged using the
              payment method on file with Stripe, our payment processor.
            </p>
            <p>
              We will send a reminder email before your annual subscription renews. You can cancel
              at any time from your account settings or by contacting us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>

            <h3>4.4 Refunds</h3>
            <p>
              Monthly subscriptions are non-refundable for the current billing period. Annual
              subscriptions cancelled within 14 days of purchase are eligible for a full refund.
              Lifetime access purchases are eligible for a full refund within 30 days if you are
              not satisfied, no questions asked. To request a refund, contact us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>

            <h3>4.5 Price Changes</h3>
            <p>
              We may change our pricing at any time. Existing subscribers will receive at least 30
              days&apos; notice before any price increase takes effect. Lifetime access holders are
              not subject to price changes.
            </p>
          </ProseSection>

          <ProseSection title="5. Acceptable Use">
            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>
                Submit content that you do not have the right to use, distribute, or analyze
              </li>
              <li>
                Attempt to circumvent usage limits, access controls, or subscription requirements
                through any technical or other means
              </li>
              <li>
                Use the Service to generate content intended to harass, defame, or harm any
                individual, ministry, denomination, or religious group
              </li>
              <li>
                Reverse engineer, decompile, or attempt to extract source code from any part of
                the Service
              </li>
              <li>
                Resell, redistribute, or commercially exploit reports generated by the Service
                without our written consent
              </li>
              <li>
                Use automated scripts or bots to submit content or access the Service at scale
                beyond normal usage patterns
              </li>
              <li>
                Submit content that violates applicable law, including copyright, defamation, or
                privacy law
              </li>
            </ul>
          </ProseSection>

          <ProseSection title="6. Intellectual Property">
            <h3>6.1 Your Content</h3>
            <p>
              You retain all rights to content you submit to the Service. By submitting content,
              you grant TheoGuard a limited, non-exclusive license to process that content solely
              for the purpose of generating your analysis report. We do not claim ownership of
              content you submit.
            </p>

            <h3>6.2 Analysis Reports</h3>
            <p>
              The theological analysis reports generated by the Service are provided for your
              personal and ministerial use. You may share reports within your church leadership,
              elder board, or ministry team. You may not resell or commercially redistribute
              reports.
            </p>

            <h3>6.3 TheoGuard Property</h3>
            <p>
              All other aspects of the Service — including the software, website, logos, design,
              prompts, analysis methodology, and documentation — are the intellectual property of
              TheoGuard and are protected by copyright and other applicable laws. Nothing in these
              Terms grants you any rights in TheoGuard&apos;s intellectual property except as
              expressly stated.
            </p>
          </ProseSection>

          <ProseSection title="7. Disclaimer of Warranties">
            <p>
              THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
              WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR
              NON-INFRINGEMENT.
            </p>
            <p>
              TheoGuard does not warrant that the Service will be uninterrupted, error-free, or
              free from inaccuracies. AI-generated theological analysis is a tool to assist human
              discernment — it is not infallible, and it does not replace the judgment of trained
              theologians, pastors, or church leadership.
            </p>
            <p>
              <strong>The analysis reports generated by TheoGuard are informational tools, not
              authoritative theological verdicts.</strong> You are solely responsible for how you
              use, apply, or act upon the content of any report. TheoGuard accepts no
              responsibility for decisions made on the basis of its analysis.
            </p>
          </ProseSection>

          <ProseSection title="8. Limitation of Liability">
            <p>
              TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, THEOGUARD AND ITS OFFICERS,
              DIRECTORS, EMPLOYEES, AND AGENTS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICE,
              INCLUDING BUT NOT LIMITED TO LOSS OF DATA, LOSS OF REVENUE, OR HARM TO REPUTATION,
              EVEN IF THEOGUARD HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              IN NO EVENT SHALL THEOGUARD&apos;S TOTAL LIABILITY TO YOU FOR ALL CLAIMS ARISING
              FROM OR RELATED TO THE SERVICE EXCEED THE GREATER OF (A) THE AMOUNT YOU PAID TO
              THEOGUARD IN THE TWELVE MONTHS PRECEDING THE CLAIM OR (B) ONE HUNDRED DOLLARS
              ($100.00).
            </p>
          </ProseSection>

          <ProseSection title="9. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless TheoGuard and its officers,
              directors, employees, and agents from and against any claims, liabilities, damages,
              judgments, losses, costs, or expenses (including reasonable attorneys&apos; fees)
              arising out of or relating to: (a) your use of the Service; (b) your violation of
              these Terms; (c) content you submit to the Service; or (d) your violation of any
              applicable law or the rights of any third party.
            </p>
          </ProseSection>

          <ProseSection title="10. Termination">
            <p>
              You may terminate your account at any time from the account settings page or by
              contacting us. Upon termination, your access to the Service will cease and your data
              will be deleted within 30 days, except as required by law.
            </p>
            <p>
              We may suspend or terminate your account if you violate these Terms, engage in
              fraudulent behavior, or use the Service in a way that harms other users or the
              Service itself. We will generally provide notice before termination unless the
              violation is severe or ongoing.
            </p>
            <p>
              Provisions of these Terms that by their nature should survive termination — including
              Sections 6, 7, 8, 9, and 11 — will survive.
            </p>
          </ProseSection>

          <ProseSection title="11. Governing Law and Disputes">
            <p>
              These Terms are governed by the laws of the United States, without regard to conflict
              of law principles. Any disputes arising from these Terms or the Service shall be
              resolved through binding arbitration under the rules of the American Arbitration
              Association, except that either party may seek injunctive relief in a court of
              competent jurisdiction.
            </p>
            <p>
              You waive any right to participate in a class action lawsuit or class-wide arbitration
              against TheoGuard.
            </p>
          </ProseSection>

          <ProseSection title="12. Miscellaneous">
            <h3>12.1 Entire Agreement</h3>
            <p>
              These Terms, together with our Privacy Policy, constitute the entire agreement
              between you and TheoGuard regarding the Service and supersede all prior agreements
              and understandings.
            </p>

            <h3>12.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining
              provisions will continue in full force and effect.
            </p>

            <h3>12.3 No Waiver</h3>
            <p>
              Our failure to enforce any right or provision of these Terms will not constitute a
              waiver of that right or provision.
            </p>

            <h3>12.4 Assignment</h3>
            <p>
              You may not assign your rights or obligations under these Terms without our written
              consent. We may assign our rights to a successor in connection with a merger,
              acquisition, or sale of assets.
            </p>
          </ProseSection>

          <ProseSection title="13. Contact">
            <p>
              If you have questions about these Terms or wish to report a violation, please contact
              us:
            </p>
            <address className="not-italic mt-2 text-stone-700 leading-relaxed">
              TheoGuard
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-700 hover:text-amber-800">
                {CONTACT_EMAIL}
              </a>
            </address>
          </ProseSection>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200">
          <Link
            href="/privacy"
            className="text-sm text-amber-700 hover:text-amber-800 transition-colors duration-150"
          >
            Read our Privacy Policy &rarr;
          </Link>
        </div>
      </main>

      <footer className="border-t border-stone-200 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-stone-500">
            &copy; {new Date().getFullYear()} TheoGuard. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terms" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-xs text-stone-500 hover:text-stone-900 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProseSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="font-display text-xl font-bold text-stone-900 mb-4 tracking-tight">
        {title}
      </h2>
      <div className="text-stone-600 leading-relaxed space-y-4 [&_h3]:font-semibold [&_h3]:text-stone-800 [&_h3]:text-[15px] [&_h3]:mt-6 [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_li]:text-[15px] [&_p]:text-[15px] [&_a]:text-amber-700 [&_a]:hover:text-amber-800 [&_a]:underline [&_a]:underline-offset-2 [&_strong]:text-stone-800 [&_strong]:font-semibold">
        {children}
      </div>
    </section>
  );
}
