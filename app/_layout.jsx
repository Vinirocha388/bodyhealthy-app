import { Drawer } from 'expo-router/drawer';
import { Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Início',
          title: 'Home',
          headerShown: false,
          headerLeft: true,
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
    </Drawer>
  );
}