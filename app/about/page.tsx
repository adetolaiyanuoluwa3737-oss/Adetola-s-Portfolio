import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Adetola Iyanuoluwa',
  description: 'Learn more about Adetola Iyanuoluwa, B2B SaaS content writer specializing in technical content that connects, converts, and ranks.',
};

export const dynamic = 'force-static';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <article className="max-w-[665px] mx-auto px-6 py-20">
        <header className="mb-16 border-t border-sand pt-8">
          <h1 className="text-[clamp(2.0625rem,1.4914rem+2.4365vi,3.5625rem)] font-normal text-charcoal mb-8 leading-[1.15] tracking-[-0.02em]">
            About Me
          </h1>
        </header>

        <div className="article-content space-y-8 text-[1.1875rem] text-dark-brown leading-[1.4]">
          <p className="text-[clamp(1.4375rem,1.1996rem+1.0152vi,2.0625rem)] font-normal leading-[1.2] text-charcoal">
            When I was 15, I fell in love with writing... Actually, I did not. That didn't even happen until I was 21.
          </p>

          <p>Hi, I'm Adetola.</p>

          <p>
            I write no-BS content for B2B SaaS companies to:
          </p>

          <ol className="space-y-4 pl-6 list-decimal">
            <li>
              <strong className="text-charcoal font-semibold">Educate your audience</strong> on your software and how it'll help them achieve jobs-to-be-done.
            </li>
            <li>
              <strong className="text-charcoal font-semibold">Sell your software</strong> as a solution to their needs, through relevant CTAs.
            </li>
            <li>
              <strong className="text-charcoal font-semibold">Optimize your content</strong> to rank at the top of the SERPs, where it's sure to thrive, and be mentioned in AI-generated results.
            </li>
          </ol>

          <h2 className="text-[clamp(1.75rem,1.4645rem+1.2183vi,2.5rem)] font-normal leading-[1.15] text-charcoal mt-16 mb-8">
            How do I do these?
          </h2>

          <p>
            I take complex, technical concepts and transform them into <strong className="text-charcoal font-semibold">clear and fun-to-read content</strong> that even your non-technical audience will understand.
          </p>

          <p>
            I also write content that connects and encourages users to take action, because people make decisions based on how they feel, not just what they know.
          </p>

          <p>
            I use my storytelling skills to turn even the driest product description into an <em>"Oh wow! This is exactly what we're looking for"</em> moment for your users.
          </p>

          <div className="mt-16 pt-12 border-t border-sand">
            <h3 className="text-[clamp(1.4375rem,1.1996rem+1.0152vi,2.0625rem)] font-normal leading-[1.2] text-charcoal mb-6">
              Let's talk!
            </h3>
            <p className="mb-8">
              Ready to create content that educates, sells, and ranks? Get in touch.
            </p>
            <a
              href="https://adetolaiyanuoluwa.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-[1rem] bg-accent text-cream hover:bg-warm-brown transition-all rounded font-medium"
            >
              Visit My Blog
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
