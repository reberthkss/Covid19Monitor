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
const statesRender = (state, navigation) => {
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
  };

  componentDidMount(): void {
    StateProvider.getListOfStates(this.props.route.params.country).then(
      listStates => {
        this.setState({loading: false, states: listStates});
      },
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={geralStyles.loading}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{flex: 1}}>
        <FlatList
          style={{flex: 1}}
          data={this.state.states}
          renderItem={({item}) => statesRender(item, this.props.navigation)}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
