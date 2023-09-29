import { StyleSheet, Image } from 'react-native'
import React from 'react';

const SettingIcon = ({color, size }) => {
  return (
    <Image source={require('../../../assets/Icons/setting.png')} style={{
        width: size,
        height: size,
        tintColor: color,
    }} />
  )
}

export default SettingIcon;
