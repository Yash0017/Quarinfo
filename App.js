import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Modules/Mainpage';
import Signin from './Forms/Signin';
import Register from './Forms/Register';
import Profile from './User/Profile';
//import KeyboardInputViewScreen from './User/Keyboard';
const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Homescreen" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
