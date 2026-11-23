# Parte 1 — App mínimo consumindo a API TMDB

Versão mais simples possível do app: um único arquivo (`App.js`), sem navegação,
sem estilização externa. Conceitos cobertos:

- `useState` → variável reativa que redesenha a tela ao mudar
- `useEffect` → roda a busca uma vez quando a tela abre
- `fetch` → requisição HTTP à API do TMDB
- `FlatList` → exibição otimizada da lista de filmes

## Como rodar

Crie um projeto Expo (`npx create-expo-app meus-filmes --template blank`),
substitua o `App.js` por este arquivo, cole sua chave da API e rode `npx expo start`.

## Fluxo da aplicação

1. App abre com a lista vazia (`useState([])`)
2. `useEffect` dispara a função `buscar()` uma única vez (array de deps `[]`)
3. `fetch` chama o endpoint `/movie/popular` do TMDB com a chave e `language=pt-BR`
4. A resposta JSON é convertida em objeto e `dados.results` vai para o estado
5. O React redesenha a tela e o `FlatList` exibe cada filme como uma linha
