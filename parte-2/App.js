import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import ListaFilmes from "./src/telas/ListaFilmes";
import DetalhesFilme from "./src/telas/DetalhesFilme";

const Pilha = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Pilha.Navigator initialRouteName="Lista">
          <Pilha.Screen name="Lista" component={ListaFilmes} options={{ title: "Filmes Populares" }} />
          <Pilha.Screen name="Detalhes" component={DetalhesFilme} options={{ title: "Detalhes do Filme" }} />
        </Pilha.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}