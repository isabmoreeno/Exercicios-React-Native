import React from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

type Posts = {
  id: string;
  titulo: string;
  site: string;
  imgAutor: string;
  imgNoticia: string;
  texto: string;
};

const noticias: Posts[] = [
  {
    id: "1",
    titulo: "Sucesso de crítica e bilheteria, 'Sinners' será lançado em plataformas digitais",
    site:  "Mundo Negro",
    imgAutor: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShVxSV_L8zgs2N2bipEw7V3ZPcyKIZsXhpsQ&s",
    imgNoticia: "https://musesofmedia.ca/wp-content/uploads/2025/04/sinnerss.jpg?w=1024",
    texto: "O filme 'Sinners', estrelado por Michael B. Jordan, estará disponível para pré-venda digital na Amazon Prime.",
  },
  {
    id: "2",
    titulo: "Hayley Atwell revela que estava grávida de oito meses durante cena de luta em 'Missão: Impossível – O Acerto Final'",
    site: "Terra",
    imgAutor: "https://media.gazetadopovo.com.br/2017/07/f1102035265c5eae40f936d056b5013a-gpMedium.png",
    imgNoticia: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2025/05/29/699646583-8dbb950f871ce29e67438f95e32b083a.jpg",
    texto: "A atriz Hayley Atwell contou que filmou uma intensa cena de ação estando grávida de oito meses e meio. ",
  },
  {
    id: "3",
    titulo: "'Casamento Sangrento 2' terá Elijah Wood, Sarah Michelle Gellar e David Cronenberg no elenco",
    site: "Omelete",
    imgAutor: "https://i.scdn.co/image/ab6775700000ee854b5ae085e52a44049451ef8f",
    imgNoticia: "https://www.correiobraziliense.com.br/cbradar/wp-content/uploads/2025/04/Casamento-Sangrento-2.png",
    texto: "A sequência do filme contará com um elenco de peso, incluindo Elijah Wood, Sarah Michelle Gellar e David Cronenberg. ",
  },
];

export default function Exerc9() {
  const renderItem = ({ item }: { item: Posts }) => (
    <View style={styles.card}>
      <View style={styles.container}>
        <Image source={{ uri: item.imgAutor }} style={styles.imgAutor} />
        <Text style={styles.site}>{item.site}</Text>
      </View>

      <Image source={{ uri: item.imgNoticia }} style={styles.imgNoticia} />

      <Text style={styles.titulo}>{item.titulo}</Text>
      <Text style={styles.texto}>{item.texto}</Text>
    </View>
  );

  return (
    <FlatList
      data={noticias}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 10 }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 15,
    padding: 10,
    elevation: 3,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  imgAutor: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  site: {
    fontWeight: "bold",
    color: "#444",
  },
  imgNoticia: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },
  texto: {
    fontSize: 14,
    color: "#666",
  },
});
