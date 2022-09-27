import { View, Text, Button } from 'react-native'
import React from 'react'
import Login from './screens/Login'
import Home from './screens/Home'
import AddData from './screens/AddData'
import LoadData from './screens/LoadData'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AddData" component={AddData} />
        <Stack.Screen name="LoadData" component={LoadData} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}