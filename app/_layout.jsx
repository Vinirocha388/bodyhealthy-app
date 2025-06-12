import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer 
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#000',
          opacity: 0.7,
          width: '80%',

        },
        drawerActiveBackgroundColor: '#f4f4f4',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#fff',
      }}>
        <Drawer.Screen
          name="login"
          options={{
            drawerLabel: 'login',
            drawerItemStyle: { display: 'none' },
            title: 'login',
            headerShown: false,
            headerShowoginn: false,
            headerLeft: true,
            drawerIcon: ({ size, color }) => (
              <Ionicons name="call-outline" size={size} color={color} />
            ),
          }}
        />
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Início',
          title: 'Home',
          headerShown: false,
          headerLeft: false,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="posts"
        options={{
          drawerLabel: 'Posts',
          title: 'Posts',
          headerShown: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="chatbubble-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="cadastro"
        options={{
          drawerLabel: 'Cadastro',
          title: 'Cadastro',
          headerShown: false,
          drawerItemStyle: { display: 'none' },
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="workouts"
        options={{
          drawerLabel: 'Treinos',
          title: 'Treinos',
          headerShown: false,
          headerShowoginn: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="contact"
        options={{
          drawerLabel: 'Contato',
          title: 'Contato',
          headerShown: false,
          headerShowoginn: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="(aux)/termos"
        options={{
          drawerLabel: 'Termos',
          drawerItemStyle: { display: 'none' },
          title: 'Termos',
          headerShown: false,
          headerShowoginn: false,
          headerLeft: true,
          drawerIcon: ({ size, color }) => (
            <Ionicons name="call-outline" size={size} color={color} />
          ),
        }}
      />
      

      
    </Drawer>
  );
}