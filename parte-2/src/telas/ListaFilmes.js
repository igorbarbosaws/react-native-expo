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

// Chave NÃO versionada: crie a sua em https://www.themoviedb.org/settings/api
const CHAVE_API = "COLE_SUA_CHAVE_AQUI";
const URL =
  "https://api.themoviedb.org/3/movie/popular?api_key=" +
  CHAVE_API +
  "&language=pt-BR";
const IMG = "https://image.tmdb.org/t/p/w500";

// A prop "navigation" é injetada automaticamente pelo React Navigation
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
      // Lê quantos favoritos já estão gravados no celular
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
          // Tocar no card navega para "Detalhes", levando o filme como parâmetro
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
