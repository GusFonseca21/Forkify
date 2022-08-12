This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Sobre o projeto

 Este projeto foi insipirado em uma tarefa acadêmica de Jonas Schmedtmann, em seu curso na Udemy "The Complete JavaScript Course 2022: From Zero to Expert!". Foi construído do zero usando Next.js com Typescript (originalmente foi feito usando JavaScript puro). Forkify possui as seguintes funcionalidades: pesquisa de receitas através de nomes de pratos e ingredientes; aumento ou diminuição do número de porções, atualizando a quantidade de ingredientes; link para o site onde a receita foi originalmente postada, local em que se ensina a fazer a receita; marcar receitas como favoritas, facilitando a sua busca; adicionar novas receitas, que ficarão automaticamente marcadas como favoritas.
 
 Para manter a coerência do projeto, considerando que a API disponibilizada contém apenas receitas no idioma inglês, o aplicativo todo foi construído com base nesta mesma língua.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
