import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import SpotlightSearch from 'react-native-spotlight-search';

const sampleFruits = [
  {
    name: 'Strawberry',
    details: 'A sweet and juicy fruit.',
    key: '1',
    image: require('image!strawberry'),
    keywords: ['delicious', 'edible'],
  },
  {
    name: 'Banana',
    details: 'A bright yellow fruit.',
    key: '2',
    image: require('image!banana'),
    keywords: ['plantain'],
  },
  {
    name: 'Kiwi',
    details: 'Not a type of bird.',
    key: '3',
    image: require('image!kiwi'),
    keywords: ['new zeland'],
  },
];

SpotlightSearch.searchItemTapped((uniqueIdentifier) => {
  const selectedFruit = sampleFruits.filter((fruit) => fruit.key === uniqueIdentifier)[0];

  alert(`You tapped on ${selectedFruit.name}!`);
});

const indexSearchableItems = (() => {
  SpotlightSearch.indexItems(sampleFruits.map((fruit) => {
    return {
      title: fruit.name,
      contentDescription: fruit.details,
      uniqueIdentifier: fruit.key,
      thumbnailUri: fruit.image.path,
      keywords: fruit.keywords,
    };
  }));
})();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  introText: {
    marginTop: 64,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  rowTextContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 4,
  },
  rowTitle: {
    fontSize: 20,
  },
  rowDescription: {
    color: '#333333',
  },
  rowImage: {
    width: 64,
    height: 64,
  }
});

const FruitRow = ({fruit}) => (
  <View style={styles.row}>
    <Image resizeMode={Image.resizeMode.contain}
      style={styles.rowImage}
      source={fruit.image}/>
    <View style={styles.rowTextContainer}>
      <Text style={styles.rowTitle}>{fruit.name}</Text>
      <Text style={styles.rowDescription}>{fruit.details}</Text>
    </View>
  </View>
);

const Example = () => (
  <View style={styles.container}>
    <Text style={styles.introText}>The items below have been added to the Spotlight search index on this device</Text>
    {sampleFruits.map((fruit) => (
      <FruitRow key={fruit.key}
        fruit={fruit}/>
    ))}
  </View>
);

AppRegistry.registerComponent('example', () => Example);
