import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import StateProvider from '../Providers/StateProvider';
import colors from '../styles/colors';
import geralStyles from '../styles/general';
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchInput, {createFilter} from 'react-native-search-filter';
const KEYS_TO_FILTER = ['StateName'];
const renderState = (state, navigation) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('DetailState', {selectedState: state})
      }>
      <View>
        <View
          style={{
            marginStart: 15,
            marginEnd: 10,
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Text
            style={{fontFamily: 'Arial', color: colors.itemList, fontSize: 18}}>
            {state.StateName}
          </Text>
          <Text style={{fontFamily: 'Arial', color: colors.primary}}>
            {state.Confirmed} cases
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default class ListOfStatesScreen extends Component {
  state = {
    loading: true,
    states: [],
    termFilter: '',
    filteredStates: [],
    showSearchInput: false,
  };
  execSearch = term => {
    this.setState({
      loading: this.state.loading,
      states: this.state.states,
      termFilter: term,
      filteredStates: this.state.states.filter(
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
            states: this.state.states,
            termFilter: this.state.termFilter,
            filteredStates: this.state.filteredStates,
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
      <SearchInput
        style={{backgroundColor: 'white', borderRadius: 2, width: 200}}
        inputViewStyles={{width: '100%'}}
        onChangeText={termFilter => {
          this.execSearch(termFilter);
        }}
      />
    );
  };
  headerOptionsStatesScreenWithoutSearchInput = () => {
    return {
      headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
      headerTitle: 'States',
      headerTintColor: 'white',
      headerTitleStyle: {fontFamily: 'Arial'},
      headerRight: this.searchIcon,
    };
  };
  headerOptionsStatesScreenWithSearchInput = () => {
    return {
      headerStyle: {backgroundColor: 'rgba(123,137,151,100)'},
      headerTitle: this.searchInput,
      headerAlign: 'left',
      headerRight: null,
    };
  };

  componentDidMount(): void {
    StateProvider.getListOfStates(this.props.route.params.country)
      .then(listStates => {
        this.setState({
          loading: false,
          states: listStates,
          termFilter: this.state.termFilter,
          filteredStates: listStates,
          showSearchInput: this.state.showSearchInput,
        });
      })
      .catch(error =>
        this.setState({
          loading: false,
          error: error.message,
          termFilter: this.state.termFilter,
          showSearchInput: this.state.showSearchInput,
        }),
      );
  }

  render() {
    this.props.navigation.setOptions(
      this.state.showSearchInput
        ? this.headerOptionsStatesScreenWithSearchInput()
        : this.headerOptionsStatesScreenWithoutSearchInput(),
    );
    if (this.state.loading) {
      return (
        <View style={geralStyles.loading}>
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
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.filteredStates}
          renderItem={({item}) => renderState(item, this.props.navigation)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
