import React from 'react'
import { StyleSheet, View } from 'react-native';
import Text from './../components/Text';
import theme from '../css/theme';
import moment from 'moment';

function Mood({thankful_for, mood, timestamp}) {
  return (
    <View style={style.row}>
        <Text style={style.date}>{moment.unix(timestamp).format("MM/DD/YYYY")}</Text>
        <Text>Samopoczucie: {mood}</Text>
        <Text>{thankful_for}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    row: {
        backgroundColor: theme.grayLight,
        padding: 10,
        width: "100%",
        marginBottom: 5,
        borderRadius: 5
    },
    date: {
        color: theme.base2
    }
})

export default Mood