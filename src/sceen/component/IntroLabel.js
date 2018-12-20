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

export default class IntroLable extends Component {
  constructor (props) {
    super (props);
  } 
  render () {
    let {
      title,
      content,
      titleStyle,
      contentStyle,
    } = this.props;
    return (
      <View>
        <Text style={titleStyle}>
          {title}
        </Text>
        <Text style={contentStyle}>
          {content}
        </Text>
      </View>
    );
  }
}