import Hero from '@/components/Hero';
import ArticleCard from '@/components/ArticleCard';
import { getRecentPosts } from '@/lib/hashnode';

export const revalidate = 3600; // ISR: Revalidate every hour

export default async function Home() {
  const posts = await getRecentPosts(7);
  const featuredPost = posts[0];
  const recentPosts = posts.slice(1);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Recent Articles Section */}
      <section className="max-w-[1360px] mx-auto px-6 md:px-12 py-24">
        <div className="mb-20">
          <h2 className="text-[clamp(1.75rem,1.4645rem+1.2183vi,2.5rem)] font-normal leading-[1.15] text-charcoal mb-6">
            Recent Writing
          </h2>
          <div className="w-20 h-0.5 bg-accent"></div>
        </div>

        {/* No Posts Message */}
        {posts.length === 0 && (
          <div className="text-center py-20 bg-beige rounded-lg">
            <h3 className="text-[clamp(1.4375rem,1.1996rem+1.0152vi,2.0625rem)] font-normal leading-[1.2] text-charcoal mb-6">
              Articles Coming Soon
            </h3>
            <p className="text-[1.1875rem] text-dark-brown leading-[1.4] mb-8 max-w-2xl mx-auto">
              I'm currently setting up my blog on Hashnode. Check back soon for insights on B2B SaaS content writing, technical storytelling, and SEO strategies.
            </p>
            <a
              href="https://adetolaiyanuoluwa.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 text-[1rem] bg-accent text-cream hover:bg-warm-brown transition-all rounded font-medium"
            >
              Visit My Hashnode
            </a>
          </div>
        )}

        {/* Featured Article */}
        {featuredPost && (
          <div className="mb-20">
            <ArticleCard post={featuredPost} featured />
          </div>
        )}

        {/* Article Grid */}
        {recentPosts.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {recentPosts.map((post) => (
              <ArticleCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {/* View All Link */}
        {posts.length > 0 && (
          <div className="text-center mt-16">
            <a
              href="https://adetolaiyanuoluwa.hashnode.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[1rem] text-warm-brown hover:text-accent transition-colors border-b-2 border-warm-brown hover:border-accent pb-1"
            >
              View all articles →
            </a>
          </div>
        )}
      </section>
    </div>
  );
}

