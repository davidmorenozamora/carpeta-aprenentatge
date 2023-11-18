
export default async function PostPage({params}: {params: {postId:string}}) {

    return (
        <>Pagina de detalle del post: {params.postId}</>
    )

} 