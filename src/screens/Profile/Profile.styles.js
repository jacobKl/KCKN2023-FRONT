import { StyleSheet } from 'react-native';
import theme from '../../css/theme';

export const styles = StyleSheet.create({
    avatar: {
        width: 100,
        borderRadius: 50,
        backgroundColor: theme.accent1,
        height: 100,
        marginBottom: 20
    },
    editProfile: {
        fontSize: 25,
        color: theme.accent4,
    },
    editPressable: {
        position: "absolute",
        right: 20,
        bottom: 20
    }
})