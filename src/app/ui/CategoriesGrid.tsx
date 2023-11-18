'use client'

import { Category } from "../lib/definitions"
import { Grid, GridCol } from '@mantine/core';
import CategoryButton from "./CategoryButton";
import CategoryImage from "./CategoryImage";
import { usePathname } from 'next/navigation'


export default function CategoriesGrid({categories, buttonSize, variant}: {variant?: 'image' | 'button',categories: Array<Category>, buttonSize?: 'lg' | 'md' | 'sm' }) {

    const pathname = usePathname();
    
    return (
        <Grid justify="center">
            {categories.map(category => {
                const isSelected = pathname.includes(category.id);

                return (
                    <GridCol span={variant === 'image' ? 2 : 3}  key={category.id}>
                        {variant === 'image' ? (
                            <CategoryImage category={category}/>
                        ) : (
                            <CategoryButton category={category} variant={isSelected ? 'filled' : 'light'} buttonSize={buttonSize}/> 
                        )}
                        
                    </GridCol>
                )
            })}
        </Grid>
    )

}