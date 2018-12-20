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
import TextInput from '../component/textInput';
import {
  inputUsername,
  inputPassword,
} from '../../actions/actLogin';
import FRegister from '../form/fRegister';

export default class Register extends Component {
  constructor (props) {
    super (props);
  } 

  render () {
    return (
      <View>
        <FRegister
        />
      </View>
    );
  }
}
