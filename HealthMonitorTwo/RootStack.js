import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import SplashComponent from "./SplashComponent.js";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import HomeComponent from "./HomeComponent"
import VitalsComponent from "./VitalsComponent"

const StackNavigator = createStackNavigator({
  SplashScreen: {
      screen: SplashComponent,
      navigationOptions: {
        headerShown: false
      }
  },
  SignInScreen: {
      screen: SignInComponent,
      navigationOptions: {
        headerShown: false
      }
  },
  SignUpScreen: {
      screen: SignUpComponent,
      navigationOptions: {
        headerShown: false
      }
  },
  HomeScreen: {
      screen: HomeComponent,
      navigationOptions: {
        headerShown: false
      }
  },
  VitalsScreen: {
    screen: VitalsComponent,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default createAppContainer(StackNavigator);
