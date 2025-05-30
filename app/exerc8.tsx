import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Exerc8() {
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: "https://i.pinimg.com/736x/14/db/e1/14dbe1391e7feb865befa63e18b05333.jpg" }} 
        style={styles.fundo}
      />

      <Image source={{ uri: "https://i.pinimg.com/736x/98/62/1d/98621dea4a7e9f52a897cadfcbff0b4e.jpg" }} 
        style={styles.img}
      />

      <Text style={styles.nome}>Helly R.</Text>
      <Text style={styles.bio}>
        Funcionária da Lumon Industries. Parte do programa de dissociação. Pronta para desafiar o sistema.
      </Text>

      <View style={styles.info}>
        <Text style={styles.info1}>Departamento:</Text>
        <Text style={styles.info2}>Refinamento de Dados</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.info1}>Local:</Text>
        <Text style={styles.info2}>Andar inferior da Lumon</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.info1}>Status:</Text>
        <Text style={styles.info2}>Dissociada</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fundo: {
    width: "100%",
    height: 100,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: -50,
    borderWidth: 3,
    borderColor: "#fff",
  },
  nome: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  bio: {
    fontSize: 14,
    textAlign: "center",
    marginHorizontal: 20,
    marginTop: 10,
    color: "#444",
  },
  info: {
    marginTop: 25,
    paddingHorizontal: 20,
  },
  info1: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  info2: {
    fontSize: 14,
    color: "#666",
  },
});
