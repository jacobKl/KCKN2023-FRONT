import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import theme from "../css/theme";

export const Card = ({ children, styleProp }) => {
  return (
    <KeyboardAvoidingView style={{ ...style, ...styleProp }}>
      {children}
    </KeyboardAvoidingView>
  );
};

const style = StyleSheet.create({
  backgroundColor: theme.offWhite,
  padding: 48,
  width: "80%",
  flex: 1,
  flexDirection: "column",
  borderRadius: 16,
  justifyContent: "center",
  alignItems: "center",

  elevation: 10,
});
