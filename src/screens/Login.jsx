import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { State } from 'react-native-gesture-handler';
import Validate from '../component/Auth/Validate';
import Update_password from '../component/Auth/Update_password';
import Parent from '../component/Auth/Registration/Parent';
import Child from '../component/Auth/Registration/Child';
import Self from '../component/Auth/Registration/Self';
import MainLogin from '../component/Auth/MainLogin';
import Forget from '../component/Auth/Forget';

const Stack= createNativeStackNavigator();
const Login = () => {
  return (
   <Stack.Navigator initialRouteName='MainLogin' screenOptions={{headerShown: false}} >
     <Stack.Screen
     name='MainLogin'
     component={MainLogin}
     />
    <Stack.Screen
      name='ValidateId'
      component={Validate}
    />
    <Stack.Screen
      name='Forget'
      component={Forget}
    />
    <Stack.Screen
    name='UpdatePassword'
    component={Update_password}
    />
    <Stack.Screen
    name='ParentReg'
    component={Parent}
    />
    <Stack.Screen
    name='ChildReg'
    component={Child}
    />
    <Stack.Screen
    name='SelfReg'
    component={Self}
    />
   </Stack.Navigator> 
  )
}

export default Login

const styles = StyleSheet.create({})