import React from "react";
import AppContextProvider from "./src/context/AppContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import WithFonts from "./src/hoc/WithFonts";

import { NavigationContainer } from '@react-navigation/native';
import { createNavigationContainerRef } from '@react-navigation/core';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Profile from './src/screens/Profile/Profile';

const queryClient = new QueryClient();

function App() {
  const Stack = createNativeStackNavigator();
  const navigationRef = createNavigationContainerRef();

  return (
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContextProvider>
    </QueryClientProvider>
  );
}

export default WithFonts(App);
