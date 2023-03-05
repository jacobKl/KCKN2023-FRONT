import React from "react";
import { View } from "react-native";
import style from "./card.styles";

export const Card = ({ children }) => {
  return <View style={style}>{children}</View>;
};
