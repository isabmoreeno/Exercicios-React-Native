import React from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

export default function Exerc5() {
  return (
    <View style={styles.container}>
      <Text style={styles.tittle}>Login</Text>

      <TextInput style={styles.email} placeholder="E-mail" />

      <TextInput style={styles.senha} placeholder="Senha" secureTextEntry />

      <Pressable style={styles.btn}>
        <Text style={styles.btnText}>Entrar</Text>
      </Pressable>

      <Text style={styles.text}>Esqueci minha senha</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  tittle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  email: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  senha: {
    width: "100%",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  btn: {
    backgroundColor: "#457b9d",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    width: "100%",
    marginTop: 10,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  text: {
    marginTop: 15,
    color: "#457b9d",
    fontSize: 14,
  },
});