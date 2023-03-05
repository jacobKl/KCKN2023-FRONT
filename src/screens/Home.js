import React from "react";
import { View, Text } from "react-native";
import { Image } from 'expo-image';
import { baseAssetsPath } from './../css/fonts';
import image from './../../assets/splash.jpeg';

function Home() {

  console.log(baseAssetsPath);
  return (
    <View style={{flex: 1}}>
      <Image source={image} contentFit="cover" style={{flex: 1, height: "100%", width: "100%"}}/>
    </View>
  );
}

export default Home;
