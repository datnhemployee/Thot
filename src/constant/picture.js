import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {
  RED,
  LIGHT_GRAY,
} from '../constant/style';

export const DEFAULT_PIC = require('../img/default_pic.png');

export const IconSaved = () => <Icon
  name='bookmark'
  type= 'MaterialCommunityIcons'
  size= {26}
  color= {RED}
  underlayColor="transparent"
/>

export const IconNotSaved = () => <Icon
  name= 'bookmark-border'
  type= 'MaterialCommunityIcons'
  size={26}
  color= {LIGHT_GRAY}
  underlayColor= '#00aced'
/>