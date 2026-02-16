import { getPostBySlug, getRecentPosts } from '@/lib/hashnode';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getRecentPosts(20);
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error('[Build] Error generating static params:', error);
    return [];
  }
}

export const dynamicParams = true;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Adetola Iyanuoluwa`,
    description: post.brief,
    openGraph: {
      title: post.title,
      description: post.brief,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.coverImage ? [{ url: post.coverImage.url }] : [],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="border-b border-sand bg-background">
        <div className="max-w-[665px] mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-block text-[1rem] text-warm-brown hover:text-accent transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Article Header */}
      <article className="max-w-[665px] mx-auto px-6 py-16">
        <header className="mb-16 border-t border-sand pt-8">
          <div className="metadata flex items-center gap-4 mb-8">
            <time dateTime={post.publishedAt}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readTimeInMinutes} min read</span>
          </div>

          <h1 className="text-[clamp(2.0625rem,1.4914rem+2.4365vi,3.5625rem)] font-normal text-charcoal mb-8 leading-[1.15] tracking-[-0.02em]">
            {post.title}
          </h1>

          <p className="text-[1.1875rem] text-dark-brown leading-[1.4] mb-10">
            {post.brief}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="metadata px-4 py-2 bg-beige border border-sand text-warm-brown rounded-full"
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative aspect-[16/9] mb-16 bg-sand overflow-hidden -mx-6 md:mx-0">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 665px) 100vw, 665px"
            />
          </div>
        )}

        {/* Article Content */}
        <div
          className="article-content
            [&>h2]:text-[clamp(1.75rem,1.4645rem+1.2183vi,2.5rem)] [&>h2]:font-normal [&>h2]:text-charcoal [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:leading-[1.15]
            [&>h3]:text-[clamp(1.4375rem,1.1996rem+1.0152vi,2.0625rem)] [&>h3]:font-normal [&>h3]:text-charcoal [&>h3]:mt-10 [&>h3]:mb-5 [&>h3]:leading-[1.2]
            [&>p]:text-[1.1875rem] [&>p]:text-dark-brown [&>p]:leading-[1.4] [&>p]:mb-6
            [&>ul]:text-[1.1875rem] [&>ul]:text-dark-brown [&>ul]:leading-[1.4] [&>ul]:mb-6 [&>ul]:pl-6
            [&>ol]:text-[1.1875rem] [&>ol]:text-dark-brown [&>ol]:leading-[1.4] [&>ol]:mb-6 [&>ol]:pl-6
            [&>li]:mb-2
            [&>a]:text-accent [&>a]:underline [&>a]:underline-offset-2 hover:[&>a]:text-darkBrown
            [&>strong]:text-charcoal [&>strong]:font-semibold
            [&>code]:text-warm-brown [&>code]:bg-beige [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-[1rem]
            [&>pre]:bg-charcoal [&>pre]:text-cream [&>pre]:p-6 [&>pre]:rounded [&>pre]:overflow-x-auto [&>pre]:mb-6
            [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-dark-brown [&>blockquote]:my-8
            [&>img]:rounded [&>img]:my-8"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />

        {/* Footer CTA */}
        <footer className="mt-20 pt-16 border-t border-sand">
          <div className="bg-beige p-10 rounded">
            <h3 className="text-[clamp(1.75rem,1.4645rem+1.2183vi,2.5rem)] font-normal leading-[1.15] text-charcoal mb-6">
              Let's Work Together
            </h3>
            <p className="text-[1.1875rem] text-dark-brown leading-[1.4] mb-8">
              Need content that connects, converts, and ranks? Let's talk about your project.
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
        </footer>
      </article>
    </div>
  );
}
