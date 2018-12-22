import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
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
  DEFAULT_PIC,
  IconSaved,
  IconNotSaved,
} from '../../constant/picture';
import MInputText from './mTextInput';
import Button from './Button';

export default class RecipeDetail extends Component {
  constructor (props){
    super (props);

  }

  render () {
    const {
      onChangeText,
      onPressDelete,
      value,
      elementPlaceHolder,
    } = this.props;
    return (
      <View>
        <TextInput
            style={{flex:3,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/5,}}
            multiline={true}
            placeholder={elementPlaceHolder}
            value = {value}
            onChangeText={onChangeText}
          />
        <Button 
        flex = {1}
        customIcon={IconSaved()}
        onPress={onPressDelete}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20
    // flex: 1
  },
  txtLogIn: {
  }
});