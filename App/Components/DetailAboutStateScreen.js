import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import generalStyles from '../styles/general';
import colors from '../styles/colors';
import StatsOfStatesCard from './StatsOfStatesCard';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBackgroundStateProfile: {
    flex: 0.35,
    backgroundColor: colors.subtitleProfile,
  },
  containerListOfStateStats: {flex: 0.45},
  containerAvatarStateProfile: {
    flex: 0.3,
    position: 'relative',
    marginTop: -80,
    alignItems: 'center',
  },
  stateName: {
    margin: 8,
    fontFamily: 'arial',
    fontSize: 16,
    color: 'black',
  },
  containerSubTitle: {flexDirection: 'row'},
});

const renderStatStateCard = state => {
  return (
    <StatsOfStatesCard
      typeStat={state.typeStat}
      sub={state.sub}
      value={state.value}
    />
  );
};
export default class DetailAboutStateScreen extends Component {
  state = {
    loading: true,
    stateStats: [],
  };
  stateSelected = this.props.route.params.selectedState;
  componentDidMount() {
    let stateStats = [];
    let statConfirmed = {
      typeStat: 'Confirmed',
      sub: 'Num of people with Covid-19',
      value: this.stateSelected.Confirmed,
    };
    let statRecovered = {
      typeStat: 'Recovered',
      sub: 'Num of people recovered',
      value: this.stateSelected.Recovered,
    };
    let statDeath = {
      typeStat: 'Death',
      sub: 'Num of people recovered',
      value: this.stateSelected.Deaths,
    };
    stateStats.push(statConfirmed);
    stateStats.push(statRecovered);
    stateStats.push(statDeath);
    this.setState({loading: false, stateStats: stateStats});
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={generalStyles.loading}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={style.container}>
        <View style={style.containerBackgroundStateProfile} />
        <View style={style.containerAvatarStateProfile}>
          <Avatar
            rounded
            title={this.stateSelected.StateName[0]}
            size={100}
            containerStyle={{marginTop: 12}}
          />
          <Text style={style.stateName}>{this.stateSelected.StateName}</Text>
          <View style={style.containerSubTitle}>
            <Text>
              {parseInt(this.stateSelected.Confirmed) +
                parseInt(this.stateSelected.Recovered) +
                parseInt(this.stateSelected.Deaths)}
            </Text>
            <Text style={{color: colors.subtitleProfile}}> cases</Text>
          </View>
        </View>
        <View style={style.containerListOfStateStats}>
          <View style={style.container}>
            <FlatList
              data={this.state.stateStats}
              renderItem={({item}) => renderStatStateCard(item)}
              keyExtractor={state => state.typeStat}
            />
          </View>
        </View>
      </View>
    );
  }
}
