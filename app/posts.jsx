import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import CustomHeader from '../components/CustomHeader';

export default function Posts() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <CustomHeader />
      
      <View style={styles.pageTitle}>
        <Text style={styles.pageTitleText}>Feed da Comunidade</Text>
      </View>

      {/* ScrollView para conteúdo dos posts */}
      <ScrollView contentContainerStyle={styles.content}>
        {/* Card 1 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image 
              source={{uri: 'https://randomuser.me/api/portraits/men/32.jpg'}} 
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.cardTitle}>João Silva</Text>
              <Text style={styles.timestamp}>2 horas atrás</Text>
            </View>
          </View>
          
          <Text style={styles.cardText}>
            Comecei a tomar creatina há 2 semanas e já estou sentindo diferença nos treinos! Recomendo muito.
          </Text>
          
          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="heart" size={18} color="#FF0000" light />
              <Text style={styles.actionText}>24</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="comment" size={18} color="#11f51d" light />
              <Text style={styles.actionText}>8</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="share" size={18} color="#000" light />
              <Text style={styles.actionText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image 
              source={{uri: 'https://randomuser.me/api/portraits/women/44.jpg'}} 
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.cardTitle}>Maria Oliveira</Text>
              <Text style={styles.timestamp}>5 horas atrás</Text>
            </View>
          </View>
          
          <Text style={styles.cardText}>
            Alguém tem dicas de como melhorar a recuperação muscular? Estou pensando em usar BCAA.
          </Text>
          
          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="heart" size={18} color="#FF0000" light />
              <Text style={styles.actionText}>16</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="comment" size={18} color="#11f51d" light />
              <Text style={styles.actionText}>12</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="share" size={18} color="#000" light />
              <Text style={styles.actionText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image 
              source={{uri: 'https://randomuser.me/api/portraits/men/62.jpg'}} 
              style={styles.avatar}
            />
            <View style={styles.userInfo}>
              <Text style={styles.cardTitle}>Carlos Santos</Text>
              <Text style={styles.timestamp}>1 dia atrás</Text>
            </View>
          </View>
          
          <Text style={styles.cardText}>
            Treino pesado todos os dias e a creatina tem sido essencial para manter minha energia. Super recomendo!
          </Text>
          
          <View style={styles.cardFooter}>
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="heart" size={18} color="#ff0000" light />
              <Text style={styles.actionText}>42</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="comment" size={18} color="#11f51d" light />
              <Text style={styles.actionText}>5</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.actionButton}>
              <FontAwesome5 name="share" size={18} color="#000" light />
              <Text style={styles.actionText}>Compartilhar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      
      {/* Botão flutuante fora do ScrollView para estar sempre visível */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => alert('Função para criar post ainda não implementada!')}
      >
        <Ionicons name="add-outline" size={30} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  pageTitle: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  pageTitleText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    padding: 16,
    paddingBottom: 80, 
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333',
  },
  timestamp: {
    fontSize: 13,
    color: '#888',
    marginTop: 2,
  },
  cardText: {
    fontSize: 15,
    color: '#444',
    lineHeight: 22,
    marginBottom: 16,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
  },
  actionText: {
    marginLeft: 6,
    color: '#666',
    fontSize: 14,
  },
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    right: 20,
    bottom: 20,
    elevation: 8,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    zIndex: 999, // Garante que o botão esteja acima de outros elementos
  },
});
