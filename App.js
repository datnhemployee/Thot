import React, { Component } from 'react';
import axios from 'axios';
import {View, StyleSheet, TextInput} from 'react-native';
import PORT from './constant/connection';
import LOGIN from './constant/connection';
import socketIOClient from "socket.io-client";

export class App extends Component {
  constructor() {
    super();
    this.buttonName = [
      'Login',
    ];

    this.LogIn = this.LogIn.bind(this);

    this.state = {
      auth: {
        username: 'Username',
        password: 'password',
      },
      response: false,
      endpoint: `https://localhost:${PORT}`,
    }
  }

  LogIn(username,password){
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

  componentWillMount() {
    
    socket.on(LOGIN, )
  }

  render () {
    return( 
      <View style={StyleSheet.container}>
        <TextInput
          key={'username'}
          style={styles.username}
          onChangeText={
            (username)=> {
              this.setState({username});
            }
          }
          value={this.state.username}
        />
        <TextInput
          key={'password'}
          style={styles.password}
          onChangeText={
            (password)=> {
              this.setState({password});
            }
          }
          value={this.state.auth.password}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  username: {
    flex: 1,
  },
  password: {
    flex: 1,
  },
  logIn: {
    flex: 1,
  },
});

export default App;