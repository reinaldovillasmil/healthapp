import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
  Dimensions,
  StatusBar
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import TabBar from './TabBar.js';
import Modal from 'react-native-modal';

const DATA = [
  {
    id: '1fgsdg',
    title: 'Dizziness',
    amount:'1'
  },
  {
    id: '2gfsdgf',
    title: 'Pain',
    amount:'2'
  },
  {
    id: '3gbghd',
    title: 'Shortness Of Breathe',
    amount:'3'
  },
    {
    id: '4hbda',
    title: 'Fast Heart Rate',
    amount:'2'
  },
  {
    id: '5hethter',
    title: 'Slow Heart Rate',
    amount:'1'
  },
  {
    id: '6afrgww',
    title: 'Headache',
    amount:'420'
  },
];

export default class SymptomComponent extends React.Component{

  constructor(props){
    super(props);
    this.state={
      isModalVisible: false,
      itemClicked: ''
    }
  }




  toggleModal = (item) => {
    itemClicked = item.title
    console.log(itemClicked)
    this.setState({isModalVisible: !this.state.isModalVisible});
  };


    closeModal = () => {
      this.setState({isModalVisible: !this.state.isModalVisible});
      console.log("The item you have chosen is" + itemClicked)

    }


  render(){
    return(
    <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <View style={styles.header}>
          <View style={{flex:.35, justifyContent:'center', alignItems:'center', paddingTop:30}}>
            <Animatable.Image
              animation="bounceIn"
              duration={3000}
              source={require('HealthMonitorTwo/src/asset/fever.png')}
              style={styles.logo2}
              reziseMode={"stretch"}/>
          </View>
          <View style={{flex:.7, justifyContent:'flex-end',alignItems:'flex-start',paddingRight:15}}>
            <Text style={{fontSize:46, color: 'white',fontWeight: 'bold'}}>Symptoms</Text>
          </View>
        </View>

        <Animatable.View
          animation="fadeInUpBig"
          style={styles.footer}>

          <View style={{flex:.5, flexDirection:'row', justifyContent:'space-around', paddingBottom:20}}>
            <View style={{flex:.80,justifyContent:'center'}}>
              <Text style={{fontSize:32, fontWeight:'bold'}}>Symptoms List</Text>
            </View>
            <View style={{flex:.20, justifyContent:'center', alignItems:'center'}}>

            </View>

          </View>

          <View style={{flex:3.75}}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => {this.toggleModal(item)}}>
                  <View style={styles.item}>
                    <View style={{flex:.8, flexDirection:'column'}}>
                        <Text style={{color:'white', fontSize:24,fontWeight:'bold'}}>{item.title}</Text>
                      <Modal isVisible={this.state.isModalVisible}>
                        <View>
                          <Text style={{color:'white', fontWeight: 'bold'}}> Symptom Value</Text>
                          <TextInput style={{backgroundColor:'white'}}></TextInput>
                        </View>
                          <Button title="Add" onPress={this.closeModal}/>
                      </Modal>
                    </View>

                    <View style={{flex:.2}}>
                      <Animatable.Image
                        animation="bounceIn"
                        duration={3000}
                        source={require('HealthMonitorTwo/src/asset/symptomsicon.png')}
                        style={{height:50, width:50}}
                        reziseMode={"stretch"}/>
                    </View>
                  </View>
                </TouchableOpacity>

                )}
                keyExtractor={item => item.id}
              />
          </View>


        <View style={{paddingVertical:30}}></View>
        </Animatable.View>
        <TabBar></TabBar>

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
    flex:1,
    flexDirection: "row"
  },
  footer: {
    flex: 4.5,
    backgroundColor: 'white',
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    paddingVertical: 30,
    paddingHorizontal:20,
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  logo2: {
    width: 100,
    height: 100
  },
  logo3: {
    width: 30,
    height: 30,
  },
  logo4: {
    width: 35,
    height: 35,
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
  item: {
    backgroundColor: '#05375a',
    paddingVertical:20,
    paddingHorizontal:10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 15,
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
  },
});
