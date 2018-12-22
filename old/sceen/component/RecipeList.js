import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  DEFAULT_PIC,
  IconSaved,
  IconNotSaved,
} from '../../constant/picture';
import CardList from './CardList';
import RecipeCard from './RecipeCard';

export default class RecipeList extends CardList {
  constructor (props) {
    super (props);
  }

  getItems () {
    let {
      Recipes
    } = this.props;
    return Recipes;
  }

  getFilterList () {
    let {
      getFastest,
      getMostBeloved,
      getMostReasonable,
      getLastest,
    } = this.props;
    return [
      {content:'Nhanh', pressToLoad: getFastest},
      {content:'Được ưu thích', pressToLoad: getMostBeloved},
      {content:'Rẻ', pressToLoad: getMostReasonable},
      {content:'Mới',pressToLoad: getLastest},
    ]
  }

  renderItem(item) {
    let {
      navigation
    } = this.props;
    console.log('recipe: '+JSON.stringify(item));
    return (
      <View>
        <RecipeCard 
          navigation ={navigation}
          recipe={item}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});