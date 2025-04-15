import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import CustomHeader from "../components/CustomHeader";

const ContactScreen = ({ navigation }) => {
  const [darkMode, setDarkMode] = useState(false); // Light mode como padrão para esta tela
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
    investigacaoOral: "",
  });

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  return (
    <View style={[styles.screenContainer, { backgroundColor: darkMode ? "#000" : "#fff" }]}>
      {/* Header */}
      <CustomHeader />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Título Contato */}
        <Text style={[styles.contactTitle, { color: darkMode ? "white" : "black" }]}>Contato</Text>

        {/* Formulário */}
        <View style={styles.formContainer}>
          <Text style={[styles.label, { color: darkMode ? "white" : "black" }]}>Nome</Text>
          <TextInput
            style={[styles.input, { 
              backgroundColor: darkMode ? "#333" : "#f5f5f5",
              color: darkMode ? "white" : "black"
            }]}
            value={formData.moma}
            onChangeText={(text) => handleChange("moma", text)}
            placeholder="Digite seu Moma"
            placeholderTextColor={darkMode ? "#aaa" : "#888"}
          />

        

          <Text style={[styles.label, { color: darkMode ? "white" : "black" }]}>E-mail</Text>
          <TextInput
            style={[styles.input, { 
              backgroundColor: darkMode ? "#333" : "#f5f5f5",
              color: darkMode ? "white" : "black"
            }]}
            value={formData.email}
            onChangeText={(text) => handleChange("email", text)}
            placeholder="Digite seu E-mail"
            placeholderTextColor={darkMode ? "#aaa" : "#888"}
            keyboardType="email-address"
          />

          <Text style={[styles.label, { color: darkMode ? "white" : "black" }]}>Mensagem</Text>
          <TextInput
            style={[styles.input, styles.multilineInput, { 
              backgroundColor: darkMode ? "#333" : "#f5f5f5",
              color: darkMode ? "white" : "black"
            }]}
            value={formData.investigacaoOral}
            onChangeText={(text) => handleChange("investigacaoOral", text)}
            placeholder="Digite sua investigacion oral"
            placeholderTextColor={darkMode ? "#aaa" : "#888"}
            multiline
          />

          <TouchableOpacity 
            style={[styles.submitButton, { backgroundColor: darkMode ? "#4CAF50" : "#2E7D32" }]}
            onPress={() => alert("Mensagem enviada com sucesso!")}
          >
            <Text style={styles.submitButtonText}>ENVIAR</Text>
          </TouchableOpacity>
        </View>

      
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    width: "100%",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  contactTitle: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 30,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 12,
    fontSize: 16,
  },
  multilineInput: {
    height: 100,
    textAlignVertical: "top",
  },
  submitButton: {
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 25,
  },
  submitButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    padding: 25,
    alignItems: "center",
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  footerLinks: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: 15,
  },
  footerLink: {
    marginHorizontal: 10,
    fontSize: 14,
    fontWeight: "bold",
  },
  copyright: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default ContactScreen;