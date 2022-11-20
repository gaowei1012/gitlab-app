import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from '@/utils';
import * as React from 'react';

import Login from '@/pages/login';
import Home from '@/pages/home';
import ProjectDetail from '@/pages/home/detail';

const Stack = createStackNavigator();

export default function DynamicTabNavigator() {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={navigatorRef => Navigation.initNavihator(navigatorRef)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='home' component={Home} />
          <Stack.Screen name='login' component={Login} />
          <Stack.Screen name='project_detail' component={ProjectDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
