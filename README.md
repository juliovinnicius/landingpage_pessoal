# Júlio Macena | Landing Page

Landing page pessoal em React para apresentação profissional como Software Engineer, com foco em mobile, backend, arquitetura escalável e uso pragmático de IA no desenvolvimento.

## Stack

- React
- Vite
- CSS customizado com design tokens
- `gh-pages` para deploy estático

## Estrutura

```text
.
├── .interface-design/
├── public/
├── src/
│   ├── components/
│   ├── data/
│   ├── styles/
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Como rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

## Deploy no GitHub Pages

1. Crie um repositório no GitHub e envie este projeto.
2. Instale as dependências:

```bash
npm install
```

3. Gere e publique:

```bash
npm run deploy
```

4. No GitHub, verifique se o branch publicado pelo `gh-pages` foi criado.
5. Em `Settings > Pages`, confirme a publicação via GitHub Pages se necessário.

## Ajustes recomendados antes de publicar

- Atualizar os links de contato em [src/data/profile.js](/Users/juliomacena/Documents/projetos/landingpage_julio/src/data/profile.js)
- Revisar o texto do resumo profissional, caso queira uma versão mais curta ou mais técnica
- Substituir ou complementar o favicon e possíveis assets visuais
