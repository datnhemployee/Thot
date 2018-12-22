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
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView ,
  Keyboard,
  TextInput,
  FlatList,
} from 'react-native';
import {
  isString,
  isEmpty,
} from '../../api/StringHelper';
import { connect } from 'react-redux';
import MTextInput from '../component/mTextInput';
import {
  inputUsername,
  inputPassword,
} from '../../actions/actLogin';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import Button from '../component/Button';
import {
  IconCamera,
  IconPicture,
} from '../../constant/picture'
import CommentList from '../component/CommentList';

const img = 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500';

export default class fAddRecipe extends Component {
  constructor (props) {
    super (props);

    this.onAddPress=this.onAddPress.bind(this);
    this.onAddChanged=this.onAddChanged.bind(this);
    const {
      comments,
    } = this.props;

    this.state = {
      comment: '',
      photo:{
        uri: img,
      },
      comments,
    }
  }

  onAddChanged (value) {
    console.log('recipe: '+ JSON.stringify(value));
    this.setState({comment:value});
    console.log('state: '+ JSON.stringify(this.state));

  }

  onAddPress = () => {
    const {
      comments,
      comment,
    } = this.state;
    console.log('state: '+ JSON.stringify(this.state));

    let temp = comments.slice();
    temp.push({author:'Dat',content:comment});
    console.log('temp: '+ JSON.stringify(temp));

    this.setState({comments:temp.slice()});
  }

  getPhoto () {
    console.log('photo :'+ JSON.stringify(this.state.photo))
    let photo = this.state.photo;
    if(photo)
      return {uri: photo.uri};
    return {uri: img};
  }

  render () {
    const {
      navigation,
    } = this.props;
    let {
      comments,
    } = this.state;
    return (
        <View 
        style={{flex:1}}
        >
        <KeyboardAvoidingView 
          style={{flex:0}} 
          behavior="padding" 
          enabled = {false}
        >
          <CommentList 
            navigation={navigation}
            listElement={comments}
            onAddPress={this.onAddPress}
            onAddChanged={this.onAddChanged}
            addPlaceHolder={'Bình luận của bạn'}
          />
      </KeyboardAvoidingView>
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
    fontFamily: FONT.segoeUIL,
    color: 'black'
  }
});
