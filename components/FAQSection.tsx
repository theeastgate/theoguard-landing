interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection({ faqs, id = 'faq' }: { faqs: FAQ[]; id?: string }) {
  return (
    <section className="py-20 bg-stone-50 border-t border-stone-200" aria-labelledby={`${id}-heading`}>
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <p className="text-xs font-medium text-amber-700 uppercase tracking-widest mb-3" id={`${id}-heading`}>
          Frequently asked questions
        </p>
        <h2 className="font-display text-3xl font-bold text-stone-900 tracking-tight mb-10">
          Common questions
        </h2>
        <dl className="space-y-8">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <dt className="font-semibold text-stone-900 text-[15px] mb-2">
                {faq.question}
              </dt>
              <dd className="text-stone-600 leading-relaxed text-[15px]">
                {faq.answer}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function generateFAQSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateHowToSchema(name: string, description: string, steps: { name: string; text: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    step: steps.map((step, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: step.name,
      text: step.text,
    })),
  };
}
