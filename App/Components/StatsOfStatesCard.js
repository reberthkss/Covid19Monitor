import {StyleSheet, Text, View} from 'react-native';
import colors from '../styles/colors';
import React, {Component} from 'react';
const style = StyleSheet.create({
  containerCardStatState: {
    flex: 1,
    paddingBottom: '10%',
    marginStart: '3%',
    marginEnd: '3%',
    marginTop: '4%',
    marginBottom: '5%',
    backgroundColor: colors.subtitleProfile,
  },
});
export default class StatsOfStatesCard extends Component {
  render() {
    let typeStat = this.props.typeStat ? this.props.typeStat : '';
    let sub = this.props.sub ? this.props.sub : '';
    let value = this.props.value ? this.props.value : '';
    return (
      <View style={style.containerCardStatState}>
        <View style={{marginLeft: '2%', marginRight: '2%'}}>
          <Text style={{marginTop: '5%', fontSize: 22}}>{typeStat}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{color: colors.primary}}>{sub}</Text>
            <Text style={style.valueStatState}>{value}</Text>
          </View>
        </View>
      </View>
    );
  }
}
