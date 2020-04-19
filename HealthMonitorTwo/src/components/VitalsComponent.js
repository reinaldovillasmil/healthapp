import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import {CalendarList} from 'react-native-calendars';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import CalendarComponent from "./CalendarComponent"

import TabBar from './TabBar.js';




export default class HomeComponent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      showChild: 'true'
    };
  }

  closeChild = () => {
    this.setState({
      showChild: 'false'
    });
  }

  render(){
    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <View style={{paddingVertical:40}}>
            <Animatable.Image
              animation="bounceIn"
              duration={3000}
              source={require('HealthMonitorTwo/src/asset/hello.png')}
              style={styles.logo2}
              reziseMode={"stretch"}/>
          </View>
          <View style ={{flexDirection: 'column', paddingTop: 90, paddingLeft: 35}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize:54, color: 'white',fontWeight: 'bold'}}>Vitals</Text>
            </View>

          </View>
        </View>

        <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={1500}
        >


        <View style={{flex:.25, alignItems: 'center', flexDirection:'row', justifyContent: 'center'}}>
          <View>
            <Animatable.Image
              animation="bounceIn"
              duration={3000}
              source={require('HealthMonitorTwo/src/asset/calendarsolid.png')}
              style={styles.logo3}
              reziseMode={"stretch"}/>
          </View>
          <CalendarComponent></CalendarComponent>
        </View>





        <View style={{flex:1.1, flexDirection: 'row'}}>

          <View style={{flexDirection: 'column', alignItems: 'center', paddingVertical:20}}>

              <Animatable.Image
                animation="bounceIn"
                duration={2200}
                source={require('HealthMonitorTwo/src/asset/slowheartrate.png')}
                style={styles.icons}
                reziseMode={"stretch"}/>
              <View style={{paddingVertical: 4}}></View>
              <Text style={styles.iconText}>Slow Heart Rate</Text>

              <View style={{paddingBottom:30}}></View>

                <Animatable.Image
                  animation="bounceIn"
                  duration={2200}
                  source={require('HealthMonitorTwo/src/asset/heartrate.png')}
                  style={styles.icons}
                  reziseMode={"stretch"}/>
                <View style={{paddingVertical: 4}}></View>
                <Text style={styles.iconText}>Fast Heart Rate</Text>

          </View>

          <View style={{paddingHorizontal:10}}></View>

          <View style={{flexDirection: 'column', alignItems: 'center', paddingVertical:20}}>
              <Animatable.Image
                animation="bounceIn"
                duration={2200}
                source={require('HealthMonitorTwo/src/asset/chestpressure.png')}
                style={styles.icons}
                reziseMode={"stretch"}/>
              <View style={{paddingVertical: 4}}></View>
              <Text style={styles.iconText}>Chest Pressure</Text>

              <View style={{paddingBottom:30}}></View>

                <Animatable.Image
                  animation="bounceIn"
                  duration={2200}
                  source={require('HealthMonitorTwo/src/asset/headache128.png')}
                  style={styles.icons}
                  reziseMode={"stretch"}/>
                <View style={{paddingVertical: 4}}></View>
                <Text style={styles.iconText}>Headache</Text>

          </View>

          <View style={{paddingHorizontal:10}}></View>

          <View style={{flexDirection: 'column', alignItems: 'center' , paddingVertical:20}}>
              <Animatable.Image
                animation="bounceIn"
                duration={2200}
                source={require('HealthMonitorTwo/src/asset/shortnessofbreathe.png')}
                style={styles.icons}
                reziseMode={"stretch"}/>
              <View style={{paddingVertical: 4}}></View>
              <Text style={styles.iconText}>Shortness Breathe</Text>

              <View style={{paddingBottom:30}}></View>

                <Animatable.Image
                  animation="bounceIn"
                  duration={2200}
                  source={require('HealthMonitorTwo/src/asset/pain.png')}
                  style={styles.icons}
                  reziseMode={"stretch"}/>
                <View style={{paddingVertical: 4}}></View>
                <Text style={styles.iconText}>Pain</Text>

          </View>

          <View style={{paddingHorizontal:10}}></View>

          <View style={{flexDirection: 'column', alignItems: 'center' , paddingVertical:20}}>
              <Animatable.Image
                animation="bounceIn"
                duration={2200}
                source={require('HealthMonitorTwo/src/asset/dizzy.png')}
                style={styles.icons}
                reziseMode={"stretch"}/>
              <View style={{paddingVertical: 4}}></View>
              <Text style={styles.iconText}>Dizzy</Text>

              <View style={{paddingBottom:30}}></View>

                <Animatable.Image
                  animation="bounceIn"
                  duration={2200}
                  source={require('HealthMonitorTwo/src/asset/fatigue.png')}
                  style={styles.icons}
                  reziseMode={"stretch"}/>
                <View style={{paddingVertical: 4}}></View>
                <Text style={styles.iconText}>Fatigue</Text>

          </View>

        </View>



        <View style={{flex: 1.6, paddingTop: 10, width: '100%'}}>

          <View style={{alignItems: 'flex-end', paddingVertical:20}}>
            <Text style={{color:'black', fontStyle: 'italic'}}>*Ideal Weight: 165</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight:'bold', fontSize:20, color: 'black'}}>Weight:</Text>
            <View style={{paddingHorizontal: 5}}></View>
            <TextInput
              style={styles.textInput}
               placeholder="Enter your weight for specified date."
            />
          </View>

          <View style={{paddingVertical: 15}}></View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight:'bold', fontSize:20, color: 'black'}}>Pulse:</Text>
            <View style={{paddingHorizontal: 5}}></View>
            <TextInput
              style={styles.textInput}
               placeholder="Enter your weight for specified date."
            />
          </View>

          <View style={{paddingVertical: 15}}></View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight:'bold', fontSize:20, color: 'black'}}>Pressure:</Text>
            <View style={{paddingHorizontal: 5}}></View>
            <TextInput
              style={styles.textInput}
               placeholder="Blood Pressure for specified date."
            />
          </View>

          <View style={{alignItems: 'flex-end', paddingTop:20}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'black', fontStyle: 'italic'}}>Initals:</Text>
            <TextInput
                style={{width:'25%', paddingLeft:3, backgroundColor: 'white'}}
                 placeholder="Initials"
            />
            </View>
          </View>



          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
          style={[styles.signIn,{
            borderColor:'black',
            borderWidth:1,
            marginTop:15
          }]}>

            <Text style={[styles.submit2],{color :'black'}}>
            Submit
            </Text>
          </TouchableOpacity>
          </View>


        </View>

        <TabBar></TabBar>

        </Animatable.View>

    </View>
    )
  }
}

const {height} = Dimensions.get("screen");
const height_logo = height * .3 * .3;
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
    flex: 4.5,
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical: 20,
    paddingHorizontal:30,
  },
  logo2: {
    width: 140,
    height: 140
  },
  logo3: {
    width: 50,
    height: 50
  },
  textInput:{
    textAlign:'right'

  },
  button:{
    alignItems:'center',
    marginTop:20
  },
  signIn:{
    width: '80%',
    height: 50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
  },
  icons: {
    width: 65,
    height: 65,
    paddingVertical: 20
  },
  iconText: {
    fontSize: 9,
    fontWeight: 'bold'
  }
});
