import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

export default function CustomHeader({ title = "Body & Health" }) {
  const navigation = useNavigation();
  const router = useRouter();
  return (
    <View style={styles.header}>

      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={40} color="#fff" />
      </TouchableOpacity>

      <Text style={styles.title} onPress={() => router.push("./")}>{title}</Text>



    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#000',
    padding: 20,
    paddingTop: 30, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

});

