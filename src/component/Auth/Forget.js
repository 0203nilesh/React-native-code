import { StyleSheet, TextInput, View, Image, Text, Button } from "react-native";
// import Footer from "../component/Footer";
import { bgColor, textColor } from "../../constant/Color";

const Forget= ({navigation})=>{
    return (
        <>
        <View style={styles.mainContainer} >
        <Image
                style={styles.forgetImage}
                source={require('../../../assets/Icons/slack.png')}
            />
           <Text style={styles.firstStyle}>Forget Password</Text>
           <TextInput style={styles.textInput} placeholderTextColor={"white"} placeholder="email" />
            <Text style={styles.btn} onPress={()=>{navigation.navigate('MainLogin')}}>
                Get Password
            </Text>
        </View>
        {/* <Footer/> */}
        </>
    )
}

const styles= StyleSheet.create({
    mainContainer: {
        display: "flex",
        padding: 10,
        width: "100%",
        backgroundColor: bgColor,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        gap: 8,
    },
    forgetImage: {
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
        marginBottom: 20,
        // backgroundColor: "black",
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
        backgroundColor: "#24a0ed",
        padding: 10,
        color: textColor,
        borderRadius: 5,
        fontSize: 15,
    }
})

export default Forget;