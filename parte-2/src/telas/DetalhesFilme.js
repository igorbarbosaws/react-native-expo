import React, { useState } from "react";
import { ScrollView } from "react-native";
import { Card, Title, Paragraph, Button, Text } from "react-native-paper";
import { favoritar } from "../storage/favoritos";

const IMG = "https://image.tmdb.org/t/p/w500";

export default function DetalhesFilme({ route }) {
  const { filme } = route.params;
  const [mensagem, setMensagem] = useState("");

  async function aoFavoritar() {
    try {
      await favoritar(filme);
      setMensagem("Filme salvo nos favoritos! ⭐");
    } catch (erro) {
      console.warn("Erro ao favoritar:", erro);
      setMensagem("Erro ao salvar o filme. 😕");
    }
  }

  return (
    <ScrollView style={{ flex: 1, padding: 10 }}>
      <Card>
        <Card.Cover source={{ uri: IMG + filme.poster_path }} />
        <Card.Content>
          <Title>{filme.title}</Title>
          <Paragraph>{filme.overview || "Sem sinopse disponível."}</Paragraph>
          <Paragraph>Nota: {filme.vote_average.toFixed(1)}</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={aoFavoritar}>⭐ Favoritar</Button>
        </Card.Actions>
      </Card>
      {mensagem !== "" && (
        <Text variant="bodyLarge" style={{ marginTop: 12 }}>{mensagem}</Text>
      )}
    </ScrollView>
  );
}