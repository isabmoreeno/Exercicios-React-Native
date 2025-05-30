import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Exerc3() {
  return (
      <View style={styles.container}>
      <Pressable style={({ pressed }) => [
          styles.btn,
          pressed && styles.btnPressed,
        ]}>
        <Text style={styles.text}>Clique aqui!</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  btn: {
    backgroundColor: "#bc4749",
    alignItems: "center", 
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: 
    { width: 0, 
    height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, 
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  btnPressed: {
    opacity: 0.8, 
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});