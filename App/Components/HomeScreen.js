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
import colors from '../styles/colors';
import generalStyles from '../styles/general';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  countryContainer: {
    flex: 0.15,
    marginStart: 20,
    marginEnd: 20,
    backgroundColor: colors.secondary,
  },
  countryBrand: {
    width: 75,
    height: 70,
    marginTop: 15,
    marginStart: 20,
    backgroundColor: colors.transparent,
  },
  countryName: {
    position: 'absolute',
    marginTop: 35,
    marginLeft: 130,
    fontSize: 20,
    color: 'white',
  },
  flagImage: {flex: 1, resizeMode: 'contain'},
});

const countryItemRenderFlatList = (item, navigation) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('States', {country: item.country})}>
      <View style={style.container}>
        <View style={style.countryContainer}>
          <View style={style.countryBrand}>
            <Image style={style.flagImage} source={{uri: item.flagUrl}} />
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
  componentDidMount() {
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
        <View style={generalStyles.loading}>
          <ActivityIndicator size={"large"} color={"blue"}/>
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
