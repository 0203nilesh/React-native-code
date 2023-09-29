import { StyleSheet, Image } from 'react-native'
import React from 'react';

const SurvillianceIcon = ({color, size }) => {
  return (
    <Image source={require('../../../assets/Icons/survilliance.png')} style={{
        width: size,
        height: size,
        tintColor: color,
    }} />
  )
}

export default SurvillianceIcon;
