import React, { Component } from 'react';
import axios from 'axios';
import PORT from '../constant/connection';
import socketIOClient from "socket.io-client";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      response: false,
      endpoint: `https://localhost:${PORT}`
    }
  }

  componentWillMount() {
    const { endpoint } = this.statel
    const socket = socketIOClient (endpoint);

    socket.on(, )
  }
}