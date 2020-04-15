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




export default class SignUpComponent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      check_textInputChange: false,
      password:'',
      secureTextEntry: true,
      email: '',
      passcode: ''
    }
  }

    async registerUser(){
      try {
        let res = await fetch(
          'http://localhost:3000/user/register', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "username":this.email,
              "password":this.passcode
            }),
          }
        );
      }
      catch (error){
      console.error(error);
      }
    }

  textInputChange(value){
    this.email = value
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
          <Text style={styles.text_header}>Sign up below!</Text>
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
            <TextInput placeholder="Your email here." style={styles.textInput}
              onChangeText={(text)=>this.textInputChange(text)}
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
              onChangeText={(text) => this.passwordInputChange(text)}
            />
            :
            <TextInput placeholder="Your password here." style={styles.textInput}
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

          <Text style={styles.text_footer,{marginTop: 45}}>PASSWORD</Text>
          <View style={styles.action}>
            <FontAwesome
              name="lock"
              color='#05375a'
              size={20}
            />
          {this.state.secureTextEntry ?
            <TextInput placeholder="Confirm password here." style={styles.textInput}
              secureTextEntry={true}
              onChangeText={(text) =>this.setState({
                password:text
              })}
            />
            :
            <TextInput placeholder="Confirm password here." style={styles.textInput}
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


          <TouchableOpacity
            onPress={() => this.registerUser()}
          >
            <View style={styles.button}>
              <LinearGradient colors={['#4c669f','#3b5998']}
              style={styles.signIn}>
                <Text style={styles.submit}>Sign Up</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
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
