import React from "react";
import { StatusBar } from "expo-status-bar";
import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import AppContextProvider from "./src/context/AppContextProvider";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import WithFonts from "./src/hoc/WithFonts";
import Home from './src/screens/Home';

const queryClient = new QueryClient();


function App() {

  return (
    <AppContextProvider>
      <QueryClientProvider client={queryClient}>
        <Home/>
      </QueryClientProvider>
    </AppContextProvider>
  );
}

export default WithFonts(App);

