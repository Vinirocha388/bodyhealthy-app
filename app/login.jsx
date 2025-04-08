import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  ImageBackground,
  Button,
} from "react-native";

const UserCard = () => {
  const [userInfo, setUserInfo] = useState({
    name: "João Silva",
    age: "30",
    gender: "Masculino",
    height: "1.75m",
    weight: "70kg",
    goal: "Ganhar massa muscular",
    aboutGoal: "Quero ganhar massa muscular para melhorar minha saúde e estética.",
    restrictions: "Nenhuma restrição física ou de saúde.",
    fitnessLevel: "Intermediário",
    preferences: "Prefiro treinos ao ar livre e exercícios funcionais.",
  });

  const handleChange = (key, value) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  return (
    <View style={styles.card}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Login e Cadastro</Text>

        <View style={styles.profileImageContainer}>
          <ImageBackground
            source={{
              uri: "https://i.pinimg.com/736x/e5/df/45/e5df457e8de5d0aae37691c00e8a672e.jpg",
            }}
            style={styles.profileImage}
          />
        </View>

        <View style={styles.cardContent}>
          <Field label="Nome:" value={userInfo.name} onChange={(text) => handleChange("name", text)} />
          <Field label="Idade:" value={userInfo.age} onChange={(text) => handleChange("age", text)} keyboardType="numeric" />
          <Field label="Sexo:" value={userInfo.gender} onChange={(text) => handleChange("gender", text)} />
          <Field label="Altura:" value={userInfo.height} onChange={(text) => handleChange("height", text)} />
          <Field label="Peso:" value={userInfo.weight} onChange={(text) => handleChange("weight", text)} />
          <Field label="Objetivo:" value={userInfo.goal} onChange={(text) => handleChange("goal", text)} />
          <Field label="Fale Sobre o Seu Objetivo:" value={userInfo.aboutGoal} onChange={(text) => handleChange("aboutGoal", text)} multiline />
          <Field label="Restrições Físicas e de Saúde:" value={userInfo.restrictions} onChange={(text) => handleChange("restrictions", text)} multiline />
          <Field label="Nível de condicionamento Físico:" value={userInfo.fitnessLevel} onChange={(text) => handleChange("fitnessLevel", text)} />
          <Field label="Preferências pessoais:" value={userInfo.preferences} onChange={(text) => handleChange("preferences", text)} multiline />
        </View>
      </ScrollView>

      <Button title="Cadastrar" onPress={() => alert("Informações salvas com sucesso!")} />
    </View>
  );
};

// Componente de campo reutilizável
const Field = ({ label, value, onChange, multiline = false, keyboardType = "default" }) => (
  <>
    <Text style={styles.cardTitle}>{label}</Text>
    <TextInput
      style={styles.cardInput}
      value={value}
      onChangeText={onChange}
      multiline={multiline}
      keyboardType={keyboardType}
    />
  </>
);

const LoginScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri: "https://cdn.prod.website-files.com/64dd05b33f019f79a7ec8f43/66aaa0e993b2326603bcde44_academia-24-horas.webp",
          }}
          style={styles.image}
        />
        <UserCard />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#272727",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#fff",
  },
  card: {
    backgroundColor: "#272727",
    borderRadius: 10,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    marginTop: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },
  cardInput: {
    fontSize: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
});

export default LoginScreen;
