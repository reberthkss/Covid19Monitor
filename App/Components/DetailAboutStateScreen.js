import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {Avatar} from 'react-native-elements';
import geralStyles from '../styles/general';
import colors from '../styles/colors';

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerBackgroundStateProfile: {flex: 0.35, backgroundColor: colors.subtitleProfile},
  containerListOfStateStats: {flex: 0.45},
  containerAvatarStateProfile: {
    flex: 0.3,
    position: 'relative',
    marginTop: '-20%',
    alignItems: 'center',
  },
  containerCardStatState: {
    flex: 1,
    paddingBottom: '10%',
    marginStart: '3%',
    marginEnd: '3%',
    marginTop: '4%',
    marginBottom: '5%',
    backgroundColor: colors.subtitleProfile,
  },
  valueStatState: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'Arial',
    marginTop: '-6%',
  },
  stateName: {
    margin: '2%',
    fontFamily: 'arial',
    fontSize: 16,
    color: 'black',
  },
  containerSubTitle: {flexDirection: 'row'},
});
const statRender = stat => {
  let sub;
  switch (stat.typeStat) {
    case 'Confirmed':
      sub = 'Num of people with Covid-19';
      break;
    case 'Death':
      sub = 'Num of people dead';
      break;
    case 'Recovered':
      sub = 'Num of people recovered';
      break;
  }
  return (
    <View style={style.containerCardStatState}>
      <View style={{marginLeft: '2%', marginRight: '2%'}}>
        <Text style={{marginTop: '5%', fontSize: 22}}>{stat.typeStat}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: colors.primary}}>{sub}</Text>
          <Text style={style.valueStatState}>{stat.value}</Text>
        </View>
      </View>
    </View>
  );
};
export default class DetailAboutStateScreen extends Component {
  state = {
    loading: true,
    stateStats: [],
  };
  stateSelected = this.props.route.params.selectedState;
  componentDidMount(): void {
    let stateStats = [];
    let statConfirmed = {
      typeStat: 'Confirmed',
      value: this.stateSelected.Confirmed,
    };
    let statRecovered = {
      typeStat: 'Recovered',
      value: this.stateSelected.Recovered,
    };
    let statDeath = {typeStat: 'Death', value: this.stateSelected.Deaths};
    stateStats.push(statConfirmed);
    stateStats.push(statRecovered);
    stateStats.push(statDeath);
    this.setState({loading: false, stateStats: stateStats});
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
      <View style={style.container}>
        <View style={style.containerBackgroundStateProfile} />
        <View style={style.containerAvatarStateProfile}>
          <Avatar
            rounded
            title={this.stateSelected.StateName[0]}
            size={100}
            containerStyle={{marginTop: '3%'}}
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
              renderItem={({item}) => statRender(item)}
              keyExtractor={state => state.typeStat}
            />
          </View>
        </View>
      </View>
    );
  }
}
