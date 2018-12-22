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

export default class LineTextNavigation extends Component {
  constructor () {
    super();

    this.renderElement = this.renderElement.bind(this);
  }

  renderElement (
    element) {
    let {
      navigation
    } = this.props;
    return (
      <TouchableOpacity
        style={{marginLeft:5}}
        key={element.content}
        name={element.content}
        onPress={()=>{
          if(element.screenName)
            navigation.navigate(element.screenName,{
              params:element.params,
            });
        }}> 
        <Text style={element.contentStyle}>
          {element.content}
        </Text>
      </TouchableOpacity>
    );
  }
  render () {
    let {
      listElement,
    } = this.props;

    if(listElement){
      return (
        <View style={styles.lineWrap}>
          {listElement.map((ele,i)=>
              this.renderElement(ele))}
        </View>
      );
    }
    return (
      <View style={styles.lineWrap}>
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  lineWrap: {
    flexWrap:'wrap',
    flexDirection: 'row',
    padding: 10,
  },
});
