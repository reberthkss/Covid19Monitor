import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import StateProvider from '../Providers/StateProvider';

const renderState = state => {
  return (
    <TouchableOpacity>
      <View>
        <View
          style={{
            marginStart: 15,
            marginEnd: 10,
            marginTop: 20,
            marginBottom: 10,
          }}>
          <Text style={{fontFamily: 'Arial', color: 'black', fontSize: 18}}>
            {state.StateName}
          </Text>
          <Text style={{fontFamily: 'Arial', color: '#5E92C0'}}>
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
  };

  componentDidMount(): void {
    StateProvider.getListOfStates(this.props.route.params.country)
      .then(listStates => {
        this.setState({loading: false, states: listStates});
      })
      .catch(error => this.setState({loading: false, error: error.message}));
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
          data={this.state.states}
          renderItem={({item}) => renderState(item)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
