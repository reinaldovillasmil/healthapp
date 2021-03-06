import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

import AsyncStorage from '@react-native-community/async-storage';




export default class SignInComponent extends React.Component{

  constructor(props){
    super(props);
    this.checkForSession();
    var token: ''
    this.state={
      check_textInputChange: false,
      password:'',
      passcode: '',
      username: '',
      secureTextEntry: true,
    }
  }


  async getUserData(){
    try {
      let res = await fetch(
        'http://localhost:3000/user', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "username":this.username,
          }),
        }
      );
    let json = await res.json();
    console.log(json)
    if (json[0].token != null) {
      this.props.navigation.navigate("HomeScreen")
    }
    return json;
    }
    catch (error){
    console.error(error);
    }

  }

  checkForSession = async () => {
    try {
      const value = await AsyncStorage.getItem('username')
      if(value !== null) {
      // value previously stored
        this.props.navigation.navigate("HomeScreen")
        this.setState({username : value})
        console.log("yoooo" + value)
      }
    } catch(e) {
      // error reading value
      }
  }


  async validateUser(){
    // try {
    //   let res = await fetch(
    //     'http://localhost:3000/user/login', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         "username":this.username,
    //         "password":this.passcode
    //       }),
    //     }
    //   );
    //   let text = await res.text()
    //   const temp = await this.getUserData()
    //   await AsyncStorage.setItem('username', this.username)
    //
    // }
    // catch (error){
    // console.error(error);
    // }
     this.props.navigation.navigate("HomeScreen")

  }

  textInputChange(value){
    this.username = value;
    if(value.length !== 0){
      this.setState({
        check_textInputChange: true
      });
    }
    else{
      this.setState({
        check_textInputChange: false
      });
    }
  }

  passwordInputChange(value){
    this.passcode = value
    this.setState({
      password:value
    })

  }

  secureTextEntry(){
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    })
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.text_header}>Welcome, sign in below!</Text>
        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>
          <Text style={styles.text_footer}>E-MAIL</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color='#05375a'
              size={20}
            />
          <TextInput style={styles.textInput}
              onChangeText={(text)=>this.textInputChange(text)}
              value={this.username}
            />
          {this.state.check_textInputChange ?
            <Animatable.View
            animation="bounceIn">
              <Feather name="check-circle"
              color="green"
              size={20} />
          </Animatable.View>
        :null}
          </View>

          <Text style={styles.text_footer,{marginTop: 45}}>PASSWORD</Text>
          <View style={styles.action}>
            <FontAwesome
              name="lock"
              color='#05375a'
              size={20}
            />
          {this.state.secureTextEntry ?
            <TextInput placeholder="Your password here." style={styles.textInput}
              secureTextEntry={true}
              value={this.state.password}
              onChangeText={(text) =>this.passwordInputChange(text)}
            />
            :
            <TextInput placeholder="Your password here." style={styles.textInput}
              value={this.state.password}
              onChangeText={(text) =>this.setState({
                password:text
              })}
            />
          }

          <TouchableOpacity
            onPress={()=>this.secureTextEntry()}>
            {this.state.secureTextEntry ?
              <Feather name="eye-off"
              color="gray"
              size={20}
              />
            :
              <Feather name="eye"
              color="gray"
              size={20}
              />
            }
        </TouchableOpacity>

          </View>
          <Text style={{color:'#009bd1', marginTop:40}}> Forgot Password? </Text>


            <View style={styles.button}>
              <LinearGradient colors={['#4c669f','#3b5998']}
              style={styles.signIn}>
                <TouchableOpacity
                  onPress={()=>this.validateUser()}>
                  <Text style={styles.submit}>LOG IN</Text>
                </TouchableOpacity>
              </LinearGradient>


            <TouchableOpacity
            onPress={() => this.props.navigation.navigate("SignUpScreen")}
            style={[styles.signIn,{
              borderColor:'#4dc2f8',
              borderWidth:1,
              marginTop:15
            }]}>

              <Text style={[styles.submit2],{color :'#4dc2f8'}}>
              Sign Up
              </Text>

            </TouchableOpacity>

          </View>

        </Animatable.View>

      </View>
    )
  }
}




var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#05375a'
  },
  header:{
    flex:1,
    justifyContent:'flex-end',
    paddingHorizontal:20,
    paddingBottom:50,
    alignItems:'center'
  },
  footer:{
    flex:3,
    backgroundColor:'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingHorizontal:20,
    paddingVertical: 30
  },
  text_header:{
    color:'white',
    fontWeight:'bold',
    fontSize:32
  },
  text_footer:{
    color:'#05375a',
    fontSize:18
  },
  action:{
    flexDirection:'row',
    marginTop:10,
    borderBottomWidth:1,
    borderBottomColor:"#f2f2f2"
  },
  textInput:{
    flex: 1,
    paddingLeft: 10,
    color:'#05375a'
  },
  button:{
    alignItems:'center',
    marginTop:50
  },
  signIn:{
    width:'80%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    marginTop: 20
  },
  submit:{
    color:'white',
    fontWeight:'bold',
    fontSize:32
  },
  submit2:{
    fontWeight:'bold',
    fontSize:32
  }


});
