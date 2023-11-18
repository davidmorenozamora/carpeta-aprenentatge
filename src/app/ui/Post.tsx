'use client'

import { Post } from "../lib/definitions"
import { Card, Image, Text, Button, Group } from '@mantine/core';
import Link from "next/link"

export default function Post({post}: {post: Post} ) {

    return (
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
    
            <Text size="sm" c="dimmed">
                {post.content}
            </Text>
    
            <Button component={Link} href={`/posts/${post.id}`} variant="light" color="blue" fullWidth mt="md" radius="md">
                See more
            </Button>
      </Card>
    )
}