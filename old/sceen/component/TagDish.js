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
import LineBoxNavigation from './LineBoxNavigation';

export default class TagDish extends Component{
  constructor (props) {
    super(props);
  }

  getListElement () {
    let {
      Tags
    } = this.props;
    let result = Tags.slice(0,3).map((value,i)=> {
      if(i<2)
        return {
          content:'#' + value,
          screenName: 'Search',
          // params: id,
          contentStyle: styles.txtNormal,
        };
      if(i==2)
        return {
          content: '+' + (Tags.length - 2),
          screenName: 'Search',
          // params: id,
          contentStyle: styles.txtNormal,
        };
    });
    console.log('Tag: '+ JSON.stringify(result));
    
    return result;
  }

  render () {
    let {navigation} = 
      this.props;
    return (
      <View>
        <LineBoxNavigation
          navigation={navigation}
          listElement={this.getListElement()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  txtNormal: {
    fontWeight:'bold',
    fontWeight:'normal'
  },
});