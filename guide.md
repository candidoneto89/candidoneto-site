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
## Widget Callout

```mdx
import Callout from '../../components/Callout.astro';

<Callout type="info">
  Este projeto usa o CH340C, que já tem o oscilador interno e não precisa de cristal externo — reduz a contagem de componentes e simplifica o layout.
</Callout>

<Callout type="warning" title="Tensão nos IOs">
  O ESP32 opera em 3.3V. Nunca conecte sinais de 5V diretamente aos pinos — o chip não é 5V-tolerante e pode ser danificado permanentemente.
</Callout>

<Callout type="danger" title="Boot mode">
  Para entrar em modo de programação, GPIO0 precisa estar em LOW durante o reset. Se o seu circuito mantém GPIO0 flutuante, o chip pode não entrar em bootloader.
</Callout>

<Callout type="tip" title="Dica de roteamento">
  Use um plano de ground contínuo na camada inferior e adicione vias de stitching em torno do par USB — elimina a maior parte do ruído de modo comum sem precisar de ferrite.
</Callout>

<Callout type="note">
  O repositório inclui um script Python que automatiza o flash e abre o monitor serial logo em seguida — útil para iterar rápido durante o desenvolvimento.
</Callout>

```