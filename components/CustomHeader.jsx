import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function CustomHeader({ title = "Body & Health" }) {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      {/* Botão Menu (Drawer) */}
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={28} color="#fff" />
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>{title}</Text>

      {/* Ícone de usuário */}
      <Ionicons name="person-circle-outline" size={28} color="#fff" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 10,
    paddingTop: 40, // para não colar no topo
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
