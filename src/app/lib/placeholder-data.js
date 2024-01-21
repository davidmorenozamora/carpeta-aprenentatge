const { MAIN_CATEGORIES, SUBCATEGORIES, INTERNAL_POSTS } = require('./internal-placeholder-data');

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

const posts = Object.keys(INTERNAL_POSTS).map(key => INTERNAL_POSTS[key]);


const postsWithCategoryId = [
    {
        post: {...INTERNAL_POSTS.foda},
        category: {...SUBCATEGORIES.autodiagnosticDocentNovell} 
    },
    {
        post: {...INTERNAL_POSTS.reflexioMarcCompetencies},
        category: {...SUBCATEGORIES.autodiagnosticDocentNovell} 
    },
    {
        post: {...INTERNAL_POSTS.prioritzacioPlaTreball},
        category: {...SUBCATEGORIES.autodiagnosticDocentNovell} 
    },
    {
        post: {...INTERNAL_POSTS.autoDiagnosticInicial},
        category: {...SUBCATEGORIES.autodiagnosticDocentNovell} 
    },
    {
        post: {...INTERNAL_POSTS.graellaProgramacio},
        category: {...SUBCATEGORIES.laPracticaDocent} 
    },
    {
        post: {...INTERNAL_POSTS.xarxaAprenentatge},
        category: {...SUBCATEGORIES.laPracticaDocent} 
    },
    {
        post: {...INTERNAL_POSTS.documentacioProjecte},
        category: {...SUBCATEGORIES.treballEnEquip} 
    },
    {
        post: {...INTERNAL_POSTS.compromisos},
        category: {...SUBCATEGORIES.seguimentAlumnat} 
    },
    {
        post: {...INTERNAL_POSTS.quadernRegistreObservacioAlumnat},
        category: {...SUBCATEGORIES.seguimentAlumnat} 
    },
    {
        post: {...INTERNAL_POSTS.llibretaDeProjectes},
        category: {...SUBCATEGORIES.seguimentAlumnat} 
    },
    {
        post: {...INTERNAL_POSTS.lessonPlan},
        category: {...SUBCATEGORIES.laPracticaDocent} 
    },
    {
        post: {...INTERNAL_POSTS.lecturaCompteHalloween},
        category: {...SUBCATEGORIES.laPracticaDocent} 
    },
    {
        post: {...INTERNAL_POSTS.sesioDeHalloween},
        category: {...SUBCATEGORIES.laPracticaDocent} 
    },
    {
        post: {...INTERNAL_POSTS.formacioDigitalSomDocents},
        category: {...SUBCATEGORIES.evidenciesTransferenciaFormacio} 
    },
    {
        post: {...INTERNAL_POSTS.treballEnEquip2},
        category: {...SUBCATEGORIES.treballEnEquip} 
    },
    {
        post: {...INTERNAL_POSTS.implicacioFamiliesAEscola},
        category: {...SUBCATEGORIES.treballEnEquip} 
    },
] 


const posts_categories = []


let idNumber = 0

postsWithCategoryId.forEach(join => {
    
    const parentCategory = categories.find(cat => cat.id === join.category.parent_category_id) 

    const pushCategory = (post_id, category_id) => {
        posts_categories.push({
            id: idNumber,
            post_id,
            category_id
        })

        idNumber++;
    }

    pushCategory(join.post.id, join.category.id)

    if(parentCategory) {
        pushCategory(join.post.id, parentCategory.id)
    }
});

posts_categories.push({
    id: idNumber + 1,
    post_id: INTERNAL_POSTS.documentacioProjecte.id,
    category_id: SUBCATEGORIES.laPracticaDocent.id
})

module.exports = {
    posts,
    categories,
    posts_categories
};