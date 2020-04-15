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

export default class HomeComponent extends React.Component{



  render(){
    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <View style={{paddingVertical:70, paddingLeft: 10}}>
            <Animatable.Image
              animation="bounceIn"
              duration={3000}
              source={require('HealthMonitorTwo/src/asset/logo3.png')}
              style={styles.logo}
              reziseMode={"stretch"}/>
          </View>
          <View style={{paddingHorizontal: 10, alignItems: 'flex-end', justifyContent: 'center'}}>
            <Text style={{fontSize:40, color: 'white',fontWeight: 'bold'}}>Health Portal</Text>
          </View>
        </View>

        <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={1500}
        >
        <View style={{flexDirection: 'row'}}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Animatable.Image
                animation="bounceIn"
                duration={2200}
                source={require('HealthMonitorTwo/src/asset/meds.png')}
                style={styles.logo2}
                reziseMode={"stretch"}/>
              <Text>Medication</Text>
          </View>

          <View style={{paddingHorizontal:20}}></View>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Animatable.Image
                animation="bounceIn"
                duration={2200}
                source={require('HealthMonitorTwo/src/asset/256.png')}
                style={styles.logo2}
                reziseMode={"stretch"}/>
              <Text>Vitals</Text>
          </View>
        </View>

        <View style={{paddingVertical:20}}></View>

        <View style={{flexDirection: 'row'}}>
          <Animatable.View
          animation="bounceIn"
          style={styles.SquareShape}
          duration={2200}
          ></Animatable.View>
          <View style={{paddingHorizontal:20}}></View>
          <Animatable.View
          animation="bounceIn"
          style={styles.SquareShape}
          duration={2200}
          ></Animatable.View>
        </View>

        <View style={{paddingVertical:20}}></View>


        <Animatable.View
        animation="bounceIn"
        duration={2200}
        >
        <View style={styles.BigRectangle}
        >
        <View style={{alignItems: 'center'}}>
          <View style={{paddingVertical:4}}></View>
          <Text style={{fontSize:18, color: 'white', fontWeight:'bold'}}> Health Information</Text>
        </View>
        <View style={{alignItems: 'flex-start', padding: 12}}>
          <Text style={{fontSize:14, color: 'white', fontWeight:'bold'}}> Patient: Ullyses S. Grant</Text>
          <View style={{paddingVertical:4}}></View>
          <Text style={{fontSize:14, color: 'white', fontWeight:'bold'}}> Primary Doctor: Robert J. Martin Md </Text>
          <View style={{paddingVertical:4}}></View>
          <Text style={{fontSize:14, color:'white', fontWeight:'bold'}}> Healthcare: FloridaBlue </Text>
          <View style={{paddingVertical:4}}></View>
          <Text style={{fontSize:14, color:'white', fontWeight:'bold'}}> Medications: Metroplol, Aspirin, hydroxychloroquine </Text>
          <View style={{paddingVertical:4}}></View>
          <Text style={{fontSize:14, color:'white', fontWeight:'bold'}}> Next Visit: June 3rd, 2020 </Text>



        </View>
        </View>
        </Animatable.View>



        </Animatable.View>

    </View>
    )
  }
}

const {height} = Dimensions.get("screen");
const height_logo = height * .4 * .3;
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
    flex: 3,
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical: 50,
    paddingHorizontal:50,
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  logo2: {
    width: 140,
    height: 140
  },
  SquareShape:{
    width:140,
    height: 140,
    backgroundColor:'#05375a',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  },
  BigRectangle: {
    width: 320,
    height: 200,
    backgroundColor:'#05375a',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  }
});
