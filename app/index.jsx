import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: darkMode ? "#000" : "#fff" },
    header: { flexDirection: "row", justifyContent: "space-between", padding: 20, backgroundColor: darkMode ? "#111" : "#ddd" },
    title: { color: darkMode ? "white" : "black", fontSize: 20, fontWeight: "bold" },
    iconRow: { flexDirection: "row", alignItems: "center" },
    image: { width: "100%", height: 200 },
    section: { padding: 20 },
    sectionTitle: { color: darkMode ? "white" : "black", fontSize: 22, fontWeight: "bold" },
    text: { color: darkMode ? "white" : "black", marginTop: 5 },
    button: { backgroundColor: darkMode ? "#fff" : "#000", padding: 10, marginTop: 15, borderRadius: 10, alignItems: "center" },
    buttonText: { fontWeight: "bold", color: darkMode ? "black" : "white" },
    community: { backgroundColor: darkMode ? "#222" : "#ddd", margin: 20, padding: 15, borderRadius: 10 },
    communityText: { color: darkMode ? "white" : "black" },
    footer: { color: darkMode ? "white" : "black", textAlign: "center", padding: 20 }
  });

  return (
    <ScrollView style={styles.container}>
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
      
      <Image source={{ uri: "https://cdn.prod.website-files.com/64dd05b33f019f79a7ec8f43/66aaa0e993b2326603bcde44_academia-24-horas.webp" }} style={styles.image} />
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Bem vindo</Text>
        <Text style={styles.text}>Nossos sistemas oferecem treinos e dicas especializadas para sua saúde.</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Fazer Login</Text></TouchableOpacity>
      </View>
      
      <View style={styles.community}>
        <Text style={styles.sectionTitle}>Posts da Comunidade</Text>
        <Text style={styles.communityText}>Fulano: "Hoje foi pesado, mas me motivou ainda mais!"</Text>
        <Text style={styles.communityText}>Ciclano: "Quem mais ama essa sensação pós-treino?" ❤️</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Ir para o Fórum</Text></TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Nossos Serviços</Text>
        <Text style={styles.text}>Musculação: Treinos personalizados e acompanhamento profissional.</Text>
        <Text style={styles.text}>Natação: Baixo impacto e fortalecimento das articulações.</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Ver Mais</Text></TouchableOpacity>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perguntas Frequentes</Text>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Horário de funcionamento?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Formas de pagamento?</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Aula experimental?</Text></TouchableOpacity>
      </View>
      
      <Text style={styles.footer}>© 2025 Body & Health. Todos os direitos reservados</Text>
    </ScrollView>
  );
};

export default Home;
