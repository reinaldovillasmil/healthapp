import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  TouchableOpacity
} from "react-native";
import {CalendarList} from 'react-native-calendars';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default class HomeComponent extends React.Component{



  render(){
    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <View style={{paddingVertical:50}}>
            <Animatable.Image
              animation="bounceIn"
              duration={3000}
              source={require('HealthMonitorTwo/src/asset/hello.png')}
              style={styles.logo2}
              reziseMode={"stretch"}/>
          </View>
          <View style ={{flexDirection: 'column', paddingTop: 90, paddingLeft: 5}}>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize:40, color: 'white',fontWeight: 'bold'}}>Vitals Screen</Text>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize:16, color: 'white',fontWeight: 'bold'}}>Make a selection below.</Text>
            </View>
          </View>
        </View>

        <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={1500}
        >
        <View style={{flex:1}}>
          <CalendarList
            pastScrollRange={50}
            futureScrollRange={50}
            scrollEnabled={true}
            horizontal={true}
            showScrollIndicator={true}
            onDayPress={(day) => {console.log('selected day', day)}}
            />
        </View>

        <View style={{flex: 1, paddingTop: 40, width: '100%'}}>

          <View style={{alignItems: 'flex-end', paddingVertical:20}}>
            <Text style={{color:'#05375a', fontStyle: 'italic'}}>*Ideal Weight: 165</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight:'bold', fontSize:20, color: '#05375a'}}>Weight:</Text>
            <View style={{paddingHorizontal: 5}}></View>
            <TextInput
              style={styles.textInput}
               placeholder="Enter your weight for specified date."
            />
          </View>

          <View style={{paddingVertical: 15}}></View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight:'bold', fontSize:20, color: '#05375a'}}>Pulse:</Text>
            <View style={{paddingHorizontal: 5}}></View>
            <TextInput
              style={styles.textInput}
               placeholder="Enter your weight for specified date."
            />
          </View>

          <View style={{paddingVertical: 15}}></View>

          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight:'bold', fontSize:20, color: '#05375a'}}>Pressure:</Text>
            <View style={{paddingHorizontal: 5}}></View>
            <TextInput
              style={styles.textInput}
               placeholder="Blood Pressure for specified date."
            />
          </View>

          <View style={{alignItems: 'flex-end', paddingTop:20}}>
            <View style={{flexDirection: 'row'}}>
            <Text style={{color:'#05375a', fontStyle: 'italic'}}>Initals:</Text>
            <TextInput
                style={{width:'25%', paddingLeft:3, backgroundColor: 'white'}}
                 placeholder="Initials"
            />
            </View>
          </View>



          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <TouchableOpacity
          style={[styles.signIn,{
            borderColor:'#4dc2f8',
            borderWidth:1,
            marginTop:15
          }]}>

            <Text style={[styles.submit2],{color :'#4dc2f8'}}>
            Submit
            </Text>
          </TouchableOpacity>
          </View>


        </View>

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
    flex: 3.9,
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical: 50,
    paddingHorizontal:50,
    alignItems: 'flex-start'
  },
  logo2: {
    width: 140,
    height: 140
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
  }
});
