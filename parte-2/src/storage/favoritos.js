import AsyncStorage from "@react-native-async-storage/async-storage";

// Chave usada no armazenamento local do celular
const CHAVE = "@meus_favoritos";

// Lê os favoritos salvos. Retorna [] se nunca salvou nada.
export async function listar() {
  const dados = await AsyncStorage.getItem(CHAVE);
  // JSON.parse converte o texto de volta em array de objetos
  return dados ? JSON.parse(dados) : [];
}

// Salva um filme, evitando duplicatas
export async function favoritar(filme) {
  const favoritos = await listar();
  if (!favoritos.some((f) => f.id === filme.id)) {
    favoritos.push(filme);
    // AsyncStorage só aceita string → JSON.stringify serializa o array
    await AsyncStorage.setItem(CHAVE, JSON.stringify(favoritos));
  }
}

// Conta quantos favoritos existem salvos
export async function quantidadeFavoritos() {
  const favoritos = await listar();
  return favoritos.length;
}
