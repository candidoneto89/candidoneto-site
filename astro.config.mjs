import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  // Domínio do site. Com domínio próprio (candidoneto.com), deixe assim:
  site: 'https://candidoneto.com',

  // Se for usar o domínio padrão do GitHub (usuario.github.io/nome-do-repo),
  // troque o site acima por 'https://SEU_USUARIO.github.io' e descomente a
  // linha abaixo com o nome exato do repositório:
  // base: '/nome-do-repo',

  integrations: [mdx()],
});
