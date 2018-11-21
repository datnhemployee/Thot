/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {PORT, LOGIN} from './constant/connection';
import {StyleSheet, Text, View, TextInput} from 'react-native';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      auth: {
        username: 'tài khoản',
        password: 'mật khẩu',
      },
      // response: false,
      // endpoint: `https://localhost:${PORT}`,
      // username: "username",
    };

    this._onTextChange = this._onTextChange.bind(this);
    // this._logIn = this._logIn.bind(this);
  }

  _LogIn (username,password)  {
    console.log('You are loging in the system: '+ 
      username + 
      " ," + 
      password);
      let result = true;
      const { endpoint } = this.state;
      const socket = socketIOClient (endpoint);
  
      socket.emit(LOGIN, {username, password})
    return result;
  }

  _onTextChange  (event={}) {
    // console.log("event: "+ event);
    // console.log("event.target: "+ event.target);
    // const name = event.target && event.target.name;
    // console.log("event.target &&: "+ event.target && event.target.name);
    // console.log("name &&: "+ name);

    // const value = event.target && event.target.value;
    // console.log("event.target &&: "+ event.target && event.target.value);
    // console.log("name &&: "+ value);

    // this.setState([name]: value);
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          name = "username"
          placeholder={"username"}
          // onChangeText={this._onTextChange}
          // multiline = {true}
          // numberOfLines = {4}
          // editable = {true}
          // maxLength = {40}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
