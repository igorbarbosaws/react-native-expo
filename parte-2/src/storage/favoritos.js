import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE = "@meus_favoritos";

export async function listar() {
  const dados = await AsyncStorage.getItem(CHAVE);
  return dados ? JSON.parse(dados) : [];
}

export async function favoritar(filme) {
  const favoritos = await listar();
  if (!favoritos.some((f) => f.id === filme.id)) {
    favoritos.push(filme);
    await AsyncStorage.setItem(CHAVE, JSON.stringify(favoritos));
  }
}

export async function quantidadeFavoritos() {
  const favoritos = await listar();
  return favoritos.length;
}