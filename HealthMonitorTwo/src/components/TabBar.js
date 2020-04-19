import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
  Alert
} from "react-native";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { withNavigation } from 'react-navigation';


class TabBar extends React.Component {

  toggoleOpen = () => {

  }

  render(){
    return (
      <View style={{

                    position: 'absolute',
                    backgroundColor: 'white',
                    border: 2,
                    radius: 3,
                    shadowOpacity: 0.3,
                    shadowRadius: 3,
                    shadowOffset: {

                        height: 1, width: 1
                    },
                    x: 0,
                    y: 0,
                    style: { marginVertical: 5 },
                    bottom: 0,
                    width: Dimensions.get('window').width,
                    height: 65,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                    paddingHorizontal: 25


                }}>

                <View style={{
                    flexDirection: 'column', marginStart:30
                }}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("HomeScreen")}>
                        <Image
                            style={{  width: 30, height: 30 }}
                            source={{ uri: 'http://simpleicon.com/wp-content/uploads/home-6.png' }}
                            onPress={() => { Alert.alert("click") }}
                        />

                    </TouchableOpacity>
                </View>



                <View style={{
                    flexDirection: 'column', marginStart:30
                }}>

                    <TouchableOpacity
                        onPress={() => { Alert.alert("click") }}
                    >
                        <Image
                            style={{  width: 30, height: 30 }}
                            source={{ uri: 'http://simpleicon.com/wp-content/uploads/active-search.png' }}
                            onPress={() => { Alert.alert("click") }}
                        />

                    </TouchableOpacity>
                    <Text style={{justifyContent:'center',alignItems:'center' }}>search </Text>
                </View>

                <View style={{
                    flexDirection: 'column', marginStart:30
                }}>

                    <TouchableOpacity
                        onPress={() => { Alert.alert("click") }}
                    >
                        <Image
                            style={{  width: 30, height: 30 }}
                            source={{ uri: 'http://simpleicon.com/wp-content/uploads/active-search.png' }}
                            onPress={() => { Alert.alert("click") }}
                        />

                    </TouchableOpacity>
                    <Text style={{justifyContent:'center',alignItems:'center' }}>search </Text>
                </View>

                <View style={{
                    flexDirection: 'column', marginStart:30
                }}>

                    <TouchableOpacity
                        onPress={() => { Alert.alert("click") }}
                    >
                        <Image
                            style={{  width: 30, height: 30 }}
                            source={{ uri: 'http://simpleicon.com/wp-content/uploads/active-search.png' }}
                            onPress={() => { Alert.alert("click") }}
                        />

                    </TouchableOpacity>
                    <Text style={{justifyContent:'center',alignItems:'center' }}>search </Text>
                </View>




        </View>
    );
  }

}

const styles = StyleSheet.create({

    button: {
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: 'grey',
        shadowOpacity: 0.1,
        shadowOffset: { x: 2, y: 0 },
        shadowRadius: 2,
        borderRadius: 30,
        position: 'absolute',
        bottom: 20,
        right: 0,
        top: 5,
        left: 5,
        shadowOpacity: 5.0,

    },
    actionBtn: {

        backgroundColor: '#fff',
        textShadowOffset: { width: 5, height: 5 },
        textShadowRadius: 10,
        borderWidth: 2,
        borderColor: '#fff'
    },
    tabHolder:{
      position: 'absolute',
      width: '100%',
      height: 70,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      paddingHorizontal: 25


    }


});
export default withNavigation(TabBar)
