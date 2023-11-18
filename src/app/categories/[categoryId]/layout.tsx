
import CategoriesGrid from "@/app/ui/CategoriesGrid";
import { fetchCategoryByParentId } from "../../lib/services/categories";
import {Suspense} from 'react';
import {Loader, Space} from '@mantine/core'

export default async function SubCategoriesLayout({params, children}: {params: {categoryId:string}, children: React.ReactNode}) {

    const categories = await fetchCategoryByParentId(params.categoryId);

    return (
        <>
            <Suspense fallback={<Loader/>}>
                <CategoriesGrid variant="image" categories={categories}/>
            </Suspense>
            <Space h="md"/>
            <div>
                {children}
            </div>

        </>

    )
}