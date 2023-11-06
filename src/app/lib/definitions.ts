export type Post = {
    id: string;
    title: string;
    content: string;
    image: string;
};
  
export type Category = {
    id: string,
    title: string,
    image: string,
    parent_category_id: string | null,
};
  