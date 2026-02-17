import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | Adetola Iyanuoluwa',
  description: 'Learn more about Adetola Iyanuoluwa, B2B SaaS content writer specializing in technical content that connects, converts, and ranks.',
};

export default function AboutPage() {
  return (
    <div>
      {/* Page header */}
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="border-t border-border pt-8 mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
            About Me
          </h1>
        </div>

        <div className="max-w-3xl">
          {/* Photo */}
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden bg-muted mb-12">
            <Image
              src="/images/profile-about.jpg"
              alt="Adetola Iyanuoluwa"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Bio */}
          <div>
            <p className="text-xl md:text-2xl font-serif font-bold mb-8 leading-snug" style={{ letterSpacing: '-0.01em' }}>
              When I was 15, I fell in love with writing… Actually, I did not. That didn&apos;t even happen until I was 21.
            </p>

            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
              <p>Hi, I&apos;m Adetola.</p>

              <p>I write no-BS content for B2B SaaS companies to:</p>

              <ol className="space-y-3 pl-6 list-decimal">
                <li>
                  <strong className="text-foreground font-semibold">Educate your audience</strong> on your software and how it&apos;ll help them achieve jobs-to-be-done.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">Sell your software</strong> as a solution to their needs, through relevant CTAs.
                </li>
                <li>
                  <strong className="text-foreground font-semibold">Optimize your content</strong> to rank at the top of the SERPs, where it&apos;s sure to thrive, and be mentioned in AI-generated results.
                </li>
              </ol>

              <h2 className="font-serif text-2xl md:text-3xl font-bold pt-6" style={{ color: 'var(--foreground)', letterSpacing: '-0.01em' }}>
                How do I do these?
              </h2>

              <p>
                I take complex, technical concepts and transform them into <strong className="text-foreground font-semibold">clear and fun-to-read content</strong> that even your non-technical audience will understand.
              </p>

              <p>
                I also write content that connects and encourages users to take action, because people make decisions based on how they feel, not just what they know.
              </p>

              <p>
                I use my storytelling skills to turn even the driest product description into an <em>&ldquo;Oh wow! This is exactly what we&apos;re looking for&rdquo;</em> moment for your users.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-border">
              <h3 className="font-serif text-2xl font-bold mb-4">Let&apos;s talk!</h3>
              <p className="text-muted-foreground mb-6">
                Ready to create content that educates, sells, and ranks? Get in touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:adetolaiyanuoluwa3737@gmail.com"
                  className="px-6 sm:px-8 py-3 sm:py-4 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:scale-105 text-center rounded-sm"
                  style={{ backgroundColor: '#e07a5f', color: '#ffffff' }}
                >
                  Get in Touch
                </a>
                <Link
                  href="/work"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all text-center rounded-sm"
                  style={{ borderColor: '#e4e4e7', color: '#000000' }}
                >
                  View My Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
