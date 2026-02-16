import type { HashnodePost } from '@/lib/hashnode';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  post: HashnodePost;
  featured?: boolean;
}

export default function ArticleCard({ post, featured = false }: ArticleCardProps) {
  const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (featured) {
    return (
      <Link
        href={`/blog/${post.slug}`}
        className="group block mb-20 hover:opacity-90 transition-opacity"
      >
        <article className="grid md:grid-cols-2 gap-12 items-center">
          {post.coverImage && (
            <div className="relative aspect-[16/10] bg-sand overflow-hidden">
              <Image
                src={post.coverImage.url}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
          <div className="space-y-6">
            <div className="metadata flex items-center gap-4">
              <time dateTime={post.publishedAt}>{formattedDate}</time>
              <span>·</span>
              <span>{post.readTimeInMinutes} min read</span>
            </div>
            <h2 className="text-[clamp(1.75rem,1.4645rem+1.2183vi,2.5rem)] font-normal leading-[1.15] text-charcoal group-hover:text-accent transition-colors">
              {post.title}
            </h2>
            <p className="text-[1.1875rem] text-dark-brown leading-[1.4]">
              {post.brief}
            </p>
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {post.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag.slug}
                    className="text-[0.8125rem] px-3 py-1 bg-cream border border-sand text-warm-brown rounded-full uppercase tracking-wide"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            )}
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block hover:opacity-90 transition-opacity"
    >
      <article className="space-y-5">
        {post.coverImage && (
          <div className="relative aspect-[16/9] bg-sand overflow-hidden">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        <div className="space-y-3">
          <div className="metadata flex items-center gap-3">
            <time dateTime={post.publishedAt}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readTimeInMinutes} min</span>
          </div>
          <h3 className="text-[clamp(1.4375rem,1.1996rem+1.0152vi,2.0625rem)] font-normal leading-[1.2] text-charcoal group-hover:text-accent transition-colors">
            {post.title}
          </h3>
          <p className="text-[1rem] text-dark-brown leading-[1.4] line-clamp-2">
            {post.brief}
          </p>
        </div>
      </article>
    </Link>
  );
}
