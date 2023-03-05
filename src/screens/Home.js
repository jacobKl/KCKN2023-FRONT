import React from "react";
import { StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import image from "./../../assets/splash.jpeg";
import WithLayout from "../hoc/WithLayout";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import Input from "../components/Input";
import theme from "../css/theme";
import Text from "../components/Text";
import Header from "../components/Header";

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
      <Card
        styleProp={{
          justifyContent: "space-between",
          height: "100%",
          maxHeight: 450,
        }}
      >
        <Header style={{ color: theme.base1 }}>Witaj!</Header>
        <View style={{ flex: 1, width: "100%", marginTop: 24 }}>
          <Input
            styleProp={StyleSheet.create({ width: "100%" })}
            placeholder="E-mail"
          />
          <Input
            styleProp={StyleSheet.create({ width: "100%" })}
            placeholder="Hasło"
          />
          <Button
            onClick={handleLogin}
            styleProp={StyleSheet.create({ width: "100%" })}
          >
            <Text type="bold">Zaloguj się</Text>
          </Button>
        </View>
        <Text style={{ color: theme.grayMid, marginBottom: 2 }}>
          Nie masz konta?
        </Text>
        <Button
          type="secondary"
          onClick={handleRegister}
          styleProp={StyleSheet.create({ width: "100%" })}
        >
          <Text type="bold">Zarejestruj się</Text>
        </Button>
      </Card>
    </>
  );
}

export default WithLayout(Home);
