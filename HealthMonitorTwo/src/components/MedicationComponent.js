import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Button
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import TabBar from './TabBar.js';
import Modal from 'react-native-modal';




const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Ibuprofen',
    amount:'1'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Plavix',
    amount:'2'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Metropolol',
    amount:'3'
  },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28b4a',
    title: 'Oxycodene',
    amount:'2'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97fr63',
    title: 'Acetominophen',
    amount:'1'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d772',
    title: 'Hydroxychloroquine',
    amount:'420'
  },
];



export default class SignInComponent extends React.Component{

  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  closeModal = () => {
    this.toggleModal()
    var med = {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28wba',
      title: 'Ibup',
      amount:'1'
    }
    console.log(med)
    DATA.push(med)
    console.log(DATA)
  }


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

          <View style={{flex:.5, flexDirection:'row', justifyContent:'space-around', paddingBottom:20}}>
            <View style={{flex:.80,justifyContent:'center'}}>
              <Text style={{fontSize:32, fontWeight:'bold'}}>Medications List</Text>
            </View>
            <View style={{flex:.20, justifyContent:'center', alignItems:'center'}}>
              <View>
              <TouchableOpacity onPress={this.toggleModal}>
              <Animatable.Image
                animation="bounceIn"
                duration={3000}
                source={require('HealthMonitorTwo/src/asset/add.png')}
                style={{height:50, width:50}}
                reziseMode={"stretch"}/>
            </TouchableOpacity>
                <Modal isVisible={this.state.isModalVisible}>
                  <View>
                    <Text style={{color:'white', fontWeight: 'bold'}}> Medication Name</Text>
                    <TextInput style={{backgroundColor:'white'}}></TextInput>
                  </View>
                    <Button title="Add" onPress={this.closeModal} />
                </Modal>
              </View>
            </View>

          </View>

          <View style={{flex:3.75}}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => (
                  <View style={styles.item}>
                    <View style={{flex:.8, flexDirection:'column'}}>
                      <Text style={{color:'white', fontSize:24,fontWeight:'bold'}}>{item.title}</Text>
                        <Text style={{color:'white',fontWeight:'bold'}}>Dosage:{item.amount}xDay</Text>

                    </View>
                    <View style={{flex:.2}}>
                      <Animatable.Image
                        animation="bounceIn"
                        duration={3000}
                        source={require('HealthMonitorTwo/src/asset/pill.png')}
                        style={{height:50, width:50}}
                        reziseMode={"stretch"}/>
                    </View>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
          </View>


        <TabBar></TabBar>
        <View style={{paddingVertical:30}}></View>
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
  title: {
    fontSize: 28,
  },
  item: {
    backgroundColor: '#05375a',
    paddingVertical:20,
    paddingHorizontal:10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 15,
    flex:1,
    flexDirection:'row'
  },

});
