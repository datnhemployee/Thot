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
import FRecipe from '../form/fRecipe';

export default class Recipe extends Component {
  constructor (props) {
    super (props);
  } 

  render () {
    const {
      navigation
    } = this.props;

    return (
      <View style={styles.container}>
        <FRecipe 
         name={'csacsa'}
         gredients={'casvasvsa'}
         steps={['vsavasvas','vsavsavas']}
         intro={'vasvasvasva'}
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
