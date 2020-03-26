import React, {Component} from 'react';

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  Image,
} from 'react-native';
import CountryProviders from '../Providers/CountryProviders';
import ListOfStatesScreen from './ListOfStatesScreen';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A6978',
  },
  countryContainer: {
    flex: 0.15,
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: '#5A6978',
  },
  countryBrand: {
    width: 75,
    height: 70,
    marginTop: 15,
    marginStart: 20,
    backgroundColor: 'rgba(0,0,0,0)',
  },
  countryName: {
    position: 'absolute',
    marginTop: 35,
    marginLeft: 130,
    fontSize: 20,
    color: 'white',
  },
});

const countryItemRenderFlatList = (item, navigation) => {
  return (
    <TouchableOpacity
      underlayColor={'white'}
      onPress={() => navigation.navigate('States', {country: item.country})}>
      <View style={style.container}>
        <View style={style.countryContainer}>
          <View style={style.countryBrand}>
            <Image
              style={{flex: 1, resizeMode: 'contain'}}
              source={{uri: item.flagUrl}}
            />
          </View>
          <Text style={style.countryName}> {item.country} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
class HomeScreen extends Component {
  state = {
    loading: true,
    countries: [],
  };
  componentDidMount(): void {
    CountryProviders.getCountriesList()
      .then(countryList => {
        this.setState({loading: false, countries: countryList});
      })
      .catch(error => {
        this.setState({loading: false, error: error.message});
      });
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={{flex: 1}}>
          <ActivityIndicator />
        </View>
      );
    }
    if (this.state.error) {
      return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 28}}>{this.state.error}</Text>
        </View>
      );
    }
    return (
      <FlatList
        style={style.container}
        data={this.state.countries}
        renderItem={({item}) =>
          countryItemRenderFlatList(item, this.props.navigation)
        }
        keyExtractor={item => item.id}
      />
    );
  }
}

export default HomeScreen;
