import { fetchPostsByCategory } from "../lib/services/posts"
import Post from "../ui/Post";
import {Suspense} from 'react';
import CategoryButton from "../ui/CategoryButton";
import { fetchCategoryByParentId } from "../lib/services/categories";


export default async function PostsPage({params}: {params: {categoryId:string}}) {
  const categories = await fetchCategoryByParentId(params.categoryId);
  const posts = await fetchPostsByCategory(params.categoryId);
  return(
    <>
      <Suspense fallback={<div>Cargando categorias...</div>}>
        <div className='mb-5 flex gap-5 justify-center'>
          {categories.map(category => 
            <CategoryButton key={category.id} category={category}/>
          )}
        </div>
      </Suspense>
      <div className="flex gap-5">
        {posts.map(post => (
          <Post key={post.id} post={post}/>
        ))} 
      </div>
      
    </>     
  )
}