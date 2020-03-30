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
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchInput, {createFilter} from 'react-native-search-filter';
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
const KEYS_TO_FILTER = ['id'];

class HomeScreen extends Component {
  state = {
    loading: true,
    countries: [],
    termFilter: '',
    filteredCountries: [],
    showSearchInput: false,
  };
  countryItemRenderFlatList = item => {
    return (
      <TouchableOpacity
        onPress={() => (
          this.setState({
            loading: this.state.loading,
            countries: this.state.countries,
            termFilter: '',
            filteredCountries: this.state.countries,
            showSearchInput: false,
          }),
          this.props.navigation.navigate('States', {country: item.country})
        )}>
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
  execSearch = term => {
    this.setState({
      loading: this.state.loading,
      countries: this.state.countries,
      termFilter: term,
      filteredCountries: this.state.countries.filter(
        createFilter(term, KEYS_TO_FILTER),
      ),
      showSearchInput: this.state.showSearchInput,
    });
  };

  searchIcon = () => {
    return (
      <TouchableOpacity
        onPress={() =>
          this.setState({
            loading: this.state.loading,
            countries: this.state.countries,
            termFilter: this.state.termFilter,
            filteredCountries: this.state.filteredCountries,
            showSearchInput: true,
          })
        }>
        <View style={{padding: 10, margin: 10}}>
          <Icon name={'search'} style={{color: 'white'}} size={15} />
        </View>
      </TouchableOpacity>
    );
  };
  searchInput = () => {
    return (
      <View style={{flexDirection: 'row', flex: 1}}>
        <SearchInput
          style={{backgroundColor: 'white', borderRadius: 2}}
          inputViewStyles={{width: '650%'}}
          onChangeText={termFilter => {
            this.execSearch(termFilter);
          }}
        />
      </View>
    );
  };

  headerOptionsHomeScreenWithoutSearchInput = () => {
    return {
      headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
      headerTitle: 'Covid-19 Monitor',
      headerTintColor: 'white',
      headerTitleAlign: 'center',
      headerTitleStyle: {fontFamily: 'Domine'},
      headerRight: this.searchIcon,
    };
  };
  headerOptionsHomeScreenWithSearchInput = () => {
    return {
      headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
      headerTitle: this.searchInput,
      headerTitleAlign: 'left',
      headerRight: null,
    };
  };
  componentDidMount(): void {
    CountryProviders.getCountriesList()
      .then(countryList => {
        this.setState({
          loading: false,
          countries: countryList,
          termFilter: this.state.termFilter,
          filteredCountries: countryList,
          showSearchInput: this.state.showSearchInput,
        });
      })
      .catch(error => {
        this.setState({
          loading: false,
          error: error.message,
          showSearchInput: this.state.showSearchInput,
        });
      });
  }
  render() {
    this.props.navigation.setOptions(
      this.state.showSearchInput
        ? this.headerOptionsHomeScreenWithSearchInput()
        : this.headerOptionsHomeScreenWithoutSearchInput(),
    );
    if (this.state.loading) {
      return (
        <View style={generalStyles.loading}>
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
        data={this.state.filteredCountries}
        renderItem={({item}) =>
          this.countryItemRenderFlatList(item, this.props.navigation)
        }
        keyExtractor={item => item.id}
      />
    );
  }
}

export default HomeScreen;
