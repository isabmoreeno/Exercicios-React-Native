import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
        <Link href="/exerc1">Exercício 1</Link>
        <Link href="/exerc2">Exercício 2</Link>
    </View>
  );
}
