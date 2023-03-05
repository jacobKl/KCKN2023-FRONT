import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../css/theme";

export const Card = ({ children }) => {
  return <View style={style}>{children}</View>;
};

const style = StyleSheet.create({
  backgroundColor: theme.offWhite,
  padding: 24,
  width: "80%",
  flex: 1,
  flexDirection: "column",
  maxHeight: "50%",
  borderRadius: 16,
  justifyContent: "center",
  alignItems: "center",

  elevation: 10,
});
