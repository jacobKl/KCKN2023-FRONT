import React, { useState } from 'react'
import { Pressable, View, ScrollView } from 'react-native';
import WithLayout from "../../hoc/WithLayout";
import WithContext from "../../hoc/WithContext";
import Text from '../../components/Text';
import { styles } from './Profile.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../../components/Input';
import BottomBar from '../../components/BottomBar';
import Checkbox from '../../components/Checkbox';
import { Image } from "expo-image";
import { Button } from '../../components/Button';

function Profile({state, dispatch}) {
  const [ editing, setEditing ] = useState(false);

  const changeUserField = (field, value) => {
    dispatch({type: 'EDIT_USER_FIELD', payload: { field: field, value: value }});
  }

  const postUserData = async () => {

    const response = await fetch('http://10.0.5.76:3003/user', {
      method: "PUT",
      body: JSON.stringify(state.user), 
      header: {
        'Content-Type': 'application/json'
      }
    });

    const json = await response.json();
    console.log(json)
  }


  return (
    <View style={{flex: 1, width: "100%", height: "100%", alignItems: "center"}}>
      { !editing ? <Pressable onPress={() => setEditing(!editing)} style={styles.editPressable}>
          <FontAwesome5 name="edit" style={styles.editProfile} />
        </Pressable> : null}
      { state.user ? <ScrollView style={{flex: 1, width: "70%"}} contentContainerStyle={{height: "100%", justifyContent: "center", alignItems: "center"}}>
          <View style={styles.avatar}>
            <Image source="https://picsum.photos/200/300" contentFit="cover" style={{width: "100%", height: "100%"}}/>
          </View>

          { editing ? <Input value={state.user.name} onChange={(text) => changeUserField('name', text)} style={{width: "100%"}}/> : <Text size="lg">
            {state.user.name}
          </Text>}

          { editing ? <Input value={state.user.surname} onChange={(text) => changeUserField('surname', text)} style={{width: "100%"}}/> : <Text size="lg">
            {state.user.surname}
          </Text>}          

          { editing ? <Input value={state.user.username} onChange={(text) => changeUserField('username', text)} style={{width: "100%"}}/> : <Text>
            @{state.user.username}
          </Text>}
          
          { editing ? <Input value={state.user.email} onChange={(text) => changeUserField('email', text)}/> : <Text>
            {state.user.email}
          </Text>}
          
          {
            editing ? <Input value={state.user.description} onChange={(text) => changeUserField('description', text)} numberOfLines={4} multiline={true}/> : <Text>
              {state.user.description}
            </Text> 
          }
          <Checkbox isChecked={state.user.dark_mode} onValueChange={value => changeUserField('dark_mode', value)} label={"Darkmode"} />
          { editing ? <Button onClick={postUserData}>Zapisz</Button> : null}
        </ScrollView> : <Text>Loading...</Text>}
        <BottomBar/>
    </View>
  )
}

export default WithLayout(WithContext(Profile))