# 🎬 Página 404 Animada com Vídeo Responsivo

Projeto de uma página 404 animada desenvolvida com HTML, CSS e JavaScript, com foco em performance e carregamento condicional de vídeo.

O principal objetivo foi implementar um vídeo de fundo responsivo carregado dinamicamente via JavaScript, evitando sobrecarga desnecessária no carregamento inicial da página.

---

## 🚀 Objetivo

Criar uma página 404 moderna e interativa aplicando:

- Vídeo de fundo animado
- Versões diferentes para desktop e mobile
- Troca automática baseada em breakpoint
- Carregamento otimizado via JavaScript

---

## 🧠 Conceitos Aplicados

- Manipulação do DOM com JavaScript
- Criação dinâmica do elemento `<video>`
- Uso de `matchMedia` para detectar breakpoints
- Troca condicional de arquivos de mídia
- Controle de `opacity` e `transition`
- Uso de `<picture>` para imagens responsivas
- Media queries no CSS
- Organização de camadas com `z-index`

---

## 📱 Responsividade

Breakpoint utilizado:

- `max-width: 600px` → versão mobile
- acima de 600px → versão desktop

Comportamento:

- Vídeo troca automaticamente entre desktop e mobile
- Imagem 404 é adaptada para mobile
- Layout ajustado para diferentes proporções de tela

---

## ⚙️ Como Funciona

O vídeo não está presente diretamente no HTML.

Ele é:

1. Criado dinamicamente via JavaScript
2. Inserido no DOM após o carregamento da página
3. Definido com base no tamanho da tela
4. Trocado automaticamente ao cruzar o breakpoint

Isso evita que múltiplos vídeos sejam carregados simultaneamente, melhorando a performance.

---

## 🛠️ Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (ES6)

---

## 📌 Resultado

Página 404 animada, responsiva e otimizada, com controle dinâmico de mídia via JavaScript.

