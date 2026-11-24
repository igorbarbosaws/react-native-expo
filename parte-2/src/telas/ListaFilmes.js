import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import {
  Card,
  Title,
  Paragraph,
  ActivityIndicator,
  Text,
} from "react-native-paper";
import { quantidadeFavoritos } from "../storage/favoritos";

const CHAVE_API = "3fc47539ad6b1b40981d67d18e578fb6";
const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  CHAVE_API +
  "&language=pt-BR";
const IMG = "https://image.tmdb.org/t/p/w500";

export default function ListaFilmes({ navigation }) {
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [qtdFavoritos, setQtdFavoritos] = useState(0);

  useEffect(() => {
    async function buscar() {
      const resposta = await fetch(URL);
      const dados = await resposta.json();
      setFilmes(dados.results);
      setCarregando(false);
      setQtdFavoritos(await quantidadeFavoritos());
    }
    buscar();
  }, []);

  if (carregando) {
    return <ActivityIndicator animating={true} style={{ marginTop: 50 }} />;
  }

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text variant="titleMedium">⭐ Favoritos salvos: {qtdFavoritos}</Text>
      <FlatList
        data={filmes}
        keyExtractor={(filme) => String(filme.id)}
        renderItem={({ item }) => (
          <Card
            style={{ marginTop: 10 }}
            onPress={() => navigation.navigate("Detalhes", { filme: item })}
          >
            <Card.Cover source={{ uri: IMG + item.poster_path }} />
            <Card.Content>
              <Title>{item.title}</Title>
              <Paragraph>Nota: {item.vote_average.toFixed(1)}</Paragraph>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
