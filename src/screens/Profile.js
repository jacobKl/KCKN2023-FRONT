import React from 'react'
import { View, Text } from 'react-native';
import WithLayout from "../hoc/WithLayout";

function Login() {
  return (
    <View style={{flex: 1}}>
        <Text>Profile screen</Text>
    </View>
  )
}

export default WithLayout(Login)