import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada arquivo .mdx em src/content/posts/ vira um post.
// O "front matter" (o cabeçalho entre ---) precisa bater com este schema.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    // Capa do quadro: pode ser um vídeo (.webm/.mp4) ou imagem (.jpg/.png).
    cover: z.string(),
    // Imagem de fallback (mostrada enquanto o vídeo carrega ou se ele falhar).
    coverPoster: z.string().optional(),
    heroImage: z.string().optional(),
    description: z.string().optional(),
    // Marque draft: true para esconder um post da home sem apagá-lo.
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
