import { fetchPosts } from "./lib/services/posts"
import {Suspense} from 'react';
import MainLoader from "./ui/MainLoader";
import PostsGrid from "./ui/PostsGrid";

export default async function Home() {

  const posts = await fetchPosts();

  return(
    <>
      <Suspense fallback={<MainLoader/>}>
        <PostsGrid posts={posts}/>
      </Suspense>
    </>
        
  )
}
