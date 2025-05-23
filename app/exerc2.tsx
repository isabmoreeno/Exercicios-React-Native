import { Image, StyleSheet, Text, View } from "react-native";

export default function Exerc2() {
  return (
    <View style={styles.container}>
        <View style={styles.card}>

        <Image 
        style={styles.img}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}>

        </Image>

        <Text style={styles.nome}>Clara Fonseca</Text>
        <Text style={styles.descricao}>Desenvolvedora Mobile | React Native</Text>

    </View>
    </View>
     
  );
}

const styles = StyleSheet.create({

  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 100,
  },
  card: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: 18,
    backgroundColor: "#fff",
    borderRadius: 20,
    width: 300,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  }
});
