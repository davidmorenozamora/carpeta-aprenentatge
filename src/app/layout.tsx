import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { fetchPrimaryCategories } from './lib/services/categories'
import CategoryButton from './ui/CategoryButton'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Carpeta Aprenentatge',
  description: 'Carpeta Aprenentatge Ana Arrontes',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const primaryCategories = await fetchPrimaryCategories();

  return (
    <html lang="en">
      <body className={inter.className}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div>
            <div className='mb-5 flex gap-5 justify-center'>
              {primaryCategories.map(category => 
                <CategoryButton key={category.id} category={category}/>
              )}
            </div>
            <div>
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  )
}
