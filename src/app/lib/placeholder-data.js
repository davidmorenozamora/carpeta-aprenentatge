

const categories = [
    {
        id: "3958dc9e-612f-4377-85e9-fec4b6a6442a",
        title: "Jo com a docent",
        image: "https://picsum.photos/200/300",
        parent_category_id: null,
    },
    {
        id: "3958dc9e-642f-4377-85e9-fec4b6a6442a",
        title: "Jo com a aprenent",
        image: "https://picsum.photos/200/300",
        parent_category_id: null,
    },
    {
        id: "3958dc9e-637f-4377-85e9-fec4b6a6442a",
        title: "La practica docent",
        image: "https://picsum.photos/200/300",
        parent_category_id: "3958dc9e-612f-4377-85e9-fec4b6a6442a",
    },
    {
        id: "3958dc9e-687f-4377-85e9-fec4b6a6442a",
        title: "Evidencies de desenvolupament i aprenentatge del MCPD en la docencia supervisada",
        image: "https://picsum.photos/200/300",
        parent_category_id: "3958dc9e-612f-4377-85e9-fec4b6a6442a",
    },
];

const posts = [
    {
        id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        title: 'Apartado 1.1',
        content: 'Lorem ipsum dolor sit amed', 
        image: 'https://picsum.photos/200/300'
    },
    {
        id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        title: 'Apartado 1.2',
        content: 'Lorem ipsum dolor sit amed', 
        image: 'https://picsum.photos/200/300'
    },
    {
        id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
        title: 'Apartado 1.3',
        content: 'Lorem ipsum dolor sit amed', 
        image: 'https://picsum.photos/200/300'
    },
    {
        id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
        title: 'Apartado 2.1',
        content: 'Lorem ipsum dolor sit amed', 
        image: 'https://picsum.photos/200/300'
    },
    {
        id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
        title: 'Apartado 2.2',
        content: 'Lorem ipsum dolor sit amed', 
        image: 'https://picsum.photos/200/300'
    },
    {
        id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        title: 'Apartado 2.3',
        content: 'Lorem ipsum dolor sit amed', 
        image: 'https://picsum.photos/200/300'
    },
];

const posts_categories = [
    {
        id: 1,
        post_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        category_id: '3958dc9e-612f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 2,
        post_id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
        category_id: '3958dc9e-637f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 3,
        post_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        category_id: '3958dc9e-612f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 4,
        post_id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
        category_id: '3958dc9e-637f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 5,
        post_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
        category_id: '3958dc9e-612f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 6,
        post_id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
        category_id: '3958dc9e-637f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 7,
        post_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
        category_id: '3958dc9e-612f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 8,
        post_id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
        category_id: '3958dc9e-687f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 9,
        post_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
        category_id: '3958dc9e-612f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 10,
        post_id: '3958dc9e-787f-4377-85e9-fec4b6a6442a',
        category_id: '3958dc9e-687f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 11,
        post_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        category_id: '3958dc9e-612f-4377-85e9-fec4b6a6442a',
    },
    {
        id: 12,
        post_id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
        category_id: '3958dc9e-687f-4377-85e9-fec4b6a6442a',
    },
]
  
  
module.exports = {
    posts,
    categories,
    posts_categories
};