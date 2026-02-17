import ArticleCard from '@/components/ArticleCard';
import { getRecentPosts } from '@/lib/hashnode';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Adetola Iyanuoluwa',
  description: 'Articles about B2B SaaS content writing, technical storytelling, and SEO strategies.',
};

export const revalidate = 60;

export default async function BlogPage() {
  const posts = await getRecentPosts(50);

  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="border-t border-border pt-8 mb-16">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            style={{ letterSpacing: '-0.02em' }}
          >
            Blog
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl">
            Insights on B2B SaaS content writing, technical storytelling, and SEO strategies.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="border-t border-border pt-12 max-w-2xl">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4">
              Articles Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I&apos;m setting up my blog. Check back soon for insights on B2B SaaS content
              writing, technical storytelling, and SEO strategies.
            </p>
            <a
              href="https://adetolaiyanuoluwa.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 sm:px-8 py-3 sm:py-4 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:scale-105 inline-block rounded-sm"
              style={{ backgroundColor: '#e07a5f', color: '#ffffff' }}
            >
              Visit My Hashnode
            </a>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {posts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
