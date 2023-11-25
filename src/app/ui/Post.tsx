'use client'

import { Post } from "../lib/definitions"
import { Card, Image, Text, Button, Group, Modal, Space } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import CSS from './post.module.css'

export default function Post({post}: {post: Post} ) {
    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} size="lg" onClose={close} title={post.title}>
                <div>
                    <Image className={CSS.postImage} src={post.image} alt={post.title}/>    
                </div>                
                <hr className={CSS.postSeparator}/>
                {post.content}
                <Space h="sm" />
            </Modal>
        
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                <Image
                    src={post.image}
                    height={160}
                    alt={post.title}
                />
                </Card.Section>
        
                <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{post.title}</Text>
                </Group>

                <Button  onClick={open} variant="light" color="#be9c94" fullWidth mt="md" radius="md">
                    Més Informació
                </Button>
        </Card>
      </>
    )
}