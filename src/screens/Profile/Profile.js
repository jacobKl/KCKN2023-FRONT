import React, { useState } from 'react'
import { Pressable, View, ScrollView } from 'react-native';
import WithLayout from "../../hoc/WithLayout";
import WithContext from "../../hoc/WithContext";
import Text from '../../components/Text';
import { styles } from './Profile.styles';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../../components/Input';
import BottomBar from '../../components/BottomBar';
import { Image } from "expo-image";
import { Button } from '../../components/Button';
import apiRoute from '../../api/apiConfig';

function Profile({state, dispatch}) {
  const [ editing, setEditing ] = useState(false);

  const changeUserField = (field, value) => {
    dispatch({type: 'EDIT_USER_FIELD', payload: { field: field, value: value }});
  }
  const postUserData = async () => {
    const response = await fetch(apiRoute('/user/' + state.user.id), {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state.user)
    });
    const json = await response.json();
    setEditing(false)
  }
  
  const fields = [
    {
      field: 'first_name',
      placeholder: 'Imię'
    }, 
    {
      field: 'last_name',
      placeholder: 'Nazwisko'
    },
    {
      field: 'username',
      placeholder: 'Nick'
    }, 
    {
      field: 'email',
      placeholder: 'E-mail'
    }, 
    {
      field: 'description',
      placeholder: 'Opis'
    }, 
    {
      field: 'age',
      placeholder: 'Wiek'
    }
  ]

  return (
    <View style={{flex: 1, width: "100%", height: "100%", alignItems: "center"}}>
      { !editing ? <Pressable onPress={() => setEditing(!editing)} style={styles.editPressable}>
          <FontAwesome5 name="edit" style={styles.editProfile} />
        </Pressable> : null}
      { state.user ? <ScrollView style={{flex: 1, width: "70%"}} contentContainerStyle={{height: "100%", justifyContent: "center", alignItems: "center"}}>
          <View style={styles.avatar}>
            <Image source="https://picsum.photos/200/300" contentFit="cover" style={{width: "100%", height: "100%"}}/>
          </View>

          { fields.map((field, j) => (
            editing ? <Input key={j} value={state.user[field.field]} placeholder={field.placeholder} onChange={(text) => changeUserField(field.field, text)} style={{width: "100%"}}/> : <Text key={j} style={styles.userField}>{field.placeholder}: <Text></Text>
              {state.user[field.field]}
            </Text>
          ))}

          { editing ? <Button onClick={postUserData}>Zapisz</Button> : null}
        </ScrollView> : <Text>Loading...</Text>}
        <BottomBar/>
    </View>
  )
}

export default WithLayout(WithContext(Profile))