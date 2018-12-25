import React, {Component} from 'react';
import {Icon} from 'react-native-elements';
import {
  RED,
  LIGHT_GRAY,
} from '../constant/style';

export const DEFAULT_PIC = require('../img/default_pic.png');

export const IconChat = () => <Icon
  name= 'chat-bubble-outline'
  type= 'MaterialIcons'
  size={26}
  color= {LIGHT_GRAY}
  underlayColor= '#00aced'
/>

export const IconChatCliked = () => <Icon
  name= 'chat-bubble'
  type= 'MaterialIcons'
  size={26}
  color= {LIGHT_GRAY}
  underlayColor= '#00aced'
/>

export const IconLove = () => <Icon
  name= 'favorite-border'
  type= 'MaterialIcons'
  size={26}
  color= {LIGHT_GRAY}
  underlayColor= '#00aced'
/>

export const IconLoveClicked = () => <Icon
  name= 'favorite'
  type= 'MaterialIcons'
  size={26}
  color= {RED}
  underlayColor= '#00aced'
/>

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

export const IconPicture = () => <Icon
  name= 'collections'
  type= 'MaterialIcons'
  size={26}
  color= {LIGHT_GRAY}
  underlayColor= '#00aced'
/>

export const IconCamera = () => <Icon
  name= 'camera-alt'
  type= 'MaterialIcons'
  size={26}
  color= {LIGHT_GRAY}
  underlayColor= '#00aced'
/>

export const IconFeedClicked = () => <Icon
  name= 'library-books'
  type= 'MaterialIcons'
  size={30}
  color= {RED}
  underlayColor= '#00aced'
/>

export const IconFeed = () => <Icon
  name= 'filter-none'
  type= 'MaterialIcons'
  size={30}
  color= {LIGHT_GRAY}
  underlayColor= '#00aced'
/>

export const IconAdd = () => <Icon
name= 'add'
type= 'MaterialIcons'
size={35}
color= {RED}
underlayColor= '#00aced'
/>
// add
export const IconNoteClicked = () => <Icon
  name= 'mode-edit'
  type= 'MaterialIcons'
  size={26}
  color= {RED}
  underlayColor= '#00aced'
/>

export const IconNote = () => <Icon
  name= 'mode-edit'
  type= 'MaterialIcons'
  size={26}
  color= {LIGHT_GRAY}
  underlayColor= '#00aced'
/>