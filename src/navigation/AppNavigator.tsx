import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { SplashScreen } from '../screen/SplashScreen';
import { LoginScreen } from '../screen/LoginScreen';
import { HomeScreen } from '../screen/HomeScreen';
import { ContactsScreen } from '../screen/ContactsScreen';
import { NotificationScreen } from '../screen/NotiScreen';
import { SettingsScreen } from '../screen/SettingScreen';
import { ChatDetailScreen } from '../screen/ChatDetailScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';
          if (route.name === 'HomeTab') iconName = 'chatbubbles';
          else if (route.name === 'ContactsTab') iconName = 'people';
          else if (route.name === 'NotiTab') iconName = 'notifications';
          else if (route.name === 'SettingsTab') iconName = 'settings';
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#64748B',
      })}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Trò chuyện' }} />
      <Tab.Screen name="ContactsTab" component={ContactsScreen} options={{ title: 'Danh bạ' }} />
      <Tab.Screen name="NotiTab" component={NotificationScreen} options={{ title: 'Thông báo' }} />
      <Tab.Screen name="SettingsTab" component={SettingsScreen} options={{ title: 'Cài đặt' }} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="MainTabs" component={MainTabNavigator} />
        <Stack.Screen name="ChatDetail" component={ChatDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}