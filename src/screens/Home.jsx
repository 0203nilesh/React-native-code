import { StyleSheet, Text, View , useEffect} from 'react-native'
import React from 'react'
import { login_user, register_user } from '../redux/actions/auth'

const Home = () => {
  return (
    <View>
      <Text onPress={()=>{this.register()}}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

const mapStateToProps = (state) => {
  return {
     AuthData: state.Auth.authData
  }
}
const mapDispatchToProps = (dispatch) => {
  return { 
     register: () => {
        dispatch(register_user())
     },
     login: () => { 
        dispatch(login_user())
     }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home); 