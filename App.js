import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './components/Navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DcMovies from './components/dcMovies';
import MarvelMovies from './components/marvelMovies';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={RootNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-home" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DC"
        component={DcMovies}
        options={{
          tabBarLabel: 'DC',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-film" size={32} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Marvel"
        component={MarvelMovies}
        options={{
          tabBarLabel: 'Marvel',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="md-film" size={32} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
