'use client'

import {Image, Title} from '@mantine/core';
import { Category } from '../lib/definitions';
import css from './categoryImage.module.css';
import Link from 'next/link';

export default function CategoryImage({category}: {category: Category}) {

    return (
        <Link href={`/categories/${category.parent_category_id}/${category.id}`}>
            <div className={`${css.imageContainer}`}>
                <div>
                    <Image src={`/static/categories/${category.image}`} className={`${css.image}`} alt={category.title}/>
                </div>
                <Title order={4}>{category.title}</Title>
            </div>
        </Link>
        
    )

}