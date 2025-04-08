import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import CustomHeader from '../components/CustomHeader';


export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomHeader />


      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo à Home!</Text>
        <Text style={styles.subtitle}>Aqui você encontra informações iniciais.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  menuButton: {
    padding: 20,
    alignSelf: 'flex-start',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#000',
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subtitle: {
    fontSize: 14,
    color: '#fff',
    marginTop: 5,
  },
});