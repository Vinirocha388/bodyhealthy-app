import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image
} from "react-native";
import axios from "axios";
import { useRouter } from "expo-router";

export default function LoginScreen({ navigation }) {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    if (!identifier || !password) {
      Alert.alert("Erro", "Preencha todos os campos!");
      return;
    }
  
    setLoading(true);
    try {
      const response = await axios.get("https://bodyhealthy-back.onrender.com/user");
      const users = response.data;
  
      // Verifica se existe um usuário com o userName OU email + senha
      const foundUser = users.find(
        (user) =>
          (user.userName === identifier || user.email === identifier) &&
          user.password === password
      );
  
      if (foundUser) {
        Alert.alert("Bem-vindo!", `Olá, ${foundUser.name}`);
        router.push("");
      } else {
        Alert.alert("Erro", "Usuário ou senha inválidos.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error.message);
      Alert.alert("Erro", "Não foi possível conectar ao servidor.");
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <Image style={styles.image} 
        source={require("../assets/icon.png")}></Image>
      <View style={styles.form}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.input}
          placeholder="Email ou Usuário"
          placeholderTextColor="#ccc"
          onChangeText={setIdentifier}
          value={identifier}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />

        <TouchableOpacity
          style={[styles.button, { opacity: loading ? 0.6 : 1 }]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.buttonText}>{loading ? "Fazendo Login.." : "Login"}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("../cadastro")}>
          <Text style={styles.linkText}>Não tem conta? Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#292929",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  form: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 30,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    borderRadius: 5,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#444",
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  linkText: {
    color: "#aaa",
    textAlign: "center",
    textDecorationLine: "underline",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginBottom: 0,
    marginTop: 0,
  },
});