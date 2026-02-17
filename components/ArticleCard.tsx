import type { HashnodePost } from '@/lib/hashnode';
import Link from 'next/link';
import Image from 'next/image';

interface ArticleCardProps {
  post: HashnodePost;
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : null;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="border-t border-border pt-6 hover:border-accent transition-colors duration-300">
        {post.coverImage?.url && (
          <div className="relative aspect-[16/10] overflow-hidden bg-muted rounded-sm mb-4">
            <Image
              src={post.coverImage.url}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
          {post.brief}
        </p>

        {formattedDate && (
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.publishedAt}>{formattedDate}</time>
            <span>&middot;</span>
            <span>{post.readTimeInMinutes} min read</span>
          </div>
        )}
      </article>
    </Link>
  );
}
