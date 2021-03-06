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
import TabBar from './TabBar.js';


export default class SignInComponent extends React.Component{


  render(){
    return(
      <View style={styles.container}>

        <View style={styles.header}>
        <View style={{paddingVertical:50, paddingLeft: 10}}>
          <Animatable.Image
            animation="bounceIn"
            duration={3000}
            source={require('HealthMonitorTwo/src/asset/settings.png')}
            style={styles.logo2}
            reziseMode={"stretch"}/>
        </View>
        <View style ={{flexDirection: 'column', paddingTop: 90, paddingLeft: 20}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:52, color: 'white',fontWeight: 'bold'}}>Settings</Text>
          </View>
        </View>

        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>



              <View style={{paddingVertical:10}}></View>


              <View style={{flexDirection:'column', paddingVertical: 10, borderWidth: 5, borderTopLeftRadius:30,
              borderTopRightRadius:30,
              borderBottomRightRadius:30,
              borderBottomLeftRadius:30}}>

              <TouchableOpacity onPress={() => this.props.navigation.navigate("MedicationScreen")}>
                  <View style={{flexDirection:'row',paddingVertical:15, borderBottomWidth:1, borderColor:'black', alignItems:'center', paddingHorizontal:10}}>
                  <Text style={{fontSize:30}}> Account Setting</Text>
                    <View style={{paddingLeft:70}}></View>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/settings.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                  </View>
                </TouchableOpacity>

                  <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingVertical:15, borderBottomWidth:1, borderColor:'black', alignItems:'center', paddingHorizontal:10}}>
                  <Text style={{fontSize:30}}> Privacy & Safety</Text>
                    <View style={{paddingLeft:65}}></View>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/privacy.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                  </View>
                </TouchableOpacity>


                  <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingVertical:15, borderBottomWidth:1, borderColor:'black', alignItems:'center', paddingHorizontal:10}}>
                  <Text style={{fontSize:30}}> Notifications</Text>
                    <View style={{paddingLeft:112}}></View>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/notification.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                  </View>
                </TouchableOpacity>


                  <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingVertical:15, borderBottomWidth:1, borderColor:'black', alignItems:'center', paddingHorizontal:10}}>
                  <Text style={{fontSize:30}}> Report a bug</Text>
                    <View style={{paddingLeft:110}}></View>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/bug.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                  </View>
                </TouchableOpacity>


                  <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingVertical:15, borderBottomWidth:1, borderColor:'black', alignItems:'center', paddingHorizontal:10}}>
                  <Text style={{fontSize:30}}> FAQ</Text>
                    <View style={{paddingLeft:215}}></View>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/FAQ.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                  </View>
                </TouchableOpacity>


                  <TouchableOpacity>
                  <View style={{flexDirection:'row',paddingVertical:15, alignItems:'flex-end', justifyContent:'flex-end', paddingHorizontal:10}}>
                  <Text style={{fontSize:30}}> Logout</Text>
                    <Animatable.Image
                      animation="bounceIn"
                      duration={3000}
                      source={require('HealthMonitorTwo/src/asset/logout.png')}
                      style={styles.logo3}
                      reziseMode={"stretch"}/>
                  </View>
                </TouchableOpacity>









              </View>
              <TabBar></TabBar>

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
    flex: 4.9,
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical: 20,
    paddingHorizontal:30,
  },
  logo2: {
    width: 100,
    height: 100
  },
  logo3: {
    width: 30,
    height: 30
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
