import { Button, Text,  TextInput,  View} from "react-native";
import { ScrollView, SafeAreaView, Image} from 'react-native';
import { StyleSheet } from "react-native";
import { useState } from "react";
// import Footer from "../component/Footer";
import { textColor, bgColor } from "../../constant/Color";

const MainLogin= ({navigation})=>{
    const [name, setName]= useState("");
    const [password, setPassword]= useState("");
    return (
        <>
        <View style={styles.mainContainer}>
            <Image
                style={styles.loginImage}
                source={require('../../../assets/Icons/slack.png')}
            />
           <Text style={styles.firstStyle}>T-Sock</Text>
                <TextInput placeholderTextColor={"white"} value={name} onChangeText={(text)=>{ setName(text) }} style={styles.inputStyle} placeholder="enter username" />
                <TextInput placeholderTextColor={"white"} value={password} onChangeText={(text)=>{ setPassword(text)}} style={styles.inputStyle}  placeholder="enter password" />
                <Text href={'/Home'} style={styles.button} > Login </Text>
                <View  style={{display: "flex", flexDirection: "row", justifyContent: "space-between", width: "80%", alignItems: "center"}} >
                    <Text onPress={()=>{navigation.replace('Forget')}} style={styles.Texts} > Forget Password </Text>
                    <Text onPress={()=>{navigation.replace('ValidateId')}} style={styles.Texts} > Don't have account </Text>
                </View>
           </View>
           {/* <Footer/> */}
        </>
    )
}

export default MainLogin;

const styles= StyleSheet.create( {
    mainContainer : {
        padding: 10,
        // borderWidth: 3,
        // borderColor: "black",
        // marginTop: 5,
        // marginLeft: 10,
        // marginRight: 10,
        color: "white",
        backgroundColor: bgColor,
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 15,
    },
    loginImage: {
        width: 70,
        height: 70,
        marginBottom: 15,
    },
    firstStyle: {
        fontSize: 23,
        textAlign: "center",
        color:  textColor,
        textTransform: "uppercase",
        fontWeight: "bold",
        marginBottom: 5,
        // backgroundColor: "black",
    },
    inputStyle: {
        borderWidth: 1,
        borderColor : textColor,
        padding: 6,
        fontSize: 15,
        color: "white",
        width: 300,
    },
    loginButton: {
        padding: 10,
        borderRadius: 3,
    },
    Texts: {
        color: textColor,
        textDecorationLine: "underline",
        marginTop: 0,
    },
    button : {
        backgroundColor: "#24a0ed",
        margin: 5,
        width: 200,
        textAlign: "center",
        fontSize: 15,
        padding: 12,
        color: textColor,
    }
})