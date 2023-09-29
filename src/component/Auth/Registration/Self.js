// import { Link } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native"
// import Footer from "../../component/Footer";
import { bgColor, linksColor, textColor } from "../../../constant/Color";
// import { bgColor, linksColor, textColor } from "../constant/Color";

const Self= ({navigation})=>{
    const [formData, setFormData]= useState({name: "", mobileNo: "", adharId: "" ,email: "", password: "", cPassword: ""});
    const [deviceId, setDeviceId]= useState("");
    const [ isValidate, setIsValidate]= useState(false);
    return (
        <>
        <View style={styles.mainContainer} >
        <Image 
                style={styles.loginImage} 
                source={require('../../../../assets/Icons/slack.png')}
            />
            <Text style={styles.heading} > Self Registration  </Text>
            <TextInput value={formData.name}  onChangeText={(text)=>{ setFormData((prev)=>{return {...prev, "name": text}}) }}   style={styles.textInput} placeholderTextColor={"white"} placeholder="name" />
            <TextInput keyboardType="number-pad" value={formData.mobileNo}  onChangeText={(text)=>{ setFormData((prev)=>{return {...prev, "mobileNo": text}}) }} style={styles.textInput} placeholderTextColor={"white"} placeholder="mobile number" />
            <TextInput keyboardType="number-pad" value={formData.adharId}  onChangeText={(text)=>{ setFormData((prev)=>{return {...prev, "adharId": text}}) }} style={styles.textInput} placeholderTextColor={"white"} placeholder="Aadhar Id" />
            <TextInput keyboardType="email-address" value={formData.email}  onChangeText={(text)=>{ setFormData((prev)=>{return {...prev, "email": text}}) }} style={styles.textInput} placeholderTextColor={"white"} placeholder="email Id" />
            <TextInput keyboardType="visible-password" value={formData.password}  onChangeText={(text)=>{ setFormData((prev)=>{return {...prev, "password": text}}) }} style={styles.textInput} placeholderTextColor={"white"} placeholder="password" />
            <TextInput keyboardType="visible-password" value={formData.cPassword}  onChangeText={(text)=>{ setFormData((prev)=>{return {...prev, "cPassword": text}}) }} style={styles.textInput} placeholderTextColor={"white"} placeholder="confirm password" />
            <View style={styles.btn} >
                <Text onPress={()=>{navigation.replace('Home')}} style={styles.button} > Register </Text>
                <Text onPress={()=>{console.log("Need help");}} style={styles.links} > Need Help ?  </Text>
            </View>
        </View>
        {/* <Footer/> */}
        </>
    )
}

export default Self;

const styles= StyleSheet.create({
    mainContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: bgColor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        scrollBehavior: 'smooth',
    },
    loginImage: {
        width: 70,
        height: 70,
        marginBottom: 15,
    },
    heading: {
        fontSize: 23,
        color : textColor,
        textTransform: "uppercase",
        marginBottom: 20,
    },
    textInput: {
        color: textColor,
        borderWidth: 2,
        borderColor: textColor,
        padding: 5,
        borderRadius: 5,
        width: "80%",
    },
    btn: {
        marginTop: 10,
        display: "flex",
        justifyContent : "center",
        alignItems: "center",
    },
    links: {
        color: linksColor,
        textDecorationLine: "underline",
        marginTop: 10,
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