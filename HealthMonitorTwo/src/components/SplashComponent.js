import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity
} from "react-native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class SplashComponent extends React.Component{



  render(){
    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            duration={1500}
            source={require('HealthMonitorTwo/src/asset/logo3.png')}
            style={styles.logo}
            reziseMode={"stretch"}
          />
        </View>

        <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        >

          <Text style={styles.title}> See your health! </Text>
          <Text style={styles.text}> Sign in or create account below. </Text>
          <View style={styles.button}>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignUpScreen")}>
              <LinearGradient colors={['#4c669f','#3b5998']}
              style={styles.signIn}
              >
              <Text style={styles.signInText}>Sign up</Text>
              <MaterialIcons
              name="navigate-next"
              color="white"
              size={29}/>
              </LinearGradient>
            </TouchableOpacity>
            <View style={styles.spacer}></View>
          <TouchableOpacity
          onPress={() => this.props.navigation.navigate("SignInScreen")}>
              <LinearGradient colors={['#4c229f','#3c5998']}
              style={styles.signIn}
              >
              <Text style={styles.signInText}>Sign in</Text>
              <MaterialIcons
              name="navigate-next"
              color="white"
              size={29}/>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>

    </View>
    )
  }
}

const {height} = Dimensions.get("screen");
const height_logo = height * .7 * .4;
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#05375a'
  },
  header: {
    flex:2,
    justifyContent: 'center',
    alignItems:'center'
  },
  footer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical: 50,
    paddingHorizontal:50
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#05375a',
    fontWeight: 'bold',
    fontSize: 30,
    justifyContent:'center',
    alignItems: 'center',
    marginBottom: 10,

  },
  text: {
    color:"gray",
    paddingVertical: 7,
    paddingHorizontal:5
  },
  button: {
    alignItems: 'flex-end',
    marginTop:30,
    flexDirection: 'row',
  },
  signIn:{
    width: 150,
    height: 40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  signInText: {
    color:'white',
    fontWeight: 'bold'
  },
  spacer:{
    paddingHorizontal:10
  }
});
