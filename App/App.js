import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen'


const Stack = createStackNavigator();

const opt = {
  headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
  title: 'Covid-19 Monitor',
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerTitleStyle: {fontFamily: 'Domine'},
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={opt}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
