import Image from 'next/image';
import Link from 'next/link';
import AnimatedSection from '@/components/AnimatedSection';
import { getRecentPosts, HashnodePost } from '@/lib/hashnode';

export const revalidate = 3600;

const FALLBACK_POSTS = [
  {
    id: '1',
    title: '5 Top Hive Alternatives for Creative Agencies in 2026',
    brief:
      'Hive lacks white-label features and charges extra for essentials like time tracking and approvals. This piece breaks down the five best project management alternatives built for client-facing creative agency work.',
    slug: '',
    url: 'https://www.manyrequests.com/blog/hive-alternatives',
    coverImage: null,
    publishedAt: '',
    readTimeInMinutes: 8,
    tags: [{ name: 'Project Management', slug: 'project-management' }, { name: 'Comparison', slug: 'comparison' }],
    content: { html: '', markdown: '' },
  },
  {
    id: '2',
    title: 'Top 5 Design Approval Software for Creative Agencies in 2026',
    brief:
      'Scattered feedback across email and Slack kills creative workflows. This article compares five design approval platforms — covering features for managing feedback, approvals, and revisions so creative teams can move faster.',
    slug: '',
    url: 'https://www.manyrequests.com/blog/design-approval-software',
    coverImage: null,
    publishedAt: '',
    readTimeInMinutes: 7,
    tags: [{ name: 'Design Tools', slug: 'design-tools' }, { name: 'Comparison', slug: 'comparison' }],
    content: { html: '', markdown: '' },
  },
];

