import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity
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

export default class textInput extends Component {
  constructor () {
    super();

    // this.content = {
    //   // content: {
    //     name: String,
    //     value: String,
    //   // },
    //   placeholder:String,
    //   sercure:Boolean,
    //   _onChangeText: (value) => {},
    // }
  }

  getKeboardType () {
    const {
      keyboardType
    } = this.props;
    if(keyboardType)
      return keyboardType;
    return 'twitter';
  }
  render() {
      return (
      <TextInput
        style={[
          styles.inputText
          // ,
          // {fontStyle: this.props.fontStyle}
        ]}
        // name={this.props.content.name}
        name={this.props.name}
        placeholder={this.props.placeholder}
        placeholderTextColor= {GRAY}
        secureTextEntry={this.props.sercure}
        onChangeText={this.props.onChangeText}
        // editable = {true}
        maxLength = {40}
        autoFocus = {true}
        keyboardAppearance = 'dark'
        keyboardType =  {this.getKeboardType()}
        underlineColorAndroid={GRAY}
        >
        
      </TextInput>
    );
  }
    
}

const styles = StyleSheet.create({
  inputText: {
    margin: 5,
    width: SCREEN_SIZE.W * 3/5,
    backgroundColor: '#FFFFFF55',
    textAlign: 'left',
    // color: 'white',
    // borderColor: 'gray',
    // borderWidth: 1,
    borderRadius: 5,
  },
});