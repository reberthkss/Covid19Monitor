import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, TouchableHighlight, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './Components/HomeScreen';
import ListOfStatesScreen from './Components/ListOfStatesScreen';
import DetailAboutStateScreen from './Components/DetailAboutStateScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default class App extends Component {
  headerOptionsDetailScreen = {
    headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
    headerShown: 'true',
    headerTitle: '',
    headerTransparent: 'true',
    headerTintColor: 'black',
  };

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={'Home'} component={HomeScreen} />
          <Stack.Screen name={'States'} component={ListOfStatesScreen} />
          <Stack.Screen
            name={'DetailState'}
            component={DetailAboutStateScreen}
            options={this.headerOptionsDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
