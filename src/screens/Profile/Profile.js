import React, { useState } from 'react'
import { Pressable, View } from 'react-native';
import WithLayout from "../../hoc/WithLayout";
import WithContext from "../../hoc/WithContext";
import Text from '../../components/Text';
import { styles } from './Profile.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../../components/Input';


function Profile({state, dispatch}) {
  const [ editing, setEditing ] = useState(false);

  const changeUserField = (field, value) => {
    dispatch({type: 'EDIT_USER_FIELD', payload: { field: field, value: value }});
  }

  return (
    <View style={{flex: 1, width: "100%", alignItems: "center"}}>
      <Pressable onPress={() => setEditing(!editing)} style={styles.editPressable}>
        <FontAwesome5 name="edit" style={styles.editProfile} />
      </Pressable>
      { state.user ? <View style={{flex: 1, width: "70%", justifyContent: "center", alignItems: "center"}}>
          <View style={styles.avatar}>

          </View>
          { editing ? <Input value={state.user.username} onChange={(text) => changeUserField('username', text)} style={{width: "100%"}}/> : <Text>
            @{state.user.username}
          </Text>}
          
          { editing ? <Input value={state.user.email} onChange={(text) => changeUserField('email', text)}/> : <Text>
            {state.user.email}
          </Text>}
          
          {
            editing ? <Input value={state.user.description} onChange={(text) => changeUserField('description', text)}/> : <Text>
              {state.user.description}
            </Text> 
          }
        </View> : <Text>Loading...</Text>}
    </View>
  )
}

export default WithLayout(WithContext(Profile))