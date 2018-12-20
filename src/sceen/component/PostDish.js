import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image
} from 'react-native';
import {
  DEFAULT_PIC,
  IconSaved,
  IconNotSaved,
} from '../../constant/picture';
import Post from './Post';

class PostDish extends Post {
  constructor (props) {
    super (props);
  }
  renderHeaderComponent () {
    let {
      Dish,
    } = this.props;
    return (
      <View>
        
      </View>
    );
  }
}
