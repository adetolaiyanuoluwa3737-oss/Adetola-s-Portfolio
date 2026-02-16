const { GraphQLClient } = require('graphql-request');

const HASHNODE_API_URL = 'https://gql.hashnode.com';
const PUBLICATION_HOST = 'adetolaiyanuoluwa.hashnode.dev';
const API_TOKEN = '699343be893c84c6cce991ac';

const client = new GraphQLClient(HASHNODE_API_URL, {
  headers: {
    Authorization: API_TOKEN,
  },
});

const query = `
  query GetRecentPosts($host: String!, $first: Int!) {
    publication(host: $host) {
      posts(first: $first) {
        edges {
          node {
            id
            title
            brief
            slug
            publishedAt
          }
        }
      }
    }
  }
`;

async function testConnection() {
  try {
    console.log('Testing Hashnode connection...\n');
    console.log(`Publication: ${PUBLICATION_HOST}`);
    console.log(`API URL: ${HASHNODE_API_URL}\n`);

    const data = await client.request(query, {
      host: PUBLICATION_HOST,
      first: 3,
    });

    if (data.publication && data.publication.posts) {
      console.log('✅ Connected successfully!\n');
      console.log(`Found ${data.publication.posts.edges.length} posts:\n`);

      data.publication.posts.edges.forEach((edge, index) => {
        console.log(`${index + 1}. ${edge.node.title}`);
        console.log(`   Slug: ${edge.node.slug}`);
        console.log(`   Published: ${new Date(edge.node.publishedAt).toLocaleDateString()}\n`);
      });
    } else {
      console.log('❌ No posts found or publication not accessible');
    }
  } catch (error) {
    console.error('❌ Connection failed:');
    console.error(error.message);
    if (error.response) {
      console.error('Response:', JSON.stringify(error.response, null, 2));
    }
  }
}

testConnection();
