import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";

import SplashComponent from "./SplashComponent.js";
import SignInComponent from "./SignInComponent";
import SignUpComponent from "./SignUpComponent";
import HomeComponent from "./HomeComponent";
import VitalsComponent from "./VitalsComponent";
import MedicationComponent from "./MedicationComponent";
import AccountComponent from "./AccountComponent";
import SettingComponent from "./SettingsComponent";
import SymptomComponent from "./SymptomComponent";
import TabBar from "./TabBar";



import * as Animatable from 'react-native-animatable';



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
        headerShown: false,
        tabBarIcon: () => <Animatable.Image
          animation="bounceIn"
          duration={3000}
          source={require('HealthMonitorTwo/src/asset/logo3.png')}
          reziseMode={"stretch"}/>
      }
  },
  VitalsScreen: {
    screen: VitalsComponent,
    navigationOptions: {
      headerShown: false
    }
  },
  MedicationScreen: {
    screen: MedicationComponent,
    navigationOptions: {
      headerShown: false
    }
  },
  AccountScreen: {
    screen: AccountComponent,
    navigationOptions: {
      headerShown: false
    }
  },
  SettingScreen: {
    screen: SettingComponent,
    navigationOptions: {
      headerShown: false
    }
  },
  Tab: {
    screen: TabBar,
    navigationOptions: {
      headerShown: false
    }
  },
  SymptomScreen: {
    screen: SymptomComponent,
    navigationOptions: {
      headerShown: false
    }
  }
});

export default createAppContainer(StackNavigator);
