import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Dimensions,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";
import {CalendarList} from 'react-native-calendars';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';


export default class CalendarComponent extends React.Component {
  state = {
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({isModalVisible: !this.state.isModalVisible});
  };

  render() {
    return (
      <View>
      <Button title="Calendar" onPress={this.toggleModal}>
        <Text>Calendar</Text>
      </Button>
        <Modal isVisible={this.state.isModalVisible}>
          <CalendarList
            pastScrollRange={50}
            futureScrollRange={50}
            scrollEnabled={true}
            horizontal={true}
            showScrollIndicator={true}
            onDayPress={(day) => {console.log('selected day', day)}}
            />
            <Button title="Close Calendar" onPress={this.toggleModal} />
        </Modal>
      </View>
    );
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
    justifyContent: 'center',
    borderTopLeftRadius:30,
    borderTopRightRadius:30
  }
});
