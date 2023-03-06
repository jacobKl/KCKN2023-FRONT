import React, { useState, useEffect, useRef } from 'react'
import { View, Pressable, StyleSheet, ScrollView } from 'react-native'
import BottomBar from '../components/BottomBar';
import Text from './../components/Text'
import WithLayout from '../hoc/WithLayout';
import { Camera } from 'expo-camera';
import Button from '../components/Button';
import { Image } from 'expo-image';
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../components/Input';
import Mood from '../components/Mood';

function Moods() {
  useEffect(() => {
    const getMoods = async () => {
        const result = await fetch('http://10.0.5.76:3003/moods');
        const json = await result.json();
        console.log(json)
        setMoods(json);
    }

    getMoods();
  }, []);

  const postMood = async () => {
    const result = await fetch('http://10.0.5.62:8000/mood', {
        method: "POST",
        body: JSON.stringify({
            image: image,
            grateful: grateful
        })
    });

    const response = await result.json();
    console.log("go")
    console.log(response)
  }

  const [moods, setMoods] = useState([]);
  const [cam, setCam] = useState(false);
  const camRef = useRef();
  const [image, setImage] = useState('');
  const [grateful, setGrateful] = useState('')

  const startCam = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();

    if(status == 'granted')
        setCam(true);
  }

  const takePicture = async () => {
    const photo = await camRef.current.takePictureAsync({
        base64: true
    });

    setCam(false);
    setImage(photo.base64)
  }

  const gratefulOnChange = (text) => {
    setGrateful(text)
  }

  const saveMood = () => {
    console.log('save');
    postMood();
  }

  return (
    cam ? <Camera ref={camRef} type={Camera.Constants.Type.front} style={{flex: 1, width: "100%"}}>
        <Pressable onPress={takePicture} style={style.makePhoto}></Pressable>
    </Camera> : <><View style={{flex: 1, width: "80%", justifyContent: "space-between", alignItems: "center"}}>
            <View style={{justifyContent: "center", alignItems: "center", width: "100%"}}>
                { image ? <Image source={{uri: `data:image/jpeg;base64,${image}`}} style={style.image} /> : null}
                <Text>Pokaz nam jak się dzisiaj czujesz!</Text>
                <Button onClick={startCam} styleProp={style.cam}>
                    <FontAwesome5 name="camera" />
                </Button>
                <Input multiline={true} placeholder="Wdzięczność" numberOfLines={4} value={grateful} onChange={gratefulOnChange} styleProp={style.grateful} />
                <Button onClick={saveMood}>Zapisz samopoczucie i wdzięczność</Button>

                {moods ? <>
                    <Text size="lg" style={{marginBottom: 10}}>Wdzięczności</Text>
                    <ScrollView style={{width:"100%", height: "100%"}}>
                        {moods.map(mood => (
                            <Mood key={mood.id} thankful_for={mood.thankful_for} mood={mood.mood} timestamp={mood.timestamp}/>
                        ))}
                    </ScrollView> 
                </> : null}
            </View>
    </View>
    <BottomBar/>
    </>
  )
}

const style = StyleSheet.create({
    makePhoto: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 30,
        position: "absolute",
        left: "45%",
        bottom: 30,
        elevation: 5
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    cam: {
        marginTop: 10,
        width: "100%",
    },
    grateful: {
        width: "100%",
        minHeight: 100
    }
})

export default WithLayout(Moods)