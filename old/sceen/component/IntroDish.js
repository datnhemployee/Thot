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

export default class IntroDish extends Component{
  constructor (props) {
    super(props);
    this.getListElement = this.getListElement.bind(this);
  }

  getListElement () {
    let {
      id,
      author,
      dishType,
      place,
      placeID,
      price,
      unit,
    } = this.props;
    return [
      {
        content: author,
        screenName: 'User',
        params: id,
        contentStyle: styles.txtNavigator,
      },
      {
        content: 'muốn làm',
        screenName: undefined,
        params: undefined,
        contentStyle: styles.txtNormal,
      },
      {
        content: dishType,
        screenName: 'Search',
        // params: {
        //   type: DISH_TYPE,
        //   filter: dishType,
        // },
        contentStyle: styles.txtNavigator,
      },
      {
        content: 'được bán tại',
        screenName: undefined,
        params: undefined,
        contentStyle: styles.txtNormal,
      },
      {
        content: place,
        screenName: 'Store',
        params: {
          id: placeID,
        },
        contentStyle: styles.txtNavigator,
      },
      {
        content: 'giá',
        screenName: undefined,
        params: undefined,
        contentStyle: styles.txtNormal,
      },
      {
        content: price,
        screenName: 'Search',
        // params: {
        //   type: DISH_PRICE,
        //   filter: price,
        // },
        contentStyle: styles.txtNavigator,
      },
      {
        content: '/ 1 '+ unit,
        screenName: undefined,
        params: undefined,
        contentStyle: styles.txtNormal,
      },
    ]
  }

  render () {
    let {navigation} = 
      this.props;
    return (
      <View>
        <LineTextNavigation
          navigation={navigation}
          listElement={this.getListElement()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create ({
  txtNavigator: {
    fontWeight:'bold',
    textDecorationLine:'underline',
  },
  txtNormal: {
    fontWeight:'normal'
  },
});