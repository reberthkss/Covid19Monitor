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

const countryItemRenderFlatList  = item => {
  return (
    <TouchableOpacity underlayColor={'white'}>
      <View style={style.container}>
        <View style={style.countryContainer}>
          <View style={style.countryBrand}><Image style={{flex:1}} source={{uri:item.flagUrl}}/></View>
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
    CountryProviders.getCountriesList().then(countryList => {
      this.setState({loading: false, countries: countryList});
      console.log(this.state);
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
    return (
      <FlatList
        style={style.container}
        data={this.state.countries}
        renderItem={({item}) => countryItemRenderFlatList (item)}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default HomeScreen;
