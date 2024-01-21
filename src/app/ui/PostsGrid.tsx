import { Grid, GridCol } from '@mantine/core';
import PostComponent from "./Post";
import { Post } from '../lib/definitions';
import postsCSS from './post.module.css'

export default function PostsGrid({posts}: {posts: Array<Post>}) {
    return (
        <Grid justify='center'>
            {posts.length > 0 ? posts.map(post => (
                <GridCol span={{ base: 12, md: 6, lg: 4 }} key={post.id}>
                    <PostComponent  post={post}/>
                </GridCol>
            )) : (
                <GridCol span={{ base: 12, md: 12, lg: 12 }}>
                    <h1 className={postsCSS.emptyGrid}>Aquesta categoria està buida</h1>
                </GridCol>
            )} 
        </Grid>
    )
}