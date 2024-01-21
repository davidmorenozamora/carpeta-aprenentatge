import { Suspense } from "react";
import { fetchPostsByCategory } from "../../../lib/services/posts"
import PostsGrid from "@/app/ui/PostsGrid";
import { Loader } from '@mantine/core';

export default async function PostsPage({params}: {params: {subcategoryId:string}}) {
  const posts = await fetchPostsByCategory(params.subcategoryId);
  return(
    <Suspense fallback={<Loader color="#be9c94" />}>
      <PostsGrid posts={posts}/> 
    </Suspense>
  )
}