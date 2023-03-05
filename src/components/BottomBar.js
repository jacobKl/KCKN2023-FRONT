import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Pressable } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import theme from '../css/theme';
import { Link } from '@react-navigation/native';

function BottomBar() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name } = route;
  console.log(name)
  return (
    <View style={style.bar}>
        <Pressable style={{...style.tab, ...(name === "Profile" ? style.tabActive : null)}} onPress={() => navigation.navigate("Profile")}>
            <FontAwesome5 style={{...style.icon, ...(name === "Profile" ? style.iconActive : null) }} name="user"/>
        </Pressable>
        <Pressable style={{...style.tab, ...(name === "Messages" ? style.tabActive : null)}} onPress={() => navigation.navigate("Messages")}>
            <FontAwesome5 style={{...style.icon, ...(name === "Messages" ? style.iconActive : null)}} name="envelope"/>
        </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
    bar: {
        display: "flex",
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-end"
    },
    tab: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        width: "50%",
        backgroundColor: theme.accent1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 40
    },
    tabActive: {
        backgroundColor: theme.base2,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: 50
    },
    icon: {
        fontSize: 20,
        color: "#bbb"
    },
    iconActive: {
        color: "white"
    }
});
  

export default BottomBar