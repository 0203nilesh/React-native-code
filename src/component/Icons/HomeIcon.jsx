import { StyleSheet, Image } from 'react-native'
import React from 'react';

const HomeIcon = ({ color, size }) => {
  return (
    <Image source={require('../../../assets/Icons/home.png')} style={{
        width: size,
        height: size,
        tintColor: color,
    }} />
  )
}

export default HomeIcon;
