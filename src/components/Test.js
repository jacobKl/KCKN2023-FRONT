import { View, Text, StyleSheet } from 'react-native'
import WithContext from '../hoc/WithContext';

function Test({state, dispatch}) {
  return (
    <View>
        <Text style={styles.container}>{state.hello}</Text>    
    </View>
  )
}

export default WithContext(Test);

const styles = StyleSheet.create({
    container: {
      color: '#111'
    }
  });