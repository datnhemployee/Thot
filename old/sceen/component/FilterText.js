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
import { FlatList } from 'react-native-gesture-handler';

export default class FilterText extends Component {
  constructor () {
    super();

    this.renderElement = this.renderElement.bind(this);
  }

  renderElement = (
    element,
    index,
    length) => {
    let {
      navigation
    } = this.props;
    return (
      <TouchableOpacity
        key={element.content}
        name={element.content}
        onPress={()=>{element.pressToLoad}}> 
        <Text style={element.contentStyle}>
          {element.content}
        </Text>
      </TouchableOpacity>
    );
  }
  render () {
    let {
      listElement,
      styles,
    } = this.props;

    if(listElement){
      return (
        <FlatList 
          style={styles} 
          data={listElement}
          renderItem={(Item)=>this.renderElement(Item)}
        />
          
      );
    }
  }
}