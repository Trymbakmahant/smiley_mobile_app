import * as React from "react";
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView} from "react-native";
import { AuthContext } from "../navigator/authpro";

function Register({navigation}) {
  const[email, setEmail] = React.useState();
  const[password, setPassword] = React.useState();
  const[userName, setUserName] = React.useState();

  const {register} = React.useContext(AuthContext)

    return(
      <ScrollView  style={styles.detailbox}>
          <Text style={styles.login}>WELCOME</Text>
          <Text style={styles.compName}>Smiley Co.</Text>
          <Image source={require('../img/logo.png')} style={styles.image}></Image>
          <View style={styles.loginDetails}>
            <Text style={styles.field}>YOUR NAME</Text>
            <TextInput placeholder="ENTER YOUR FULL NAME" style={styles.input} labelValue={userName} onChangeText={(userName) => setUserName(userName)} autoCorrect={false} autoCapitalize="none"></TextInput>
            <Text style={styles.field}>YOUR EMAIL</Text>
            <TextInput style={styles.input} labelValue={email} onChangeText={(userEmail) => setEmail(userEmail)} keyboardType="email-address" autoCorrect={false} autoCapitalize="none" placeholder="ENTER YOUR EMAIL ADDRESS"></TextInput>
            <Text style={styles.field}>PASSWORD</Text>
            <TextInput placeholder="CREATE A PASSWORD" style={styles.input} labelValue={password} onChangeText={(userPassword) => setPassword(userPassword)} autoCorrect={false} autoCapitalize="none"></TextInput>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText} onPress={() => register(email,password)}>REGISTER</Text>
          </TouchableOpacity>
          <Text style={styles.acc} onPress={() => navigation.navigate("Login")}>ALREADY REGISTERED</Text>
      </ScrollView>
    )
  
  
}

const styles = StyleSheet.create({
  detailbox:{ 
    height:"100%",
    width:"100%",
    position:'absolute',
    bottom:0,
    backgroundColor:"#fff"
  },

  login:{
    alignSelf:'center',
    marginTop:55,
    fontSize:40,
    fontWeight:'bold',
    color:"#7C7C7C",
  },

  image:{
    alignSelf:'center',
    height:80,
    width:180,
    marginTop:'5%'
  },

  compName:{
    alignSelf:'center',
    fontSize:25
  },

  field:{
    fontSize:20,
    marginLeft:40,
    color:"#0AA1DD",
    marginBottom:8
  },

  input:{
    backgroundColor:"#fff",
    width:"85%",
    height:65,
    alignSelf:'center',
    borderRadius:20,
    fontSize:15,
    padding:15,
    marginBottom:55,
    elevation:8,
    shadowColor:"#747474"
  },

  loginDetails:{
    marginTop:"8%"
  },

  button:{
    height:75,
    width:"50%",
    alignSelf:'center',
    borderRadius:25,
    backgroundColor:"#0AA1DD",
    elevation:15,
    shadowColor:"#027bab",
    marginTop:25,
    justifyContent:'center',
    alignItems:'center'
  },

  btnText:{
    fontSize:35,
    color:"#fff",
    fontWeight:'500'
  },

  acc:{
    alignSelf:'center',
    fontSize:25,
    marginTop:35,
    fontWeight:"400"
  },

  forPwa:{
    fontSize:20,
    alignSelf:'center',
    marginTop:55,
    color:"#a3a3a3"
  }
})

export default Register;