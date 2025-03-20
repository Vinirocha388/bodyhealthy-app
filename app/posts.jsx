import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: darkMode ? "#000" : "#fff" },
    header: { flexDirection: "row", justifyContent: "space-between", padding: 20, backgroundColor: darkMode ? "#111" : "#ddd" },
    title: { color: darkMode ? "white" : "black", fontSize: 20, fontWeight: "bold" },
    iconRow: { flexDirection: "row", alignItems: "center" },
    postContainer: { backgroundColor: darkMode ? "#222" : "#ddd", margin: 10, padding: 15, borderRadius: 10 },
    postUser: { color: darkMode ? "white" : "black", fontWeight: "bold", fontSize: 16 },
    postText: { color: darkMode ? "white" : "black", marginTop: 5 },
    comment: { color: darkMode ? "#bbb" : "#555", marginLeft: 20, fontSize: 14 },
    footer: { position: "absolute", bottom: 0, width: "100%", backgroundColor: darkMode ? "#111" : "#ddd", color: darkMode ? "white" : "black", textAlign: "center", padding: 20 }
  });

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Header */}
        <View style={styles.header}>
          <FontAwesome name="bars" size={24} color={darkMode ? "white" : "black"} />
          <Text style={styles.title}>Body & Health</Text>
          <View style={styles.iconRow}>
            <FontAwesome name="user-circle" size={24} color={darkMode ? "white" : "black"} style={{ marginRight: 10 }} />
            <TouchableOpacity onPress={toggleDarkMode}>
              <FontAwesome name={darkMode ? "sun" : "moon"} size={24} color={darkMode ? "white" : "black"} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Postagens */}
        <View style={styles.postContainer}>
          <Text style={styles.postUser}>Ciclano</Text>
          <Text style={styles.postText}>Hoje o treino foi intenso</Text>
          <Text style={styles.comment}>Fulano: Também achei!</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postUser}>Fulano</Text>
          <Text style={styles.postText}>Odeio treinar perna</Text>
          <Text style={styles.comment}>Ciclano: Perna é essencial, irmão!</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postUser}>Sicrano</Text>
          <Text style={styles.postText}>Se liga na Creatina que eu peguei!</Text>
          <Image source={{ uri: "https://images.tcdn.com.br/img/img_prod/1307215/creatina_integralmedica_hardcore_300g_11_1_aef72e92023afac7f0e0db1bf4005836.jpg" }} style={{ width: "100%", height: 150, marginTop: 10, borderRadius: 10 }} />
          <Text style={styles.comment}>Ciclano: Essa é top!</Text>
        </View>
        
        <View style={styles.postContainer}>
          <Text style={styles.postUser}>Influenciador</Text>
          <Text style={styles.postText}>Galera, confiram meu novo vídeo sobre treino funcional!</Text>
          <Image source={{ uri: "link da imagem de um influenciador" }} style={{ width: "100%", height: 150, marginTop: 10, borderRadius: 10 }} />
          <Text style={styles.comment}>Ciclano: Curti muito o conteúdo!</Text>
          <Text style={styles.comment}>Fulano: Vou testar esse treino amanhã!</Text>
        </View>
      </ScrollView>
      
      {/* Footer */}
      <Text style={styles.footer}>© 2025 Body & Health. Todos os direitos reservados</Text>
    </View>
  );
};

export default Home;
