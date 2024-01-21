import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './cssReset.css'
import './globals.css'
import { fetchPrimaryCategories } from './lib/services/categories'
import '@mantine/core/styles.css';
import { MantineProvider, Container, AppShell, AppShellHeader, AppShellMain, Space } from '@mantine/core';
import CategoriesGrid from './ui/CategoriesGrid'
import Header from './ui/Header';

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
        <MantineProvider forceColorScheme='light' defaultColorScheme='light'>
          <AppShell>
            <AppShellHeader withBorder>
              <Header/>
            </AppShellHeader>
            <AppShellMain>
              <Container>
                <Space h="lg"/>
                <Space h="lg"/>
                <Space h="lg"/>
                <Space h="lg"/>
                <CategoriesGrid categories={primaryCategories} buttonSize='lg'/>
                <Space h="md"/>
                <div>
                  {children}
                </div>
                <Space h="lg"/>
              </Container>
            </AppShellMain>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  )
}
