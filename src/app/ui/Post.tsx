'use client'

import parse from 'html-react-parser';
import { Post } from "../lib/definitions"
import { Card, Image, Text, Button, Group, Modal, Space, BackgroundImage, Container, Badge } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CSS from './post.module.css'
import { POSTS_CONFIG } from './posts_config'

export default function Post({post}: {post: Post} ) {
    const [opened, { open, close }] = useDisclosure(false);
    const imageSrc = `/static/posts/${post.image ? post.image : 'default.webp'}`
    const parsedContent = parse(post.content)
    const indicadores = post.indicadores ? post.indicadores.split(":") : []

    return (
        <>
            <Modal opened={opened} size="lg" onClose={close} title={post.title}>
                <div>
                    <Image className={CSS.postImage} src={imageSrc} alt={post.title}/>    
                </div>                
                <hr className={CSS.postSeparator}/>
                <Container className={CSS.modalContent}>{parsedContent}</Container>
                <Space h="sm" />
            </Modal>
        
            <Card onClick={open} className={CSS.card} shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                <BackgroundImage
                    className={CSS.imagenPortada}
                    src={imageSrc}
                />
                </Card.Section>
        
                <Group justify="space-between" mt="md" mb="xs">
                <Text ta="center" w="100%" size="lg" fw={700}>{post.title}</Text>
                </Group>
                <Group align="center" justify='center'>
                    {indicadores.map(indicador => {
                        const indicadorConfig = POSTS_CONFIG.find(indica => indica.id === indicador);
                        return (
                            <Badge size='lg' variant='light' color={indicadorConfig?.color ?? "blue"} key={`${post.id}_${indicador}`}>{indicador}</Badge>
                        )
                    })}
                </Group>
                <Button variant="light" color="#be9c94" fullWidth mt="md" radius="md">
                    Més Informació
                </Button>
        </Card>
      </>
    )
}