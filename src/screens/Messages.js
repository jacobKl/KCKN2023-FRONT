import React from 'react'
import { View } from 'react-native';
import BottomBar from '../components/BottomBar';
import Text from './../components/Text';
import WithLayout from '../hoc/WithLayout';

function Messages() {
  return (
    <View style={{flex: 1, justifyContent: "space-between"}}>
        <Text>Messages!</Text>
        <BottomBar/>
    </View>
  )
}

export default WithLayout(Messages);