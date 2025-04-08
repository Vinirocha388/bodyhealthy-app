import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, ImageBackground } from "react-native";
import { Button } from "react-native-web";


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
                

                {/* Profile Image */}
                <View style={{ alignItems: "center", marginBottom: 20 }}>
                    <ImageBackground
                        source={{ uri:"https://i.pinimg.com/736x/e5/df/45/e5df457e8de5d0aae37691c00e8a672e.jpg" }} // Replace with your profile image URL
                        style={{ width: 100, height: 100, borderRadius: 50, overflow: "hidden" }}
                    />
                </View>

                <View style={styles.cardContent}>
                    <Text style={styles.cardTitle}>Nome:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.name}
                        onChangeText={(text) => handleChange("name", text)}
                    />

                    <Text style={styles.cardTitle}>Idade:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.age}
                        onChangeText={(text) => handleChange("age", text)}
                        keyboardType="numeric"
                    />

                    <Text style={styles.cardTitle}>Sexo:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.gender}
                        onChangeText={(text) => handleChange("gender", text)}
                    />

                    <Text style={styles.cardTitle}>Altura:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.height}
                        onChangeText={(text) => handleChange("height", text)}
                    />

                    <Text style={styles.cardTitle}>Peso:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.weight}
                        onChangeText={(text) => handleChange("weight", text)}
                    />

                    <Text style={styles.cardTitle}>Objetivo:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.goal}
                        onChangeText={(text) => handleChange("goal", text)}
                    />

                    <Text style={styles.cardTitle}>Fale Sobre o Seu Objetivo:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.aboutGoal}
                        onChangeText={(text) => handleChange("aboutGoal", text)}
                        multiline
                    />

                    <Text style={styles.cardTitle}>Restrições Físicas e de Saúde:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.restrictions}
                        onChangeText={(text) => handleChange("restrictions", text)}
                        multiline
                    />

                    <Text style={styles.cardTitle}>Nível de condicionamento Fisíco:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.fitnessLevel}
                        onChangeText={(text) => handleChange("fitnessLevel", text)}
                    />

                    <Text style={styles.cardTitle}>Preferências pessoais:</Text>
                    <TextInput
                        style={styles.cardInput}
                        value={userInfo.preferences}
                        onChangeText={(text) => handleChange("preferences", text)}
                        multiline
                    />
                </View>
            </ScrollView>
            <Button title="Cadastrar" onPress={() => alert("Informações salvas com sucesso!")} />
        </View>
    );
};

const LoginScreen = () => {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
            <ImageBackground
                source={{ uri: "https://cdn.prod.website-files.com/64dd05b33f019f79a7ec8f43/66aaa0e993b2326603bcde44_academia-24-horas.webp" }} 
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
    subtitle: {
        fontSize: 16,
        color: "#fff",
        marginBottom: 30,
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
    card: {
        backgroundColor: "#272727",
        borderRadius: 10,
        padding: 20,
        shadowColor: "#",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
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