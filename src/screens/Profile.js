import React from 'react'
import { View } from 'react-native';
import WithLayout from "../hoc/WithLayout";
import Text from './../components/Text';

function Login() {
  return (
    <View style={{flex: 1}}>
        <Text>Profile screen</Text>
    </View>
  )
}

export default WithLayout(Login)