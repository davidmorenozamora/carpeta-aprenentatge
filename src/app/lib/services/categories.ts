import { sql } from '@vercel/postgres';
import { Category } from '../definitions';

export async function fetchCategories() {
    try {
        const data = await sql<Category>`SELECT * FROM categories;`
        
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch categories data.');
    
    }
}

export async function fetchPrimaryCategories() {
    try {
        const data = await sql<Category>`SELECT * FROM categories where parent_category_id IS NULL;`
        
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch primary categories data.');
    
    }
}

export async function fetchCategoryByParentId(parent_category_id: string) {

    try {
        const data = await sql<Category>`SELECT * FROM categories where parent_category_id = ${parent_category_id};`
        
        return data.rows;
    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch categories data.');
    
    }

}