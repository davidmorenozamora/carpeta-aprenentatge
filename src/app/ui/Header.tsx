import { Libre_Baskerville } from 'next/font/google'
import { Container } from '@mantine/core';
import Link from 'next/link';

const baskerville = Libre_Baskerville({ weight: '700',subsets: ['latin'] })

export default function Header() {
    return (
        <Container>
            <div id='header'>
                <div>
                    <Link href="/">
                        <h1 className={baskerville.className}>Carpeta d&apos;Aprenentatge</h1>
                    </Link>
                </div>
                <div>
                    <h2>By Ana Arrontes Guardia</h2>
                </div>
            </div>
        </Container>
    )
}