const { db } = require('@vercel/postgres');
const {
    posts,
    categories,
    posts_categories
} = require('../src/app/lib/placeholder-data.js');

async function seedPosts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    
    await client.sql`DROP TABLE IF EXISTS posts`;

    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS posts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        image TEXT
      );
    `;

    console.log(`Created "posts" table`);

    // Insert data into the "users" table
    const insertedPosts = await Promise.all(
      posts.map(async (post) => {
        return client.sql`
        INSERT INTO posts (id, title, content, image)
        VALUES (${post.id}, ${post.title}, ${post.content}, ${post.image})
        ON CONFLICT (id) DO NOTHING;
      `;
      }),
    );

    console.log(`Seeded ${insertedPosts.length} posts`);

    return {
      createTable,
      users: insertedPosts,
    };
  } catch (error) {
    console.error('Error seeding posts:', error);
    throw error;
  }
}

async function seedCategories(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

      await client.sql`DROP TABLE IF EXISTS categories`;

      // Create the "invoices" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS categories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          image TEXT,
          parent_category_id UUID
        );
      `;
  
      console.log(`Created "categories" table`);
  
      // Insert data into the "users" table
      const insertedCategories = await Promise.all(
        categories.map(async (category) => {
          return client.sql`
          INSERT INTO categories (id, title, image, parent_category_id)
          VALUES (${category.id}, ${category.title}, ${category.image}, ${category.parent_category_id})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedCategories.length} categories`);
  
      return {
        createTable,
        users: insertedCategories,
      };
    } catch (error) {
      console.error('Error seeding categories:', error);
      throw error;
    }
}
  
async function seedPostsCategories(client) {
    try {
      await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

      await client.sql`DROP TABLE IF EXISTS posts_categories`;

      // Create the "invoices" table if it doesn't exist
      const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS posts_categories (
            id SERIAL PRIMARY KEY,
            post_id UUID,
            category_id UUID
        );
      `;
  
      console.log(`Created "posts_categories" table`);
  
      // Insert data into the "users" table
      const insertedPostsCategories = await Promise.all(
        posts_categories.map(async (item) => {
          return client.sql`
          INSERT INTO posts_categories (id, post_id, category_id)
          VALUES (${item.id}, ${item.post_id}, ${item.category_id})
          ON CONFLICT (id) DO NOTHING;
        `;
        }),
      );
  
      console.log(`Seeded ${insertedPostsCategories.length} posts_categories`);
  
      return {
        createTable,
        users: insertedPostsCategories,
      };
    } catch (error) {
      console.error('Error seeding posts_categories:', error);
      throw error;
    }
}

async function main() {
  const client = await db.connect();

  await seedCategories(client);
  await seedPosts(client);
  await seedPostsCategories(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});