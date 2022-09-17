import React from "react";
import { Image, Text, View, SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import  Icon  from "react-native-vector-icons/FontAwesome";

function Holdiay({navigation}){
    return(
        <SafeAreaView style={styles.leavePage}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.return}><Icon name="arrow-left" size={25} color="#0AA1DD" /> Back</Text>
                </TouchableOpacity>
                <Image source={require('../img/logo.png')} style={styles.image}/>
            </View>
            <View style={styles.detail}>
                <Text style={styles.detailTxt}>DATE</Text>
                <TextInput placeholder="DD/MM/YYYY" style={styles.input}></TextInput>
                <Text style={styles.detailTxt}>HOW MANY DAYS</Text>
                <TextInput placeholder="HOW MUCH LEAVE DO YOU WANT" style={styles.input}></TextInput>
                <Text style={styles.detailTxt}>REASON FOR LEAVE</Text>
                <TextInput placeholder="ENTER A VALID REASON FOR LEAVE" style={styles.reason} multiline numberOfLines={16} ></TextInput>
            </View>
            <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.submitTxt}>SUBMIT</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles= StyleSheet.create({
    leavePage:{
        height:"100%",
        width:"100%",
        backgroundColor:"#fff"
    },
    header:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:20,
        alignItems:'center'
    },
    image:{
        height:80,
        width:150
    },
    return:{
        fontSize:25,
        fontWeight:"500",
        color:"#0AA1DD"
    },
    detail:{
        padding:25,
        marginTop:25
    },
    detailTxt:{
        fontSize:18,
        color:"#0AA1DD",
        marginBottom:8
    }, 
    input:{
        backgroundColor:"#fff",
        paddingHorizontal:25,
        paddingVertical:15,
        borderRadius:15,
        elevation:8,
        shadowColor:"#747474",
        marginBottom:25,
        fontSize:15
    },
    reason:{
        backgroundColor:"#fff",
        paddingHorizontal:25,
        paddingVertical:15,
        borderRadius:15,
        elevation:8,
        shadowColor:"#747474",
        marginBottom:85,
        textAlignVertical:'top',
        fontSize:15
    },
    submitBtn:{
        backgroundColor:"#0AA1DD",
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:25,
        width:155,
        alignSelf:'center',
        elevation:8,
        shadowColor:'#0AA1DD',
        borderRadius:20
    },
    submitTxt:{
        color:"#fff",
        fontSize:25,
        fontWeight:'500',
    }
})

export default Holdiay;