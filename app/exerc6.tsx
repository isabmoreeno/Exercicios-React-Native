import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";

const isWide = Dimensions.get("window").width > 500;

export default function Exerc6() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Doctor Who</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.texto}>
            A TARDIS não é apenas uma cabine de polícia, é uma máquina do tempo que viaja pelo espaço e pelas eras.
          </Text>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Tardis-Smith.svg" }} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.texto}>
            Os Senhores do Tempo dominam a manipulação temporal, mas até eles têm regras... e segredos.
          </Text>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/e/e7/Seal_of_the_Time_Lords_%28Doctor_Who%29.svg" }} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.texto}>
            Daleks, Cybermen e Anjos Lamentadores são apenas algumas das ameaças que surgem entre as estrelas.
          </Text>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Dalek_6861.jpg" }} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.texto}>
            Cada regeneração do Doutor traz uma nova personalidade, mas a missão de proteger o tempo permanece.
          </Text>
          <Image source={{ uri: "https://upload.wikimedia.org/wikipedia/en/4/4d/Doctor_Who_logo_2018.svg" }} style={styles.img} />
        </View>
      </View>

      <Text style={styles.texto2}>O tempo é um grande bola de coisas confusas e emaranhadas... como diz o Doutor.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  titulo: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 24,
    color: "#001f3f",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 14,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  row: {
    alignItems: "center",
    gap: 12,
  },
  texto: {
    flex: 1,
    fontSize: 16,
    color: "#222",
    marginBottom: isWide ? 0 : 10,
  },
  img: {
   width: "100%",
    height: 150,
    borderRadius: 10,
  },
  texto2: {
    fontSize: 16,
    textAlign: "center",
    color: "#334",
    fontStyle: "italic",
    marginTop: 30,
  },
});
