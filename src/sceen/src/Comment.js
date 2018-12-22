import React, {Component} from 'react';
import {
  USERNAME_HOLDER_COLOR, 
  USERNAME_COLOR,
  PASSWORD_HOLDER_COLOR,
  PASSWORD_COLOR,
  SCREEN_SIZE,
  RED,
  GRAY,
  LIGHT_RED,
  LIGHT_GRAY,
  FONT,
} from '../../constant/style';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  isString,
  isEmpty,
} from '../../api/StringHelper';
import { connect } from 'react-redux';
import TextInput from '../component/mTextInput';
import {
  inputUsername,
  inputPassword,
} from '../../actions/actLogin';
import FComment from '../form/fComment';

export default class Comment extends Component {
  constructor (props) {
    super (props);

    this.state = {
      Comments: [{author:'Dat',content:'vsavasv'},{author:'dsa',content:'vsavasv'}],
    }
  } 

  render () {
    const {
      navigation
    } = this.props;
    const {
      Comments
    } = this.state;
    return (
      <View style={styles.container}>
        <FComment 
        comments = {Comments}
        navigation = {navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
