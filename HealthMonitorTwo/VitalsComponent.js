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
    backgroundColor:'white',
    borderColor: '#05375a',
    borderWidth: 5,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    borderBottomRightRadius:30,
    borderBottomLeftRadius:30
  }
});
