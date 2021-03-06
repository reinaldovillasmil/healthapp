import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Button,
  Dimensions
} from "react-native";

import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import LinearGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import TabBar from './TabBar.js';
import Modal from 'react-native-modal';
import {
  LineChart
} from 'react-native-chart-kit'



export default class SignInComponent extends React.Component{



  line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [162,167,163,168,172,174,175,164,165,165],
          strokeWidth: 4, // optional
        },
      ],
    };


  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };


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
        <View style ={{flexDirection: 'column', paddingTop: 90, paddingLeft: 20}}>
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


                <View style={{flexDirection:'column', paddingVertical: 10, borderWidth: 5, borderTopLeftRadius:30,
                borderTopRightRadius:30,
                borderBottomRightRadius:30,
                borderBottomLeftRadius:30
              }}>

                    <TouchableOpacity onPress={this.toggleModal}>
                    <View style={{flexDirection:'row',paddingVertical:15, borderBottomWidth:1, borderColor:'black', alignItems:'center', paddingHorizontal:10}}>
                    <Text style={{fontSize:30}}> Weight</Text>
                      <View style={{paddingLeft:160, justifyContent:'flex-end'}}></View>
                      <Animatable.Image
                        animation="bounceIn"
                        duration={3000}
                        source={require('HealthMonitorTwo/src/asset/weight.png')}
                        style={styles.logo3}
                        reziseMode={"stretch"}/>
                        <Modal isVisible={this.state.isModalVisible}>
                          <View style={{alignItems:'center'}} >
                            <Text style={{fontSize:32, fontWeight:'bold', color:'white'}}>
                              Weight Chart
                            </Text>
                            <LineChart
                              data={this.line}
                              width={Dimensions.get('window').width-30}
                              height={320}
                              yAxisLabel={'lbs '}
                              chartConfig={{
                                backgroundColor: '#05375a',
                                backgroundGradientFrom: '#05390a',
                                backgroundGradientTo: '#05389a',
                                decimalPlaces: 0, // optional, defaults to 2dp
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                  borderRadius: 16
                                }
                              }}
                              bezier
                              style={{
                                marginVertical: 8,
                                borderRadius: 16,
                              }}
                            />
                          </View>
                            <Button title="Close" onPress={this.toggleModal} />
                        </Modal>
                    </View>

                  </TouchableOpacity>

                    <TouchableOpacity>
                    <View style={{flexDirection:'row',paddingVertical:15, borderBottomWidth:1, borderColor:'black', alignItems:'center', paddingHorizontal:10}}>
                    <Text style={{fontSize:30}}> Pulse</Text>
                      <View style={{paddingLeft:180}}></View>
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
                    <Text style={{fontSize:30}}> Heart Rate</Text>
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
                    <View style={{flexDirection:'row',paddingVertical:15, borderColor:'black', alignItems:'center', paddingHorizontal:10}}>
                    <Text style={{fontSize:30}}> Symptoms</Text>
                      <View style={{paddingLeft:110}}></View>
                      <Animatable.Image
                        animation="bounceIn"
                        duration={3000}
                        source={require('HealthMonitorTwo/src/asset/bug.png')}
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
