import React from "react";
import { StyleSheet, TextInput } from "react-native";
import theme from "../css/theme";

function Input({ placeholder, value, onChange, styleProp }) {
  return (
    <TextInput
      style={{ ...style, ...styleProp }}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    ></TextInput>
  );
}

export default Input;

const style = StyleSheet.create({
  paddingVertical: 8,
  paddingHorizontal: 16,
  fontSize: 16,
  borderRadius: 4,
  backgroundColor: theme.grayLight,
  fontFamily: "Gantari-Bold",
  marginBottom: 16,
  elevation: 2,
});
