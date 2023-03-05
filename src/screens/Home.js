import React from "react";
import { Text } from "react-native";
import { Image } from "expo-image";
import image from "./../../assets/splash.jpeg";
import WithLayout from "../hoc/WithLayout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";

const handleLogin = () => {};

const handleRegister = () => {};

function Home() {
  return (
    <>
      <Image
        source={image}
        contentFit="cover"
        style={{
          flex: 1,
          height: "100%",
          width: "100%",
          position: "absolute",
          bottom: 0,
        }}
      />
      <Card>
        <Text>Test</Text>
        <Button onClick={handleLogin}>
          <Text>Zaloguj się</Text>
        </Button>
        <Button type="secondary" onClick={handleRegister}>
          <Text>Zarejestruj się</Text>
        </Button>
      </Card>
    </>
  );
}

export default WithLayout(Home);
