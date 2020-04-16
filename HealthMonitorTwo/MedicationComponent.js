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


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4a',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fr63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d772',
    title: 'Third Item',
  },
];

export default class SignInComponent extends React.Component{


  render(){
    return(
      <View style={styles.container}>

        <View style={styles.header}>
        <View style={{paddingVertical:50, paddingLeft: 10}}>
          <Animatable.Image
            animation="bounceIn"
            duration={3000}
            source={require('HealthMonitorTwo/src/asset/meds.png')}
            style={styles.logo2}
            reziseMode={"stretch"}/>
        </View>
        <View style ={{flexDirection: 'column', paddingTop: 110, paddingLeft: 10}}>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize:46, color: 'white',fontWeight: 'bold'}}>Medication</Text>
          </View>
        </View>
        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>

          <View style={{flex:1}}>

          </View>
          <View style={{flex:.25, backgroundColor: 'black'}}></View>
          <View style={{flex:3, backgroundColor: 'blue'}}></View>


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
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
