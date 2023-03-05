import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import theme from "../css/theme";

export const Button = ({ children, onClick, type = "primary" }) => {
  return (
    <Pressable
      style={{ ...style.default.wrapper, ...style[type].wrapper }}
      onTouchEnd={onClick}
    >
      <Text style={{ ...style.default.text, ...style[type].text }}>
        {children}
      </Text>
    </Pressable>
  );
};

const style = StyleSheet.create({
  default: {
    wrapper: {
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 4,
    },
    text: {
      fontFamily: "Gantari-Bold",
    },
  },
  primary: {
    wrapper: {
      backgroundColor: theme.base1,
    },
    text: { color: theme.accent1 },
  },
  secondary: {
    wrapper: {
      backgroundColor: theme.accent1,
    },
    text: { color: theme.base1 },
  },
});
