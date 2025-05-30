import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type App = {
  id: string;
  titulo: string;
  icone: keyof typeof Ionicons.glyphMap;
};

const listaApps: App[] = [
  { id: "a1", titulo: "Mensagens", icone: "chatbox-outline" },
  { id: "a2", titulo: "Câmera", icone: "camera-reverse-outline" },
  { id: "a3", titulo: "Fotos", icone: "image-outline" },
  { id: "a4", titulo: "Música", icone: "musical-note-outline" },
  { id: "a5", titulo: "Navegador", icone: "browsers-outline" },
  { id: "a6", titulo: "Configurações", icone: "construct-outline" },
];

export default function Exerc7() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Meus Aplicativos</Text>

      <FlatList
        data={listaApps}
        keyExtractor={(item) => item.id}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.item}>
            <View style={styles.icone}>
              <Ionicons name={item.icone} size={32} color="#fff" />
            </View>
            <Text style={styles.nome}>{item.titulo}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#004d40",
  },
  item: {
    alignItems: "center",
    margin: 12,
    width: 90,
  },
  icone: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#457b9d",
    justifyContent: "center",
    alignItems: "center",
  },
  nome: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
  },
});