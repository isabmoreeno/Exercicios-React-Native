import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Alert, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

// Definindo o tipo para cada item de configuração
type Config = {
  id: string;
  nome: string;
  icon: keyof typeof Ionicons.glyphMap; 
};

const settings: Config[] = [
  {
    id: '1',
    nome: 'Notificações',
    icon: 'notifications-outline', 
  },
  {
    id: '2',
    nome: 'Privacidade',
    icon: 'lock-closed-outline', 
  },
  {
    id: '3',
    nome: 'Segurança',
    icon: 'shield-checkmark-outline', 
  },
  {
    id: '4',
    nome: 'Idioma',
    icon: 'language-outline', 
  },
  {
    id: '5',
    nome: 'Tema',
    icon: 'sunny-outline', 
  },
  {
    id: '6',
    nome: 'Conta',
    icon: 'person-circle-outline', 
  },
];

export default function Exerc10() {
  // Função para renderizar cada item de configuração
  const renderSetting = ({ item }: { item: Config }) => (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.opcoes}
        onPress={() => handleOptionPress(item.nome)} 
      >
        <Ionicons name={item.icon} size={30} color="#333" style={styles.icon} />
        <Text style={styles.text}>{item.nome}</Text>
      </TouchableOpacity>
    </View>
  );

  // Função chamada quando uma opção é clicada
  const handleOptionPress = (optionName: string) => {
    Alert.alert('Opção clicada', `Você clicou em ${optionName}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <FlatList
        data={settings}
        renderItem={renderSetting}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContent} // Adicionando estilo para o conteúdo da lista
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
    width: '100%', 
    overflowX: 'hidden', 
  },
  container: {
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: '100%', 
  },
  opcoes: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%', 
  },
  icon: {
    marginRight: 15,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  flatListContent: {
    paddingVertical: 10, 
  },
});