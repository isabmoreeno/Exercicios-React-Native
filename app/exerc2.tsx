import { Image, StyleSheet, Text, View } from "react-native";

export default function Exerc2() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        <Image
          source={{ uri: "https://i.pinimg.com/736x/b1/c1/ca/b1c1ca3203ba9adf11b9382fa97b4628.jpg" }} 
          style={styles.img}
        />

        <Text style={styles.nome}>Mark Scout</Text>
        <Text style={styles.descricao}> Macrodata Refinement Chief | Lumon Industries</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // Sombras no Android
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  descricao: {
    fontSize: 14,
    color: "#666",
    textAlign: "center",
    marginTop: 5,
  },
});