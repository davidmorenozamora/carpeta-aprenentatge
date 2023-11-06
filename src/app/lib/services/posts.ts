import { sql } from '@vercel/postgres';
import { Post } from '../definitions';

export async function fetchPosts() {
    try {
        const data = await sql<Post>`SELECT * FROM posts;`
        
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch posts data.');
    
    }
}

export async function fetchPostsByCategory(categoryId: string) {
    try {
        const data = await sql<Post>`SELECT posts.* FROM posts INNER JOIN posts_categories ON posts.id = posts_categories.post_id WHERE posts_categories.category_id = ${categoryId};`
        
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch posts data.');
    
    }
}