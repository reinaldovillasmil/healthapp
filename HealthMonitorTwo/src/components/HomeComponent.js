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
          <View style={{paddingVertical:90, paddingLeft: 20}}>
            <Animatable.Image
              animation="bounceIn"
              duration={3000}
              source={require('HealthMonitorTwo/src/asset/logo3.png')}
              style={styles.logo}
              reziseMode={"stretch"}/>
          </View>
          <View style ={{flexDirection: 'column', paddingTop: 130, paddingLeft: 10}}>
            <View style={{alignItems: 'flex-end', justifyContent: 'center'}}>
              <Text style={{fontSize:40, color: 'white',fontWeight: 'bold'}}>Health Portal</Text>
            </View>

          </View>
        </View>

        <Animatable.View
        style={styles.footer}
        animation="fadeInUpBig"
        duration={1500}
        >




        <View style={{flexDirection: 'row', paddingTop: 20}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("MedicationScreen")}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Animatable.Image
                animation="bounceIn"
                duration={2200}
                source={require('HealthMonitorTwo/src/asset/meds.png')}
                style={styles.logo2}
                reziseMode={"stretch"}/>
              <Text>Medication</Text>
          </View>
        </TouchableOpacity>


        <View style={{paddingHorizontal:20}}></View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate("VitalsScreen")}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Animatable.Image
                  animation="bounceIn"
                  duration={2200}
                  source={require('HealthMonitorTwo/src/asset/hello.png')}
                  style={styles.logo2}
                  reziseMode={"stretch"}/>
                <Text>Vitals</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{paddingVertical:20}}></View>

        <View style={{flexDirection: 'row'}}>

          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <Animatable.Image
            animation="bounceIn"
            style={styles.logo2}
            source={require('HealthMonitorTwo/src/asset/fever.png')}
            duration={2200}
            />
          <Text>Symptom Tracker</Text>
        </View>

          <View style={{paddingHorizontal:20}}></View>

            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Animatable.Image
              animation="bounceIn"
              style={styles.logo2}
              source={require('HealthMonitorTwo/src/asset/news.png')}
              duration={2200}
              />
            <Text>News</Text>
          </View>

        </View>

        <View style={{paddingVertical:20}}></View>

          <View style={{flexDirection: 'row', paddingTop: 20}}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("AccountScreen")}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
                <Animatable.Image
                  animation="bounceIn"
                  duration={2200}
                  source={require('HealthMonitorTwo/src/asset/user.png')}
                  style={styles.logo2}
                  reziseMode={"stretch"}/>
                <Text>Profile</Text>
            </View>
          </TouchableOpacity>


          <View style={{paddingHorizontal:20}}></View>

          <TouchableOpacity onPress={() => this.props.navigation.navigate("AccountScreen")}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Animatable.Image
                animation="bounceIn"
                duration={2200}
                source={require('HealthMonitorTwo/src/asset/settings.png')}
                style={styles.logo2}
                reziseMode={"stretch"}/>
              <Text>Settings</Text>
          </View>
          </TouchableOpacity>


          </View>





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
    flex: 3.75,
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical: 20,
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
  }
});
