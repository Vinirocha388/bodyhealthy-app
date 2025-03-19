import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#000" }}>
      {/* Cabeçalho */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20, backgroundColor: "#111" }}>
        <FontAwesome name="bars" size={24} color="white" />
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Body & Health</Text>
        <FontAwesome name="user-circle" size={24} color="white" />
      </View>
      
      {/* Imagem */}
      <Image source={{ uri: "https://cdn.prod.website-files.com/64dd05b33f019f79a7ec8f43/66aaa0e993b2326603bcde44_academia-24-horas.webp" }} style={{ width: "100%", height: 200 }} />
      
      {/* Mensagem de boas-vindas */}
      <View style={{ padding: 20 }}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Bem vindo</Text>
        <Text style={{ color: "white", marginTop: 5 }}>
          Nossos sistemas oferecem treinos e dicas especializadas para que você tenha um excelente uso e uma ótima saúde.
        </Text>
        <TouchableOpacity style={{ backgroundColor: "#fff", padding: 10, marginTop: 15, borderRadius: 10, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Fazer Login</Text>
        </TouchableOpacity>
      </View>
      
      {/* Postagens da Comunidade */}
      <View style={{ backgroundColor: "#fff", margin: 20, padding: 15, borderRadius: 10 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Posts da Comunidade</Text>
        
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
          <FontAwesome name="user-circle" size={24} color="#333" style={{ marginRight: 10 }} />
          <Text>Fulano: "Hoje foi pesado, mas ver todo mundo dando o seu melhor me motivou ainda mais!"</Text>
        </View>
        
        <View style={{ flexDirection: "row", alignItems: "center", marginTop: 10 }}>
          <FontAwesome name="user-circle" size={24} color="#333" style={{ marginRight: 10 }} />
          <Text>Ciclano: "Quem mais ama essa sensação pós-treino? É viciante!"</Text>
          <FontAwesome name="heart" size={20} color="red" style={{ marginLeft: 10 }} />
        </View>
        
        <TouchableOpacity style={{ backgroundColor: "#000", padding: 10, marginTop: 15, borderRadius: 10, alignItems: "center" }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>Ir para o Fórum</Text>
        </TouchableOpacity>
      </View>
      
      {/* Nossos Serviços */}
      <View style={{ padding: 20 }}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>Nossos Serviços</Text>
        
        <View style={{ backgroundColor: "#222", padding: 15, borderRadius: 10, marginTop: 15 }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Musculação</Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            Treinos personalizados com equipamentos modernos e acompanhamento profissional para ganho de força, definição e resistência.
          </Text>
        </View>
        
        <View style={{ backgroundColor: "#222", padding: 15, borderRadius: 10, marginTop: 15 }}>
          <Text style={{ color: "white", fontSize: 18, fontWeight: "bold" }}>Natação</Text>
          <Text style={{ color: "white", marginTop: 5 }}>
            Treinos de baixo impacto na piscina, perfeitos para condicionamento físico e fortalecimento sem sobrecarregar as articulações.
          </Text>
        </View>
        
        <TouchableOpacity style={{ backgroundColor: "#fff", padding: 10, marginTop: 15, borderRadius: 10, alignItems: "center" }}>
          <Text style={{ fontWeight: "bold" }}>Ver Mais</Text>
        </TouchableOpacity>
      </View>
      
      {/* Perguntas Frequentes */}
      <View style={{ backgroundColor: "#222", padding: 20, margin: 20, borderRadius: 10 }}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "bold", textAlign: "center" }}>Perguntas Frequentes</Text>
        
        <TouchableOpacity style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>➤ Qual o horário de funcionamento?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>➤ Quais as formas de pagamento aceitas?</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={{ backgroundColor: "#fff", padding: 10, borderRadius: 10, marginTop: 10 }}>
          <Text style={{ fontWeight: "bold" }}>➤ Consigo fazer uma aula Experimental?</Text>
        </TouchableOpacity>
      </View>
      
      {/* Footer */}
      <Text style={{ color: "white", textAlign: "center", padding: 20 }}>© 2025 Body & Health. Todos os direitos reservados</Text>
    </ScrollView> 
  );
};

export default Home;