export type Post = {
    id: string,
    title: string,
    content: string,
    image: string,
    link: string,
    indicadores: string
};
  
export type Category = {
    id: string,
    title: string,
    image: string,
    parent_category_id: string | null,
};

export type Indicador = {
    id: string,
    color: string
}