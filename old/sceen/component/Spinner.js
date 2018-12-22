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

export default class Spinner extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    let {
      increment,
      value,
      decrement,
    } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.increment}
          onPress={increment}>
          <IconSaved />
        </TouchableOpacity>
        <Text
          style={styles.value}
          >{value}</Text>
        <TouchableOpacity
          style={styles.decrement}
          onPress={decrement}>
          <IconSaved />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  increment: {
  },
  value: {
  },
  decrement: {
  },
});