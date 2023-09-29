import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Login from './screens/Login';
// import Icon from 'react-native-vector-icons/FontAwesome';
import HomeIcon from './component/Icons/HomeIcon';
import SettingIcon from './component/Icons/SettingIcon';
import Setting from './screens/Setting';
import SurvillianceIcon from './component/Icons/SurvillianceIcon';

const Tab= createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={({route})=>({
            tabBarIcon: ({focused, color})=>{
                let size;
                if(route.name==='Home'){
                    color= focused?'blue': 'black';
                    size= focused? 28: 25;
                    return  <HomeIcon color={color} size={size} /> ;
                }else if (route.name==='Login'){
                    color= focused?'blue': 'black';
                    size= focused? 28: 25;
                    return  <SurvillianceIcon color={color} size={size} /> ;
                }else if (route.name==='Setting'){
                    color= focused?'blue': 'black';
                    size= focused? 28: 25;
                    return  <SettingIcon color={color} size={size} /> ;
                }
            },
            tabBarShowLabel: false,
        })}  >
            <Tab.Screen
            name='Home'
            component={Home}
            options={{
                headerShown: false,
            }}
            />
            <Tab.Screen
            name='Login'
            component={Login}
            options={{
                headerShown: false,
            }}
            />
            <Tab.Screen
            name='Setting'
            component={Setting}
            options={{
                headerShown: false,
            }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator;
