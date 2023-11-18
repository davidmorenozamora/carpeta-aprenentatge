import { Grid, GridCol } from '@mantine/core';
import PostComponent from "./Post";
import { Post } from '../lib/definitions';


export default function PostsGrid({posts}: {posts: Array<Post>}) {
    return (
        <Grid justify='center'>
            {posts.map(post => (
                <GridCol span={{ base: 12, md: 6, lg: 4 }} key={post.id}>
                    <PostComponent  post={post}/>
                </GridCol>
            ))} 
        </Grid>
    )
}