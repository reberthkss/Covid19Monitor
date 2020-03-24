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

const searchIcon = (
  <TouchableOpacity>
    <View style={{padding: 10, margin: 10}}>
      <Icon name={'search'} style={{color: 'white'}} size={15} />
    </View>
  </TouchableOpacity>
);

const headerOptionsHomeScreen = {
  headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
  title: 'Covid-19 Monitor',
  headerTintColor: 'white',
  headerTitleAlign: 'center',
  headerTitleStyle: {fontFamily: 'Domine'},
  headerRight: () => searchIcon,
};
const headerOptionsStatesScreen = {
  headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
  title: 'States',
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'Arial'},
  headerRight: () => searchIcon,
};

const headerOptionsDetailScreen = {
  headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
  title: 'Detail about state',
  headerTintColor: 'white',
  headerTitleStyle: {fontFamily: 'Arial'},
  headerRight: () => searchIcon,
};

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={'Home'}
            component={HomeScreen}
            options={headerOptionsHomeScreen}
          />
          <Stack.Screen
            name={'States'}
            component={ListOfStatesScreen}
            options={headerOptionsStatesScreen}
          />
          <Stack.Screen
            name={'DetailState'}
            component={DetailAboutStateScreen}
            options={headerOptionsDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
