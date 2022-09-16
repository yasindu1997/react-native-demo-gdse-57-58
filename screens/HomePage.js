import { View, Text, TextInput,StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function HomePage(props) {

    //state
    const[userName,setUserName]=useState("");
    const[password,setpassword]=useState("");

    //life cycle hook
    useEffect(()=>{

    })

    //arrow function
    const printStates=()=>{
        console.log(userName);
    }

  return (
    <View>
      <Text>{props.pageTitle}</Text>
      <Navbar/>
      <TextInput
        style={styles.text_input}
        placeholder="Username"
        value={userName}
        onChangeText={(e)=>{setUserName(e)}}
      />
      <TextInput
        style={styles.text_input}
        placeholder={props.placeHolder1}
      />
      <Button title='Click To View' onPress={printStates}/>
    </View>
  )
}

const styles = StyleSheet.create({
    text_input:{
        borderWidth:1,
        borderColor:'red',
        marginBottom:10
    }
})