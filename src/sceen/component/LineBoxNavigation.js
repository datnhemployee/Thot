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
import LineTextNavigation from './LineTextNavigation';

export default class LineBoxNavigation extends LineTextNavigation {
  constructor (props) {
    super(props);
  }
  
  renderElement (
    element) {
    let {
      navigation
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.box}
        key={element.content}
        name={element.content}
        onPress={()=>{
          if(element.screenName)
            navigation.navigate(element.screenName,{
              params:element.params,
            });
        }}> 
        <Text >
          {element.content}
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: 'gray',
    borderRadius: 2,
    marginLeft:5,
    borderColor:'black',
    borderWidth:1,
  }
});
