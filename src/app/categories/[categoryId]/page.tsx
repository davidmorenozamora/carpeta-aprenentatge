import { Suspense } from "react";
import { fetchPostsByCategory } from "../../lib/services/posts"
import PostsGrid from "@/app/ui/PostsGrid";
import { Loader } from '@mantine/core';

export default async function PostsPage({params}: {params: {categoryId:string}}) {
  const posts = await fetchPostsByCategory(params.categoryId);
  return(
    <Suspense fallback={<Loader />}>
      <PostsGrid posts={posts}/> 
    </Suspense>
  )
}