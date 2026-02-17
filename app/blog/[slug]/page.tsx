import { getPostBySlug, getRecentPosts } from '@/lib/hashnode';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  try {
    const posts = await getRecentPosts(20);
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export const dynamicParams = true;

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: 'Post Not Found' };
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
  if (!post) notFound();

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div>
      <article className="max-w-3xl mx-auto px-6 py-16">

        {/* Back link */}
        <div className="mb-10">
          <Link
            href="/blog"
            className="text-sm font-semibold uppercase tracking-wide text-muted-foreground hover:text-accent transition-colors"
          >
            ← Back to Blog
          </Link>
        </div>

        {/* Article header */}
        <header className="border-t border-border pt-8 mb-12">
          <div className="flex items-center gap-3 text-sm text-muted-foreground mb-6">
            <time dateTime={post.publishedAt}>{formattedDate}</time>
            <span>&middot;</span>
            <span>{post.readTimeInMinutes} min read</span>
          </div>

          <h1
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-[1.1]"
            style={{ letterSpacing: '-0.02em' }}
          >
            {post.title}
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
            {post.brief}
          </p>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag.slug}
                  className="text-xs font-semibold uppercase tracking-wide px-2 py-1"
                  style={{ backgroundColor: 'rgba(224,122,95,0.1)', color: '#e07a5f' }}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Cover image */}
        {post.coverImage && (
          <div className="relative aspect-[16/9] mb-12 overflow-hidden rounded-sm bg-muted">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        {/* Article body */}
        <div
          className="article-content
            [&>h2]:font-serif [&>h2]:text-2xl [&>h2]:md:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:text-foreground [&>h2]:leading-tight
            [&>h3]:font-serif [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-bold [&>h3]:mt-10 [&>h3]:mb-4 [&>h3]:text-foreground [&>h3]:leading-tight
            [&>p]:text-lg [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>p]:mb-6
            [&>ul]:text-lg [&>ul]:text-muted-foreground [&>ul]:leading-relaxed [&>ul]:mb-6 [&>ul]:pl-6
            [&>ol]:text-lg [&>ol]:text-muted-foreground [&>ol]:leading-relaxed [&>ol]:mb-6 [&>ol]:pl-6
            [&>li]:mb-2
            [&>a]:text-accent [&>a]:underline [&>a]:underline-offset-2
            [&>strong]:text-foreground [&>strong]:font-semibold
            [&>code]:font-mono [&>code]:bg-muted [&>code]:text-foreground [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm
            [&>pre]:bg-foreground [&>pre]:text-background [&>pre]:p-6 [&>pre]:rounded-sm [&>pre]:overflow-x-auto [&>pre]:mb-6
            [&>blockquote]:border-l-4 [&>blockquote]:border-accent [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>blockquote]:my-8
            [&>img]:rounded-sm [&>img]:my-8"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />

        {/* Footer CTA */}
        <footer className="mt-20 pt-12 border-t border-border">
          <div className="border-l-4 pl-6 py-2" style={{ borderColor: '#e07a5f' }}>
            <h3 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Let&apos;s Work Together
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Need content that connects, converts, and ranks? Let&apos;s talk about your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="mailto:adetolaiyanuoluwa3737@gmail.com"
                className="px-6 sm:px-8 py-3 sm:py-4 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all hover:shadow-lg hover:scale-105 inline-block rounded-sm"
                style={{ backgroundColor: '#e07a5f', color: '#ffffff' }}
              >
                Get in Touch
              </a>
              <Link
                href="/work"
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 font-sans text-xs sm:text-sm font-semibold uppercase tracking-wide transition-all inline-block text-center rounded-sm"
                style={{ borderColor: '#e4e4e7', color: '#000000' }}
              >
                View My Work
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
