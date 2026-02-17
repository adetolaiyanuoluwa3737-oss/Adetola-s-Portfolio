import { GraphQLClient } from 'graphql-request';

const HASHNODE_API_URL = 'https://gql.hashnode.com';
const PUBLICATION_HOST = 'adetolaiyanuoluwa.hashnode.dev';

export const hashnodeClient = new GraphQLClient(HASHNODE_API_URL, {
  headers: {
    Authorization: process.env.HASHNODE_API_TOKEN || '',
  },
  // Remove custom fetch wrapper - it might be causing timeout issues
  requestMiddleware: (request) => {
    console.log('[GraphQL Request]', request.url);
    return request;
  },
  responseMiddleware: (response) => {
    console.log('[GraphQL Response] Status:', 'status' in response ? response.status : 'error');
  },
});

export interface HashnodePost {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage?: {
    url: string;
  };
  publishedAt: string;
  readTimeInMinutes: number;
  url: string;
  content: {
    html: string;
    markdown: string;
  };
  tags?: Array<{
    name: string;
    slug: string;
  }>;
}

export interface PublicationData {
  posts: {
    edges: Array<{
      node: HashnodePost;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      endCursor?: string;
    };
  };
}

// GraphQL query to fetch recent posts
export const GET_RECENT_POSTS = `
  query GetRecentPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            coverImage {
              url
            }
            publishedAt
            readTimeInMinutes
            url
            tags {
              name
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

// GraphQL query to fetch a single post by slug
export const GET_POST_BY_SLUG = `
  query GetPostBySlug($host: String!, $slug: String!) {
    publication(host: $host) {
      post(slug: $slug) {
        id
        title
        brief
        slug
        coverImage {
          url
        }
        publishedAt
        readTimeInMinutes
        url
        content {
          html
          markdown
        }
        tags {
          name
          slug
        }
      }
    }
  }
`;

export async function getRecentPosts(limit: number = 6): Promise<HashnodePost[]> {
  const maxRetries = 3;
  let lastError;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`[Hashnode] Attempt ${attempt}/${maxRetries}: Fetching ${limit} recent posts...`);

      const data: { publication: PublicationData } = await hashnodeClient.request(
        GET_RECENT_POSTS,
        {
          host: PUBLICATION_HOST,
          first: limit,
        }
      );

      const posts = data.publication.posts.edges.map((edge) => edge.node);
      console.log(`[Hashnode] ✓ Successfully fetched ${posts.length} posts`);
      return posts;
    } catch (error: unknown) {
      lastError = error instanceof Error ? error : new Error(String(error));
      console.error(`[Hashnode] ✗ Attempt ${attempt} failed:`, (error as Error).message);

      if (attempt < maxRetries) {
        const delay = attempt * 2000; // 2s, 4s
        console.log(`[Hashnode] Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }

  console.error('[Hashnode] All retry attempts failed:', lastError);
  return [];
}

// Interface for Hashnode static pages
export interface HashnodeStaticPage {
  id: string;
  title: string;
  slug: string;
  content: {
    html: string;
    markdown: string;
  };
}

// GraphQL query to fetch a static page by slug
export const GET_STATIC_PAGE = `
  query GetStaticPage($host: String!, $slug: String!) {
    publication(host: $host) {
      staticPage(slug: $slug) {
        id
        title
        slug
        content {
          html
          markdown
        }
      }
    }
  }
`;

// GraphQL query to fetch all static pages
export const GET_STATIC_PAGES = `
  query GetStaticPages($host: String!, $first: Int!) {
    publication(host: $host) {
      staticPages(first: $first) {
        edges {
          node {
            id
            title
            slug
            content {
              html
              markdown
            }
          }
        }
      }
    }
  }
`;

export async function getStaticPage(slug: string): Promise<HashnodeStaticPage | null> {
  try {
    console.log(`[Hashnode] Fetching static page: ${slug}`);
    const data: { publication: { staticPage: HashnodeStaticPage } } = await hashnodeClient.request(
      GET_STATIC_PAGE,
      {
        host: PUBLICATION_HOST,
        slug,
      }
    );

    console.log(`[Hashnode] Successfully fetched static page: ${slug}`);
    return data.publication.staticPage;
  } catch (error) {
    console.error(`Error fetching static page "${slug}":`, error);
    return null;
  }
}

export async function getStaticPages(): Promise<HashnodeStaticPage[]> {
  try {
    console.log('[Hashnode] Fetching all static pages...');
    const data: { publication: { staticPages: { edges: Array<{ node: HashnodeStaticPage }> } } } = await hashnodeClient.request(
      GET_STATIC_PAGES,
      {
        host: PUBLICATION_HOST,
        first: 20,
      }
    );

    const pages = data.publication.staticPages.edges.map((edge) => edge.node);
    console.log(`[Hashnode] Successfully fetched ${pages.length} static pages`);
    return pages;
  } catch (error) {
    console.error('Error fetching static pages:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<HashnodePost | null> {
  try {
    const data: { publication: { post: HashnodePost } } = await hashnodeClient.request(
      GET_POST_BY_SLUG,
      {
        host: PUBLICATION_HOST,
        slug,
      }
    );

    return data.publication.post;
  } catch (error) {
    console.error(`Error fetching post with slug "${slug}":`, error);
    return null;
  }
}
