
import React, {Component, useState} from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';
import LoginForm from './LoginForm';

<TextInput placeholder="Your email here." style={styles.textInput}
  onChangeText={(text)=>this.textInputChange(text)}
/>

// class Login extends Component {
//     render(){}
//     return(
//       <View style={styles.middle}>
//         <Text style={styles.bigBlue}>Sign In Page</Text>
//         <View>
//           <View style={styles.pad}></View>
//           <LoginForm/>
//         </View>
//       </View>
//     );
//   }
// }

// const Login = () => {
//   const [enteredUsername, setEnteredUsername] = useState(' ');
//   const [enteredPass, setEnteredPass] = useState(' ');
//
//
//
//   const inputHandlerUser = (text) =>{
//     setEnteredUsername(text)
//     console.log("fsdfdsfdsf" + enteredUsername);
//   }
//
//   const inputHandlerPass = (text) =>{
//     setEnteredPass(text)
//   }
//
//   const createAccount = () => {
//     // console.log("Entered User is:" + enteredUsername + "Password: "+ enteredPass);
//     // setEnteredUsername('')
//     console.log("howdy" + setEnteredUsername);
//   }
//
//   async function  registerUser(){
//     try {
//       let res = await fetch(
//         'http://localhost:3000/posts', {
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({
//             "username":enteredUsername,
//             "password":enteredPass
//           }),
//         }
//       );
//     let json = await res.json();
//     console.log(json);
//     return json.data;
//     }
//     catch (error){
//     console.error(error);
//     }
//   }
//
//   async function getData(){
//     try {
//       let res = await fetch(
//         'http://localhost:3000/posts',
//       );
//     let json = await res.json();
//     console.log(json);
//     return json.data;
//     }
//     catch (error){
//     console.error(error);
//     }
//   }
//
//   return(
//     <View style={styles.middle}>
//       <TextInput style={styles.input}
//       placeholder="Username"
//       onChangeText={this.inputHandlerUser}
//       value={this.enteredUsername}
//       />
//       <View style={styles.pad}>
//       </View>
//       <TextInput style={styles.input}
//       placeholder="Password"
//       onChangeText={this.inputHandlerPass}
//       value={this.enteredPass}
//       />
//       <View style={styles.leftButton}>
//         <Button title='Create Account'
//         onPress={() => this.props.navigation.navigate('Details')}
//         />
//         <Button title='Sign in'
//         onPress={getData}
//         />
//       </View>
//     </View>
//   );
// }
// function printthis(){
//   const [enteredUsername, setEnteredUsername] = useState(' ');
//   const [enteredPass, setEnteredPass] = useState(' ');
//
//   inputHandlerUser = (text) =>{
//     setEnteredUsername(text)
//
//   }
//
//   inputHandlerPass = (text) =>{
//     setEnteredPass(text)
//   }
//
//   printall = () =>{
//     console.log("ddsfds");
//   }
//
// }

class Login extends Component{

  var x = () => {
    const hello = "HELLO STRING HERE"
    const [enteredUsername, setEnteredUsername] = useState(' ');
    const [enteredPass, setEnteredPass] = useState(' ');
    return hello
  }





  inputHandlerUser = (text) =>{
    console.log(this.x())
  }

  inputHandlerPass = (text) =>{
    // setEnteredPass(text)
  }

  createAccount = () => {
    // console.log("Entered User is:" + enteredUsername + "Password: "+ enteredPass);
    setEnteredUsername('')
    console.log("howdy");
  }

  async registerUser(){
    try {
      let res = await fetch(
        'http://localhost:3000/posts', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "username":this.enteredUsername,
            "password":this.enteredPass
          }),
        }
      );
    let json = await res.json();
    console.log(json);
    return json.data;
    }
    catch (error){
    console.error(error);
    }
  }

  async getData(){
    try {
      let res = await fetch(
        'http://localhost:3000/posts',
      );
    let json = await res.json();
    console.log(json);
    return json.data;
    }
    catch (error){
    console.error(error);
    }
  }

  render(){
    return(
          <View style={styles.middle}>
            <TextInput style={styles.input}
            placeholder="Username"
            onChangeText={this.inputHandlerUser}
            value={this.enteredUsername}
            />
            <View style={styles.pad}>
            </View>
            <TextInput style={styles.input}
            placeholder="Password"
            onChangeText={this.inputHandlerPass}
            value={this.enteredPass}
            />
            <View style={styles.leftButton}>
              <Button title='Create Account'
              onPress={() => this.props.navigation.navigate('Details')}
              />
              <Button title='Sign in'
              onPress={this.getData}
              />
            </View>
          </View>
        );

  }
}

const styles = StyleSheet.create({
  middle:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    backgroundColor: 'rgba(100,100,100,0.3)',
    borderRadius: 10,
    width: 250,
    height: 40,
    padding: 5
  },
  pad: {
    padding: 4
  },
  leftButton: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});



export default Login;
