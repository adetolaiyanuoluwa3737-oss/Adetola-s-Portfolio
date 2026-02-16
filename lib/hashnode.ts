import { GraphQLClient } from 'graphql-request';

const HASHNODE_API_URL = 'https://gql.hashnode.com';
const PUBLICATION_HOST = 'adetolaiyanuoluwa.hashnode.dev';

export const hashnodeClient = new GraphQLClient(HASHNODE_API_URL, {
  headers: {
    Authorization: process.env.HASHNODE_API_TOKEN || '',
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
  try {
    console.log(`[Hashnode] Fetching ${limit} recent posts...`);
    const data: { publication: PublicationData } = await hashnodeClient.request(
      GET_RECENT_POSTS,
      {
        host: PUBLICATION_HOST,
        first: limit,
      }
    );

    const posts = data.publication.posts.edges.map((edge) => edge.node);
    console.log(`[Hashnode] Successfully fetched ${posts.length} posts`);
    return posts;
  } catch (error) {
    console.error('Error fetching posts from Hashnode:', error);
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
