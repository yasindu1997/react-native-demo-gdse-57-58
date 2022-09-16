import { View, Text, Button } from 'react-native'
import React from 'react'
import HomePage from './screens/HomePage'

export default function App() {
  return (
    <View>
      <Text>App</Text>
      <HomePage pageTitle="Yasindu's Home Page" placeHolder1="Yasindu's password"/>
      <HomePage pageTitle="Kavindu's Home Page" placeHolder1="Kavindu's password"/>
    </View>
  )
}