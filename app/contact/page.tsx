import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Adetola Iyanuoluwa',
  description: 'Get in touch with Adetola Iyanuoluwa to discuss your B2B SaaS content needs.',
};

export default function ContactPage() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="border-t border-border pt-8 mb-16">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Ready to create content that ranks, resonates, and converts? Let&apos;s talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-4xl">
          {/* Left — ways to connect */}
          <div className="space-y-10">
            <div className="border-t border-border pt-6">
              <div className="border-l-4 pl-6 py-2" style={{ borderColor: '#e07a5f' }}>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-3">
                  Book a call
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The fastest way to get started. We&apos;ll discuss your goals, content gaps,
                  and how I can help — no pressure, just a conversation.
                </p>
                <a
                  href="https://www.linkedin.com/in/iyanuoluwaadetola/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 font-sans text-xs font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:scale-105 inline-block rounded-sm"
                  style={{ backgroundColor: '#e07a5f', color: '#ffffff' }}
                >
                  Connect on LinkedIn →
                </a>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <div className="border-l-4 pl-6 py-2" style={{ borderColor: '#e07a5f' }}>
                <h3 className="font-serif text-xl md:text-2xl font-bold mb-3">
                  Send an email
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Prefer email? Drop me a line with a brief about your project and I&apos;ll
                  get back to you within 24 hours.
                </p>
                <a
                  href="mailto:adetolaiyanuoluwa3737@gmail.com"
                  className="px-6 py-3 border-2 font-sans text-xs font-semibold uppercase tracking-wide transition-all inline-block rounded-sm"
                  style={{ borderColor: '#e4e4e7', color: '#000000' }}
                >
                  adetolaiyanuoluwa3737@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right — what to expect */}
          <div className="border-t border-border pt-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-8">
              What happens next
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'We talk',
                  desc: "A 30-minute call to understand your business, audience, and content goals.",
                },
                {
                  step: '02',
                  title: 'I send a proposal',
                  desc: "A clear outline of scope, deliverables, timeline, and pricing — no surprises.",
                },
                {
                  step: '03',
                  title: 'We get to work',
                  desc: "Once aligned, I dive in. You get an impressive first draft, on time.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <span
                    className="font-serif text-3xl font-bold leading-none mt-1 shrink-0"
                    style={{ color: '#e07a5f', opacity: 0.4 }}
                  >
                    {item.step}
                  </span>
                  <div>
                    <h4 className="font-serif text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
