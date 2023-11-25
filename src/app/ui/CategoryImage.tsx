import {Image, Title} from '@mantine/core';
import { Category } from '../lib/definitions';
import css from './categoryImage.module.css';
import Link from 'next/link';
import NextImage from 'next/image';

export default function CategoryImage({category}: {category: Category}) {
    
    let image;

    try {
        image = require(`@/app/ui/assets/categories/${category.image}`);
    } catch (error) {
        console.error(error);
    }

    return (
        <Link href={`/categories/${category.id}`}>
            <div className={`${css.imageContainer}`}>
                <div>
                    <Image component={NextImage} src={image} className={`${css.image}`} alt={category.title}/>
                </div>
                <Title order={4}>{category.title}</Title>
            </div>
        </Link>
        
    )

}