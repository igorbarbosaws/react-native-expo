import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const CHAVE = "COLE_SUA_CHAVE_AQUI";
const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  CHAVE +
  "&language=pt-BR";

export default function App() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function buscar() {
      const resposta = await fetch(URL);        // 1. pede os dados à API
      const dados = await resposta.json();      // 2. converte a resposta em objeto JS
      setFilmes(dados.results);                 // 3. joga no estado → tela redesenha
    }
    buscar();
  }, []); // [] = roda só uma vez, quando a tela abre

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Filmes Populares</Text>
      <FlatList
        data={filmes}
        keyExtractor={(filme) => String(filme.id)}
        renderItem={({ item }) => (
          <Text style={styles.filme}>
            {item.title} — nota {item.vote_average.toFixed(1)}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  tela: { flex: 1, padding: 20, paddingTop: 50 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 16 },
  filme: { fontSize: 16, marginBottom: 8 },
});
