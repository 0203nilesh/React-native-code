import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Image, Button } from "react-native"
// import Footer from "../component/Footer";
import { bgColor, textColor } from "../../constant/Color";

const Validate= ({navigation})=>{
    const [deviceId, setDeviceId]= useState("");
    const [ isValidate, setIsValidate]= useState(false);
    return (
        <>
        <View style={styles.mainContainer} >
        <Image 
                style={styles.loginImage} 
                source={require('../../../assets/Icons/slack.png')}
            />
            {isValidate? (<>
                <Text style={styles.heading} > Registration for ?  </Text>
            </>):(<>
                <Text style={styles.heading} > Enter Device Id </Text>
            </>)} 
            {isValidate ? (<>
            <View style={styles.btn} >
                <Text style={styles.button} onPress={()=>{navigation.navigate('ParentReg')}} > Parent  </Text>
                <Text style={styles.button} onPress={()=>{navigation.navigate('SelfReg')}} > Self  </Text>
            </View>
            </>):(<>
            <TextInput value={deviceId}  onChangeText={(text)=>{ setDeviceId(text) }}   style={styles.textInput} placeholderTextColor={"white"} placeholder="Enter device Id" />
                <Button onPress={()=>{setIsValidate(true)}}  title="Submit"/>
            </>)}
        </View>
        {/* <Footer/> */}
        </>
    )
}

export default Validate;

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
        textAlign: "center",
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
    },
    links: {
        color: "blue",
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