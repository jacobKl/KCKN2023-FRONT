import React from "react";
import AppContextProvider from "./src/context/AppContextProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import WithFonts from "./src/hoc/WithFonts";

import { NavigationContainer } from "@react-navigation/native";
import { createNavigationContainerRef } from "@react-navigation/core";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import Register from "./src/screens/Register";
import Profile from "./src/screens/Profile";

const queryClient = new QueryClient();

function App() {
  const Stack = createNativeStackNavigator();
  const navigationRef = createNavigationContainerRef();

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </NavigationContainer>
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default WithFonts(App);
