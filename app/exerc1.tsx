import { StyleSheet, Text, View } from "react-native";

export default function Exerc1() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#8ecae6",
      }}
    >
      <Text style={styles.tittle}>Meu Primeiro App Expo</Text>
      <Text style={styles.subtittle}>Construindo interfaces no React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  tittle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  subtittle: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    color: "white",
  }
});
