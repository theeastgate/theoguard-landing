import type { Metadata } from 'next';
import Link from 'next/link';
import { ShieldCheck } from '@phosphor-icons/react/dist/ssr';

export const metadata: Metadata = {
  title: 'Privacy Policy — TheoGuard',
  description:
    'How TheoGuard collects, uses, and protects your personal information and the content you submit for theological analysis.',
  robots: { index: true, follow: true },
};

const EFFECTIVE_DATE = 'May 9, 2026';
const CONTACT_EMAIL = 'hello@theoguard.com';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-stone-500 text-sm">Effective date: {EFFECTIVE_DATE}</p>
        </div>

        <div className="prose prose-stone max-w-none">
          <ProseSection title="1. Who We Are">
            <p>
              TheoGuard (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is an
              AI-powered theological content analysis service designed for pastors, church leaders,
              and ministry directors. We operate the website at{' '}
              <a href="https://theoguard.com">theoguard.com</a> and the application at{' '}
              <a href="https://app.theoguard.com">app.theoguard.com</a>.
            </p>
            <p>
              We are committed to handling your personal information and the content you submit with
              integrity, discretion, and care — values that should characterize every ministry
              context we serve.
            </p>
          </ProseSection>

          <ProseSection title="2. Information We Collect">
            <h3>2.1 Account Information</h3>
            <p>
              When you create an account, we collect your email address and, optionally, your name,
              church name, and ministry role. This information is used to provide your account,
              communicate with you, and personalize your experience.
            </p>

            <h3>2.2 Content You Submit</h3>
            <p>
              TheoGuard analyzes content you upload or reference — including PDF and Word documents,
              YouTube links, book titles, and plain text. This content is transmitted to our AI
              analysis service (powered by OpenAI) and stored in your account history so you can
              retrieve past reports.
            </p>
            <p>
              We do not use your submitted content to train AI models. Content you submit is
              processed solely to generate your theological analysis report.
            </p>

            <h3>2.3 Usage Data</h3>
            <p>
              We collect standard technical information when you use the service: your IP address,
              browser type, pages viewed, and timestamps of activity. This data helps us diagnose
              issues, improve performance, and understand how the service is used.
            </p>

            <h3>2.4 Payment Information</h3>
            <p>
              If you subscribe to a paid plan, payments are processed by Stripe. We do not store
              your credit card number or payment details on our servers. Stripe&apos;s privacy
              policy governs their handling of your payment information.
            </p>

            <h3>2.5 Email Communications</h3>
            <p>
              If you subscribe to our ministry newsletter through the website, we collect your email
              address for that purpose. You may unsubscribe at any time using the link in any email
              we send.
            </p>
          </ProseSection>

          <ProseSection title="3. How We Use Your Information">
            <p>We use the information we collect to:</p>
            <ul>
              <li>Create and maintain your account</li>
              <li>Process and return theological analysis reports</li>
              <li>Store your analysis history for retrieval</li>
              <li>Process payments and manage subscription status</li>
              <li>Send transactional emails (account confirmation, password reset, receipts)</li>
              <li>
                Send ministry newsletter emails if you have opted in (you may opt out at any time)
              </li>
              <li>Improve the reliability, accuracy, and features of the service</li>
              <li>Respond to your support inquiries</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p>
              We do not sell your personal information to third parties. We do not use your
              information for targeted advertising.
            </p>
          </ProseSection>

          <ProseSection title="4. Content Confidentiality">
            <p>
              We understand that the content you submit for analysis may be sensitive — including
              internal church resources, sermon drafts, or materials under consideration for your
              congregation. We treat all submitted content as confidential.
            </p>
            <p>
              Content you submit is transmitted to OpenAI&apos;s API for analysis. OpenAI&apos;s
              API data usage policy states that content submitted via their API is not used to train
              their models by default. You can review OpenAI&apos;s privacy practices at{' '}
              <a
                href="https://openai.com/policies/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                openai.com/policies/privacy-policy
              </a>
              .
            </p>
            <p>
              Your analysis reports are stored in our database associated with your account and are
              not shared with other users or made publicly accessible.
            </p>
          </ProseSection>

          <ProseSection title="5. Data Sharing and Disclosure">
            <p>
              We share your information only in the following circumstances:
            </p>
            <ul>
              <li>
                <strong>Service providers:</strong> We use Supabase (database and authentication),
                OpenAI (AI analysis), Stripe (payments), and Resend (email delivery). Each
                processes only the data necessary for their function.
              </li>
              <li>
                <strong>Legal requirements:</strong> We may disclose information when required by
                law, subpoena, or court order, or to protect the rights, property, or safety of
                TheoGuard, our users, or the public.
              </li>
              <li>
                <strong>Business transfers:</strong> If TheoGuard is acquired or merges with
                another entity, your information may be transferred. We will notify you via email
                and a notice on our website before this occurs, and you will have the option to
                delete your account.
              </li>
            </ul>
            <p>We do not share your data with churches, denominations, or third parties for any other purpose.</p>
          </ProseSection>

          <ProseSection title="6. Data Retention">
            <p>
              We retain your account information and analysis history for as long as your account
              remains active. If you delete your account, we delete your personal information and
              analysis data within 30 days, except where we are legally required to retain certain
              records (such as payment records, which are retained for up to 7 years for tax
              compliance purposes).
            </p>
            <p>
              Newsletter subscribers who do not have accounts are retained until they unsubscribe.
            </p>
          </ProseSection>

          <ProseSection title="7. Security">
            <p>
              We implement industry-standard security measures to protect your information,
              including:
            </p>
            <ul>
              <li>Encryption in transit (TLS/HTTPS) for all data transmission</li>
              <li>Encryption at rest for database storage</li>
              <li>Row-level security policies limiting database access to account owners</li>
              <li>Authentication via Supabase Auth with secure session handling</li>
            </ul>
            <p>
              No system is completely secure. If you have reason to believe your account has been
              compromised, please contact us immediately at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </ProseSection>

          <ProseSection title="8. Your Rights">
            <p>
              Depending on your location, you may have the following rights regarding your personal
              information:
            </p>
            <ul>
              <li>
                <strong>Access:</strong> Request a copy of the personal information we hold about
                you.
              </li>
              <li>
                <strong>Correction:</strong> Request that we correct inaccurate or incomplete
                information.
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your account and associated data.
                You may also delete your account directly from the application settings.
              </li>
              <li>
                <strong>Portability:</strong> Request an export of your analysis history in CSV
                format.
              </li>
              <li>
                <strong>Objection:</strong> Object to certain processing of your information.
              </li>
            </ul>
            <p>
              To exercise any of these rights, email us at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond within 30
              days.
            </p>
          </ProseSection>

          <ProseSection title="9. Cookies and Tracking">
            <p>
              We use cookies and similar technologies to maintain your login session and store your
              preferences (such as dark mode). We do not use advertising cookies or tracking pixels
              for third-party ad networks.
            </p>
            <p>
              Our website may include analytics (such as aggregate page view data) to help us
              understand traffic patterns. This data is not associated with individual identifiers.
            </p>
          </ProseSection>

          <ProseSection title="10. Children&apos;s Privacy">
            <p>
              TheoGuard is not directed at children under the age of 13, and we do not knowingly
              collect personal information from children. If we become aware that a child under 13
              has provided us with personal information, we will delete it promptly.
            </p>
          </ProseSection>

          <ProseSection title="11. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the
              effective date at the top of the page and, for material changes, send a notification
              to your account email. Your continued use of TheoGuard after changes become effective
              constitutes acceptance of the updated policy.
            </p>
          </ProseSection>

          <ProseSection title="12. Contact Us">
            <p>
              If you have questions, concerns, or requests regarding this Privacy Policy or our
              data practices, please contact us at:
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
            href="/terms"
            className="text-sm text-amber-700 hover:text-amber-800 transition-colors duration-150"
          >
            Read our Terms of Use &rarr;
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
