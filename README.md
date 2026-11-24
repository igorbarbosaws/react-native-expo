# 🎬 Meus Filmes — React Native + Expo

App desenvolvido para a atividade de Coding: Mobile. Consome a API gratuita do
[TMDB (The Movie Database)](https://www.themoviedb.org) e exibe filmes populares no celular.

## 📁 Estrutura do repositório

```
react-native-expo/
├── parte-1/          # Entrega 1: app mínimo consumindo a API (FlatList + fetch)
│   ├── App.js
│   └── README.md
└── parte-2/          # Entrega 2: navegação + Paper + AsyncStorage
    ├── App.js
    ├── index.js
    ├── package.json
    ├── app.json
    └── src/
        ├── telas/
        │   ├── ListaFilmes.js
        │   └── DetalhesFilme.js
        └── storage/
            └── favoritos.js
```

## 🗂️ Tags de entrega

| Tag | Conteúdo |
|---|---|
| [`entrega-1`](../../releases/tag/entrega-1) | App mínimo: fetch na API TMDB + FlatList |
| [`entrega-2`](../../releases/tag/entrega-2) | Navegação entre telas, React Native Paper e AsyncStorage |

Cada tag marca o commit exato da entrega correspondente — basta clicar para
ver/baixar o código como estava naquela etapa.

## ✅ Requisitos da atividade

- [x] App em React Native + Expo consumindo dados de uma API (TMDB)
- [x] Exibição dos dados em tela
- [x] Estratégia de navegação entre telas/componentes (React Navigation — stack)
- [x] Estilização com React Native Paper (Cards, Buttons, temas Material Design)
- [x] AsyncStorage para armazenamento local (favoritos persistidos no celular)

## 🚀 Como rodar (Parte 2)

```bash
cd parte-2
npm install
# cole sua chave da API do TMDB em src/telas/ListaFilmes.js
npx expo start
```

Depois escaneie o QR Code com o app **Expo Go** no celular.

> 🔑 Crie a sua chave gratuitamente
> em https://www.themoviedb.org/settings/api (plano Developer).

## 🛠️ Tecnologias

React Native · Expo · React Navigation · React Native Paper · AsyncStorage · API TMDB
