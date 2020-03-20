import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';

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

const countryItemRenderFlatList = item => {
  return (
    <TouchableOpacity underlayColor={'white'}>
      <View style={style.container}>
        <View style={style.countryContainer}>
          <View style={style.countryBrand} />
          <Text style={style.countryName}> {item.name} </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
class HomeScreen extends Component {
  render() {
    return (
      <FlatList
        style={style.container}
        data={[
          {id: 'Brasil1', name: 'Brasil', flagUrl: 'abc'},
          {id: 'Brasil2', name: 'Brasil', flagUrl: 'abc'},
          {id: 'Brasil3', name: 'Brasil', flagUrl: 'abc'},
          {id: 'Brasil4', name: 'Brasil', flagUrl: 'abc'},
          {id: 'Brasil5', name: 'Brasil', flagUrl: 'abc'},
          {id: 'Brasil6', name: 'Brasil', flagUrl: 'abc'},
          {id: 'Brasil7', name: 'Brasil', flagUrl: 'abc'},
          {id: 'Brasil8', name: 'Brasil', flagUrl: 'abc'},
        ]}
        renderItem={({item}) => countryItemRenderFlatList(item)}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default HomeScreen;
