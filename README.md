# candidoneto.com

Portfólio minimalista feito com [Astro](https://astro.build). Home com o nome
no topo e os posts como quadros; cada quadro tem capa em vídeo (ou imagem) e
revela o título ao passar o mouse (efeito "véu branco translúcido").

## Rodar localmente

Requer Node 22.12+ (ou 24+).

```bash
npm install
npm run dev      # servidor de desenvolvimento em http://localhost:4321
npm run build    # gera o site estático em dist/
npm run preview  # pré-visualiza o build
```

## Como adicionar um post

1. Crie um arquivo `.mdx` em `src/content/posts/`, ex: `meu-projeto.mdx`.
2. Comece com o cabeçalho (front matter):

   ```mdx
   ---
   title: "Título do projeto"
   date: 2025-01-15
   cover: "/media/meu-projeto.webm"      # vídeo em loop (.webm/.mp4) OU imagem (.jpg/.png)
   coverPoster: "/media/meu-projeto.jpg" # imagem de fallback (1º quadro do vídeo)
   description: "Resumo curto para SEO."
   draft: false                          # true esconde o post da home
   ---
   ```

   O campo `cover` detecta sozinho se é vídeo ou imagem pela extensão. Se for
   imagem, o `coverPoster` é opcional.

3. Escreva o conteúdo em Markdown abaixo do cabeçalho.
4. Jogue as mídias (vídeos/imagens) em `public/media/`.
5. `git push` — o deploy é automático (veja abaixo).

O quadro na home e a página do post são gerados sozinhos a partir do arquivo.

## Widget antes/depois (slider)

Para o comparativo com divisória arrastável no eixo X, importe o componente no
topo do post e use onde quiser:

```mdx
import BeforeAfter from '../../components/BeforeAfter.astro'

<BeforeAfter
  before="/media/antes.jpg"
  after="/media/depois.jpg"
  beforeLabel="Antes"
  afterLabel="Depois"
/>
```

## Hospedagem (GitHub Pages)

O deploy automático já está configurado em `.github/workflows/deploy.yml`.

1. Suba o projeto para um repositório no GitHub.
2. No repositório: Settings > Pages > Build and deployment > Source: **GitHub Actions**.
3. Cada `push` na branch `main` builda e publica sozinho.

### Domínio próprio (candidoneto.com)
- Em `astro.config.mjs`, deixe `site: 'https://candidoneto.com'` (já está).
- No repositório: Settings > Pages > Custom domain, informe o domínio.
- Crie um arquivo `public/CNAME` com uma linha: `candidoneto.com`.

### Domínio do GitHub (usuario.github.io/repositorio)
- Em `astro.config.mjs`, comente a linha `site` do domínio próprio e
  descomente as linhas `site` e `base` indicadas no arquivo.

## Estrutura

```
src/
├── content.config.ts          esquema dos posts
├── content/posts/             seus posts (.mdx) — fonte da verdade
├── components/
│   ├── ProjectCard.astro       quadro da home (capa + hover)
│   └── BeforeAfter.astro        slider antes/depois
├── layouts/
│   ├── BaseLayout.astro         shell do HTML
│   └── PostLayout.astro         página de um post
├── pages/
│   ├── index.astro              home
│   └── posts/[...slug].astro    gera a página de cada post
└── styles/global.css           tema escuro minimalista
public/media/                   vídeos e imagens
```

## Pendências

- Trocar os placeholders em `public/media/` (macropad.jpg, fusion*.jpg) pelas
  mídias reais. O render do ESP32 já está em `esp32-programmer.png`.
- Colar o conteúdo dos posts do ESP32 e do Fusion 360 (recuperar do Internet
  Archive). O post do macropad já está completo.
- Gerar os vídeos em loop dos renders e apontar o `cover` para eles.
