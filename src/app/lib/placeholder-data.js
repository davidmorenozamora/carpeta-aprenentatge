const uuid = require('uuid');

const MAIN_CATEGORIES = {
    joComADocent: {
        id: uuid.v4(),
        title: "Jo com a docent",
        image: null,
        parent_category_id: null,
    },
    joComAAprenent: {
        id: uuid.v4(),    
        title: "Jo com a aprenent",
        image: null,
        parent_category_id: null,
    },
}

const SUBCATEGORIES = {
    laPracticaDocent: {
        id: uuid.v4(),
        title: "La practica docent",
        image: "practica_docent.png",
        parent_category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    evidenciesDeDesenvolupament:  {
        id: uuid.v4(),
        title: "Evidencies de desenvolupament i aprenentatge del MCPD en la docencia supervisada",
        image: "evidencies_i_aprenentatges.png",
        parent_category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    reflexionsMillora: {
        id: uuid.v4(),
        title: "Reflexions de millora contínua a partir dels cicles d'observació",
        image: "reflexions_de_millora.png",
        parent_category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    materialsIRubriques: {
        id: uuid.v4(),
        title: "Materials i rúbriques de la docència supervisada",
        image: "materials_i_rubriques.png",
        parent_category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    seguimentAlumnat: {
        id: uuid.v4(),
        title: "Seguiment de l'alumnat de la docència supervisada",
        image: "seguiment_de_alumnat.png",
        parent_category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    treballEnEquip: {
        id: uuid.v4(),
        title: "Treball en equip i treball amb famílies",
        image: "treball_en_equip.png",
        parent_category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    autodiagnosticDocentNovell: {
        id: uuid.v4(),
        title: "Autodiagnòstic docent novell",
        image: "placeholder.png",
        parent_category_id: MAIN_CATEGORIES.joComAAprenent.id,
    },
    reflexionsCodocencia: {
        id: uuid.v4(),
        title: "Reflexions sobre la codocència",
        image: "placeholder.png",
        parent_category_id: MAIN_CATEGORIES.joComAAprenent.id,
    },
    evidenciesTransferenciaFormacio: {
        id: uuid.v4(),
        title: "Evidències de transferència de la formació autònoma",
        image: "placeholder.png",
        parent_category_id: MAIN_CATEGORIES.joComAAprenent.id,
    },
    informeAutoaprenentatgeTrimetral: {
        id: uuid.v4(),
        title: "Informe autoaprenentatge trimestral",
        image: "placeholder.png",
        parent_category_id: MAIN_CATEGORIES.joComAAprenent.id,
    },
    transferenciaComunitatAprenentatge: {
        id: uuid.v4(),
        title: "Transferència de la comunitat d'aprenentatge a la pràctica docent",
        image: "placeholder.png",
        parent_category_id: MAIN_CATEGORIES.joComAAprenent.id,
    }
}

const INTERNAL_POSTS = {
    example1: {
        id: uuid.v4(),
        title: 'Apartat 1.1',
        content: 'Text exemple', 
        image: 'https://picsum.photos/200/300'
    },
    example2: {
        id: uuid.v4(),
        title: 'Apartat 1.2',
        content: 'Text exemple', 
        image: 'https://picsum.photos/200/300'
    },
    example3: {
        id: uuid.v4(),
        title: 'Apartat 1.3',
        content: 'Text exemple', 
        image: 'https://picsum.photos/200/300'
    },
    example4: {
        id: uuid.v4(),
        title: 'Apartat 2.1',
        content: 'Text exemple', 
        image: 'https://picsum.photos/200/300'
    },
    example5: {
        id: uuid.v4(),
        title: 'Apartat 2.2',
        content: 'Text exemple', 
        image: 'https://picsum.photos/200/300'
    },
    example6: {
        id: uuid.v4(),
        title: 'Apartat 2.3',
        content: 'Text exemple', 
        image: 'https://picsum.photos/200/300'
    },
}


const categories = [
    { ...MAIN_CATEGORIES.joComADocent },
    { ...MAIN_CATEGORIES.joComAAprenent },
    {...SUBCATEGORIES.laPracticaDocent},
    {...SUBCATEGORIES.evidenciesDeDesenvolupament},
    {...SUBCATEGORIES.reflexionsMillora},
    {...SUBCATEGORIES.materialsIRubriques},
    {...SUBCATEGORIES.seguimentAlumnat},
    {...SUBCATEGORIES.treballEnEquip},
    {...SUBCATEGORIES.autodiagnosticDocentNovell},
    {...SUBCATEGORIES.reflexionsCodocencia},
    {...SUBCATEGORIES.evidenciesTransferenciaFormacio},
    {...SUBCATEGORIES.informeAutoaprenentatgeTrimetral},
    {...SUBCATEGORIES.transferenciaComunitatAprenentatge},
];

const posts = [
    {...INTERNAL_POSTS.example1},
    {...INTERNAL_POSTS.example2},
    {...INTERNAL_POSTS.example3},
    {...INTERNAL_POSTS.example4},
    {...INTERNAL_POSTS.example5},
    {...INTERNAL_POSTS.example6},
];

const posts_categories = [
    {
        id: 1,
        post_id: INTERNAL_POSTS.example1.id,
        category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    {
        id: 2,
        post_id: INTERNAL_POSTS.example1.id,
        category_id: SUBCATEGORIES.laPracticaDocent.id,
    },
    {
        id: 3,
        post_id: INTERNAL_POSTS.example2.id,
        category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    {
        id: 4,
        post_id: INTERNAL_POSTS.example2.id,
        category_id: SUBCATEGORIES.laPracticaDocent.id,
    },
    {
        id: 5,
        post_id: INTERNAL_POSTS.example3.id,
        category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    {
        id: 6,
        post_id: INTERNAL_POSTS.example3.id,
        category_id: SUBCATEGORIES.laPracticaDocent.id,
    },
    {
        id: 7,
        post_id: INTERNAL_POSTS.example4.id,
        category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    {
        id: 8,
        post_id: INTERNAL_POSTS.example4.id,
        category_id: SUBCATEGORIES.evidenciesDeDesenvolupament.id, 
    },
    {
        id: 9,
        post_id: INTERNAL_POSTS.example5.id,
        category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    {
        id: 10,
        post_id: INTERNAL_POSTS.example5.id,
        category_id: SUBCATEGORIES.evidenciesDeDesenvolupament.id,
    },
    {
        id: 11,
        post_id: INTERNAL_POSTS.example6.id,
        category_id: MAIN_CATEGORIES.joComADocent.id,
    },
    {
        id: 12,
        post_id: INTERNAL_POSTS.example6.id,
        category_id: SUBCATEGORIES.evidenciesDeDesenvolupament.id,
    },
]
  
  
module.exports = {
    posts,
    categories,
    posts_categories
};