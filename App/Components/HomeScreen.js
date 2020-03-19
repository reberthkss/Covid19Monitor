import React, {Component} from 'react';
import {View, Text, StyleSheet,FlatList,TouchableHighlight} from 'react-native';


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5A6978',
  },
  countryContainer: {flex: 0.15, marginStart:20,marginEnd:20, backgroundColor: '#5A6978'},
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

const list = (item) => {
  return (
    <TouchableHighlight>
      <View style={style.container}>
        <View style={style.countryContainer}>
          <View style={style.countryBrand} />
          <Text style={style.countryName}> {item.name} </Text>
        </View>
      </View></TouchableHighlight>
  );
};
class HomeScreen extends Component {
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
    )
  }
}

export default HomeScreen;
