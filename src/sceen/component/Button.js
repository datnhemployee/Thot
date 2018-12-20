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

export default class Button extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    let {
      customIcon,
      customValue,
      txtStyle,
      onPress,
      flex,
      justifyContent,
      alignItems,
    } = this.props;

    return (
      <TouchableOpacity style={[styles.container,{
        flex:flex,
        justifyContent:justifyContent,
        alignItems:alignItems,
      }]}
        onPress={onPress}>
        {customIcon}
        <Text style={txtStyle}>{customValue}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
    // borderWidth: 1,
    // borderColor: 'red',
    // justifyContent: 'center',
    // alignItems: 'center',
  }
});