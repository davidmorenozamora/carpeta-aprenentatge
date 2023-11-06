import { fetchPosts } from "./lib/services/posts"
import {Suspense} from 'react';
import Post from "./ui/Post";

export default async function Home() {

  const posts = await fetchPosts();

  return(
    <>
      <Suspense fallback={<div>Cargando...</div>}>
        <div className="flex gap-5">
          {posts.map(post => (
            <Post key={post.id} post={post}/>
          ))} 
        </div>
      </Suspense>
    </>
        
  )
}
