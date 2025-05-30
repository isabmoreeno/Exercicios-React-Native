import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Exercícios:</Text>

      <Link href="/exerc1" style={styles.link}>Exercício 1</Link>
      <Link href="/exerc2" style={styles.link}>Exercício 2</Link>
      <Link href="/exerc3" style={styles.link}>Exercício 3</Link>
      <Link href="/exerc4" style={styles.link}>Exercício 4</Link>
      <Link href="/exerc5" style={styles.link}>Exercício 5</Link>
      <Link href="/exerc6" style={styles.link}>Exercício 6</Link>
      <Link href="/exerc7" style={styles.link}>Exercício 7</Link>
      <Link href="/exerc8" style={styles.link}>Exercício 8</Link>
      <Link href="/exerc9" style={styles.link}>Exercício 9</Link>
      <Link href="/exerc10" style={styles.link}>Exercício 10</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#black",
    marginBottom: 30,
  },
  link: {
    backgroundColor: "#457b9d",
    color: "#ffffff",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 6,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    width: 200,
    textDecorationLine: "none",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});
