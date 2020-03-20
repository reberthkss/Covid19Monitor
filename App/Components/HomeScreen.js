import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CountryProviders from '../Providers/CountryProviders';


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
    width: 72,
    height: 55,
    marginTop: 15,
    marginStart: 20,
    backgroundColor: '#13CE66',
  },
  countryName: {
    position: 'absolute',
    marginTop: 25,
    marginLeft: 130,
    fontSize: 20,
    color: 'white',
  },
});

const list = item => {
  return (
    <TouchableOpacity underlayColor={'white'}>
      <View style={style.container}>
        <View style={style.countryContainer}>
          <View style={style.countryBrand} />
          <Text style={style.countryName}> {item.name} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
class HomeScreen extends Component {

componentDidMount(): void {
    CountryProviders.getCountries().then(countries => {
        console.log(countries[0].country)
    })
}

    render() {
    return (
      <FlatList
        style={style.container}
        data={[
          {name: 'Brasil'},
          {name: 'Brasil'},
          {name: 'Brasil'},
          {name: 'Brasil'},
          {name: 'Brasil'},
          {name: 'Brasil'},
          {name: 'Brasil'},
          {name: 'Brasil'},
        ]}
        renderItem={({item}) => list(item)}
      />
    );
  }
}

export default HomeScreen;
