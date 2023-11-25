'use client'

import Link from "next/link"
import { Category } from "../lib/definitions"
import { Button } from '@mantine/core';

export default function CategoryButton({category, buttonSize, variant}: {category: Category, variant: 'filled' | 'light', buttonSize?: 'lg' | 'md' | 'sm'}) {

    return (
        <Button 
            href={`/categories/${category.id}`}
            variant={variant}
            color="#be9c94"
            component={Link}
            size={buttonSize}
        >
            {category.title}
        </Button>
    )
}