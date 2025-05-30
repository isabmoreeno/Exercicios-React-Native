import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const jogos = [
  { id: "1", nome: "The Last of Us" },
  { id: "2", nome: "God of War" },
  { id: "3", nome: "Elden Ring" },
  { id: "4", nome: "Resident Evil 4" },
  { id: "5", nome: "Spider-Man 2" },
  { id: "6", nome: "The Sims 4" },
  { id: "7", nome: "Cyberpunk" },
  { id: "8", nome: "Super Mario" },
  { id: "9", nome: "Red Dead Redemption" },
  { id: "10", nome: "Tekken 7" },
];

export default function Exerc4() {
  return (
    <View style={styles.container}>
      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.itemText}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  item: {
    backgroundColor: "#457b9d",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
