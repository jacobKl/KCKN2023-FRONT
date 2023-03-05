import React from 'react'
import { View } from 'react-native';
import WithLayout from "../hoc/WithLayout";
import Text from './../components/Text';

function Login() {
  return (
    <>
        <Text>Profile screen</Text>
    </>
  )
}

export default WithLayout(Login)