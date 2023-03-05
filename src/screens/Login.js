import React from 'react'
import { View, Text } from 'react-native';
import WithLayout from "../hoc/WithLayout";

function Login() {
  return (
    <>
        <Text>Login screen</Text>
    </>
  )
}

export default WithLayout(Login);