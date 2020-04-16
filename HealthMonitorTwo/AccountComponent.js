import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';

export default class SignInComponent extends React.Component{


  render(){
    return(
      <View style={styles.container}>

        <View style={styles.header}>
        <View style={{paddingVertical:50, paddingLeft: 10}}>
          <Animatable.Image
            animation="bounceIn"
            duration={3000}
            source={require('HealthMonitorTwo/src/asset/user.png')}
            style={styles.logo2}
            reziseMode={"stretch"}/>
        </View>
        <View style ={{flexDirection: 'column', paddingTop: 110, paddingLeft: 20}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:52, color: 'white',fontWeight: 'bold'}}>Account</Text>
          </View>
        </View>

        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>

          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Animatable.View
              animation="bounceIn"
              duration={2200}
              >
              <View style={styles.BigRectangle}>
              <View style={{alignItems: 'center'}}>
                <View style={{paddingVertical:4}}>
                </View>
                <Text style={{fontSize:18, color: 'black', fontWeight:'bold'}}> Health Information</Text>
              </View>
              <View style={{alignItems: 'flex-start', padding: 12}}>
                <Text style={{fontSize:14, color: 'black', fontWeight:'bold'}}> Patient: Ullyses S. Grant</Text>
                <View style={{paddingVertical:4}}></View>
                <Text style={{fontSize:14, fontWeight:'bold'}}> Primary Doctor: Robert J. Martin Md </Text>
                <View style={{paddingVertical:4}}></View>
                <Text style={{fontSize:14, fontWeight:'bold'}}> Healthcare: FloridaBlue </Text>
                <View style={{paddingVertical:4}}></View>
                <Text style={{fontSize:14, fontWeight:'bold'}}> Medications: Metroplol, Aspirin, hydroxychloroquine </Text>
                <View style={{paddingVertical:4}}></View>
                <Text style={{fontSize:14, fontWeight:'bold'}}> Next Visit: June 3rd, 2020 </Text>
              </View>
              </View>
              </Animatable.View>
              </View>

              <View style={{paddingVertical:10}}></View>


              <View style={{flex:1, flexDirection:'row', paddingVertical: 40, borderWidth: 5, borderTopLeftRadius:30,
              borderTopRightRadius:30,
              borderBottomRightRadius:30,
              borderBottomLeftRadius:30}}>

                <View style={{flex:.80, backgroundColor:'white', paddingLeft:6}}>
                  <Text style={{fontSize:30}}> Account Setting</Text>
                  <Text style={{fontSize:30}}> Privacy & Safety</Text>
                  <View style={{paddingVertical:10}}></View>
                  <Text style={{fontSize:30}}> Report a bug</Text>
                  <View style={{paddingVertical:10}}></View>
                  <Text style={{fontSize:30}}> Notifications</Text>
                  <View style={{paddingVertical:10}}></View>
                  <Text style={{fontSize:30}}> F.A.Qs</Text>
                  <View style={{paddingVertical:20}}></View>
                  <Text style={{fontSize:30}}> Log Out</Text>



                  </View>

                <View style={{flex:.2, backgroundColor:'white'}}>
                  <Animatable.Image
                    animation="bounceIn"
                    duration={3000}
                    source={require('HealthMonitorTwo/src/asset/settings.png')}
                    style={styles.logo3}
                    reziseMode={"stretch"}/>
                    <View style={{paddingVertical:10}}></View>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/privacy.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                    <View style={{paddingVertical:7}}></View>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/bug.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                    <View style={{paddingVertical:7}}></View>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/notification.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                      <View style={{paddingVertical:7}}></View>
                      <Animatable.Image
                        animation="bounceIn"
                        duration={3000}
                        source={require('HealthMonitorTwo/src/asset/FAQ.png')}
                        style={styles.logo3}
                        reziseMode={"stretch"}/>
                      <View style={{paddingVertical:10}}></View>
                      <Animatable.Image
                        animation="bounceIn"
                        duration={3000}
                        source={require('HealthMonitorTwo/src/asset/logout.png')}
                        style={styles.logo3}
                        reziseMode={"stretch"}/>

                </View>

              </View>

            </Animatable.View>

      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#05375a'
  },
  header: {
    flex:1.2,
    flexDirection: "row"
  },
  footer: {
    flex: 4,
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical: 20,
    paddingHorizontal:30,
  },
  logo2: {
    width: 130,
    height: 130
  },
  logo3: {
    width: 40,
    height: 40
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  BigRectangle: {
    width: 380,
    height: 200,
    backgroundColor:'white',
    borderColor: 'black',
    borderWidth: 5,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  }
});