export default async function Home() {
  let posts: HashnodePost[] = [];
  try {
    posts = await getRecentPosts(2);
  } catch {
    posts = [];
  }
  const displayPosts = posts.length >= 2 ? posts.slice(0, 2) : FALLBACK_POSTS;

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden w-full bg-muted">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

            {/* Text */}
            <div className="order-2 md:order-1">
              <h1
                className="hero-animate font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-[1.1]"
                style={{ color: '#000000', letterSpacing: '-0.02em' }}
              >
                Your website is invisible.{' '}
                <em style={{ color: '#e07a5f' }}>Let&apos;s fix that.</em>
              </h1>
              <p
                className="hero-animate-delay text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-xl text-muted-foreground"
              >
                I&apos;m Adetola — a B2B SaaS content writer who turns technical topics into
                content that ranks on Google, resonates with real buyers, and converts traffic
                into customers.
              </p>
              <div className="hero-animate-delay2 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link
                  href="/work"
                  className="px-6 sm:px-8 py-3 sm:py-4 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:scale-105 text-center rounded-sm"
                  style={{ backgroundColor: '#e07a5f', color: '#ffffff' }}
                >
                  View Work →
                </Link>
                <a
                  href="mailto:adetolaiyanuoluwa3737@gmail.com"
                  className="px-6 sm:px-8 py-3 sm:py-4 border-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all text-center rounded-sm"
                  style={{ borderColor: '#e4e4e7', color: '#000000' }}
                >
                  Get in Touch
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 md:order-2 flex justify-center md:justify-end">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96">
                <div
                  className="hero-animate relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl"
                  style={{ border: '4px solid #e07a5f' }}
                >
                  <Image
                    src="/images/profile-hero.jpg"
                    alt="Adetola Iyanuoluwa"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div
                  className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-32 sm:h-32 rounded-full opacity-20"
                  style={{ backgroundColor: '#e07a5f' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── I AM A FIT FOR YOU IF ─── */}
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              I am a fit for you if:
            </h2>
          </div>

          <div className="space-y-12 max-w-3xl">
            {[
              {
                heading: 'Your website feels like a ghost town.',
                body: "You've got products or services worth paying for, but your site gets an average of 500 visitors a month and none of them convert. You know content marketing and SEO works for other businesses, but you don't know where to start.",
              },
              {
                heading: "You've hired writers before and gotten burned.",
                body: 'They promised \u201coptimized\u201d content and \u201ccontent that gets seen by AI search engines\u201d but produced keyword-stuffed content that Google ignored. Or they missed deadlines, a lot. And you had to tweak their content by 11 PM because you want to publish the next day. Now you\u2019re skeptical about outsourcing content again.',
              },
              {
                heading: "You're the founder or content marketing lead.",
                body: 'All you need is someone to execute your strategies and write content that could move your visitors to leads and eventually customers.',
              },
            ].map((item) => (
              <div key={item.heading} className="border-t border-border pt-6">
                <div className="border-l-4 pl-6 py-2" style={{ borderColor: '#e07a5f' }}>
                  <h3
                    className="font-serif text-2xl md:text-3xl font-bold mb-4"
                    style={{ color: '#e07a5f' }}
                  >
                    {item.heading}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── SERVICES ─── */}
      <AnimatedSection className="bg-muted">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">What I do</h2>
            <p className="text-lg text-muted-foreground">Two services. Focused. Results-driven.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-0">
            {[
              {
                title: 'Optimized Content',
                badge: 'Long-form · ~2,000 words',
                body: 'In-depth articles that rank on Google and convert readers into leads. Every piece is backed by deep keyword research, community listening on Reddit and X, and ruthless editing — crafted to outperform whatever is already ranking without sounding robotic or keyword-stuffed.',
              },
              {
                title: 'Content Refreshes',
                badge: 'Audit · Update · Optimise',
                body: "Your old content isn't dead — it's just underperforming. I audit existing articles, update them with fresh data and tighter keyword targeting, and restructure them to convert better. Often the fastest path to meaningful organic traffic gains.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="border-t border-border pt-6 md:pr-12 mb-8 md:mb-0"
              >
                <span
                  className="inline-block text-xs font-semibold uppercase tracking-wide mb-4 px-2 py-1"
                  style={{ backgroundColor: 'rgba(224,122,95,0.1)', color: '#e07a5f' }}
                >
                  {service.badge}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{service.body}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── SELECTED WORK ─── */}
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16 flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-serif text-4xl md:text-5xl font-bold">Selected work</h2>
            <Link
              href="/work"
              className="text-sm font-semibold uppercase tracking-wide text-accent hover:opacity-75 transition-opacity"
            >
              See all work →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {displayPosts.map((post) => (
              <a
                key={post.id}
                href={post.url || '/work'}
                target={post.url?.startsWith('http') ? '_blank' : undefined}
                rel={post.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group border-t border-border pt-6 md:pr-12 mb-8 md:mb-0 block hover:border-accent transition-colors duration-300"
              >
                {post.coverImage?.url && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-sm mb-4">
                    <Image
                      src={post.coverImage.url}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                )}

                {post.tags && post.tags.length > 0 && (
                  <div className="mb-3">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground">
                      {post.tags[0].name}
                    </span>
                  </div>
                )}

                <h3 className="font-serif text-xl md:text-2xl font-bold mb-3 leading-tight group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.brief}
                </p>

                <span className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Read article →
                </span>
              </a>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── WHAT WORKING WITH ME LOOKS LIKE ─── */}
      <AnimatedSection className="bg-muted">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              What working with me looks like:
            </h2>
          </div>

          <div className="space-y-12 max-w-3xl">
            {[
              {
                heading: 'Content that performs on search engines:',
                body: "When I get a brief from you or your team, I spend time reading through Reddits, X threads, and even LinkedIn posts to understand the overall sentiment about the topic. I also research high-intent keywords your competitors are not capitalizing on yet, so every piece I write increases organic performance and resonates with your readers.",
              },
              {
                heading: "You don't need to hand-hold me:",
                body: "You shouldn't have to explain your business five times or edit every draft heavily. I can study your brand style guide, use your product (so I understand what it does and how it does it), and ask smart questions upfront so I can deliver an impressive first draft.",
              },
              {
                heading: 'Content that converts readers into customers:',
                body: "Traffic without conversions is a vanity metric. Every article I write includes strategic CTAs, trust-building elements, and messaging designed to move readers closer to the buying stage. It's why I focus more on BOFU content than typical informational, TOFU content.",
              },
            ].map((item) => (
              <div key={item.heading} className="border-t border-border pt-6">
                <div className="border-l-4 pl-6 py-2" style={{ borderColor: '#e07a5f' }}>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold mb-4">
                    {item.heading}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* ─── FINAL CTA ─── */}
      <section className="relative overflow-hidden mt-24 border-t border-border">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Ready to work together?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-muted-foreground">
            Let&apos;s talk about what your content could be doing for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/iyanuoluwaadetola/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 font-sans text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:scale-105 rounded-sm"
              style={{ backgroundColor: '#e07a5f', color: '#ffffff' }}
            >
              Book a Call →
            </a>
            <a
              href="mailto:adetolaiyanuoluwa3737@gmail.com"
              className="inline-block px-10 py-4 border-2 font-sans text-sm font-semibold uppercase tracking-wide transition-all rounded-sm"
              style={{ borderColor: '#e4e4e7', color: '#000000' }}
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
