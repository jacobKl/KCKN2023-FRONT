import React from "react";
import { View, Text } from "react-native";
import { Image } from 'expo-image';
import image from './../../assets/splash.jpeg';
import { Link } from '@react-navigation/native';
import WithLayout from "../hoc/WithLayout";

function Home() {

  return (
    <>
      <Image source={image} contentFit="cover" style={{flex: 1, height: "100%", width: "100%"}}/>
      <Link to={{screen: 'Login'}}>Login</Link>
      <Link to={{screen: 'Profile'}}>Profile</Link>
    </>
  );
}

export default WithLayout(Home);
