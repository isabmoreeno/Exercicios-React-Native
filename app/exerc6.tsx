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
          <Image source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA74S64wfz3pYtK50kI9_H_GJqwMjxg1D1L3fRmdlDchezFr-WdQhxFC1rXHXIV7aYPfU&usqp=CAU" }} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.texto}>
            Os Senhores do Tempo dominam a manipulação temporal, mas até eles têm regras... e segredos.
          </Text>
          <Image source={{ uri: "https://gallifrey.pl/wp-content/uploads/2021/01/Wszyscy-Doktorzy-all-doctors.jpg" }} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.texto}>
            Daleks, Cybermen e Anjos Lamentadores são apenas algumas das ameaças que surgem entre as estrelas.
          </Text>
          <Image source={{ uri: "https://thedoctorwhocompanion.com/wp-content/uploads/2021/05/The-Pandorica-Opens-Daleks-Cybermen-Sontarans.jpg" }} style={styles.img} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.texto}>
            Cada regeneração do Doutor traz uma nova personalidade, mas a missão de proteger o tempo permanece.
          </Text>
          <Image source={{ uri: "https://papowhovian.com.br/wp-content/uploads/2016/02/all.jpg" }} style={styles.img} />
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
