import Link from "next/link"
import { Category } from "../lib/definitions"

export default function CategoryButton({category}: {category: Category}) {
    
    return (
        <Link
            className='p-3 border border-gray-300 border-solid rounded-md bg-gray-500 hover:bg-gray-800 transition-colors'  
            href={`/${category.id}`} 
            >
             {category.title}
        </Link>
    )
}