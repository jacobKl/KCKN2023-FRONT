import React, { useState } from "react";
import { Image } from "expo-image";
import Card from "../components/Card";
import Button from "../components/Button";
import Input from "../components/Input";
import theme from "../css/theme";
import Text from "../components/Text";
import Header from "../components/Header";
import { StyleSheet, View } from "react-native";
import image from "./../../assets/splash.jpeg";
import useScreenSize from "../hooks/useScreenSize";
import { apiRoute } from "../api/apiConfig";
import WithContext from "../hoc/WithContext";

const Login = ({ navigation, state, dispatch }) => {
  const { screenHeight } = useScreenSize();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fetching, setFetching] = useState(false);

  const handleLogin = () => {
    if (fetching) return;

    setFetching(true);

    fetch(apiRoute("/login"), {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        Accept: "application/json",
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setFetching(false);
        dispatch({
          type: "SET_USER",
          payload: { user: res.data, userToken: res.data.token },
        });
        console.info(JSON.stringify(state, null, 2));
      })
      .catch((err) => console.error(err));
  };

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
          maxHeight: 0.8 * screenHeight,
          minHeight: 400,
        }}
      >
        <Header style={{ color: theme.base1 }}>Witaj!</Header>
        <View style={{ flex: 1, width: "100%", marginTop: 24 }}>
          <Input
            styleProp={StyleSheet.create({ width: "100%" })}
            placeholder="E-mail"
            onChange={setEmail}
          />
          <Input
            styleProp={StyleSheet.create({ width: "100%" })}
            placeholder="Hasło"
            onChange={setPassword}
          />
          <Button
            onClick={handleLogin}
            styleProp={StyleSheet.create({ width: "100%" })}
            disabled={!fetching}
          >
            <Text type="bold">Zaloguj się</Text>
          </Button>
        </View>
        <Text style={{ color: theme.grayMid, marginBottom: 2 }}>
          Nie masz konta?
        </Text>
        <Button
          type="secondary"
          onClick={() => {
            navigation.navigate("Register");
          }}
          styleProp={StyleSheet.create({ width: "100%" })}
        >
          <Text type="bold">Zarejestruj się</Text>
        </Button>
      </Card>
    </>
  );
};

export default WithContext(Login);
