import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import ListaFilmes from "./src/telas/ListaFilmes";
import DetalhesFilme from "./src/telas/DetalhesFilme";

// Navegador do tipo "pilha": telas empilham uma sobre a outra
const Pilha = createNativeStackNavigator();

export default function App() {
  return (
    // PaperProvider fornece o tema Material Design para toda a aplicação
    <PaperProvider>
      {/* NavigationContainer é o "cérebro" da navegação */}
      <NavigationContainer>
        <Pilha.Navigator initialRouteName="Lista">
          {/* Cada Screen registra uma tela: name = identificador interno */}
          <Pilha.Screen
            name="Lista"
            component={ListaFilmes}
            options={{ title: "Filmes Populares" }}
          />
          <Pilha.Screen
            name="Detalhes"
            component={DetalhesFilme}
            options={{ title: "Detalhes do Filme" }}
          />
        </Pilha.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
