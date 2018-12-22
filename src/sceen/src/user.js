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
import { Header } from 'react-navigation';
import Button from '../component/Button';
import {
  IconCamera,
  IconPicture,
} from '../../constant/picture'

const img = 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500';

const createFormData = (photo, body) => {
  const data = new FormData()

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  })

  Object.keys(body).forEach(key => {
    data.append(key, body[key])
  })

  return data
}

export default class User extends Component {
  constructor (props) {
    super (props);

    this.getImage = this.getImage.bind(this);
    this.snap = this.snap.bind(this);
    this.send = this.send.bind(this);

    this.state = {
      photo:{
        uri: img,
      },
    }
  }


  async send () {

    const res = await axios.get('http://192.168.56.1:8000/');
    const config = {
      onUploadProgress: function(progressEvent) {

        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
  
        console.log(percentCompleted)
  
      }
    }
    console.log(res.data);

    if(this.state.photo.uri === img)
      alert('No image has been found.')
    else{
      await axios.post('http://192.168.56.1:8000/Upload',
        createFormData(this.state.photo, {}),
        config)
    }
    

  }
  
  async getImage () {
    const {
      img,
    } = this.props;

      const options = {
        noData: true,
      }
      ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
          this.setState({ photo: response })
        }
      })
  }

  async snap () {
    const {
      img,
    } = this.props;

      const options = {
        noData: true,
      }
      ImagePicker.launchCamera(options, response => {
        if (response.uri) {
          this.setState({ photo: response })
        }
      })
  }

  getPhoto () {
    console.log('photo :'+ JSON.stringify(this.state.photo))
    let photo = this.state.photo;
    if(photo)
      return {uri: photo.uri};
    return {uri: img};
  }

  render () {
    let {
      /**
       * @var {function} this.props.onUsernameChange 
       * @description Change the state `username` when 
       *              user type in the `field username`.
       * @return void
       * @see login {./screen/src/}
       */
      onUsernameChange,

      /**
       * @var {function} this.props.onPasswordChange 
       * @description Change the state `password` when 
       *              user type in the `field password`.
       * @return void
       * @see login.js {./screen/src/}
       */
      onPasswordChange,

      /**
       * @var {function} this.props.onPasswordChange 
       * @description Change the state `password` when 
       *              user type in the `field password`.
       * @return void
       * @see login.js {./screen/src/}
       */
      onConfirmPasswordChanged,

      /**
       * @var {function} this.props.onPasswordChange 
       * @description Change the state `password` when 
       *              user type in the `field password`.
       * @return void
       * @see login.js {./screen/src/}
       */
      onEmailChange,

      /**
       * @var {function} this.props.onPasswordChange 
       * @description Change the state `password` when 
       *              user type in the `field password`.
       * @return void
       * @see login.js {./screen/src/}
       */
      onNickNameChange,

      /**
       * @var {function} this.props.onPasswordChange 
       * @description Change the state `password` when 
       *              user type in the `field password`.
       * @return void
       * @see login.js {./screen/src/}
       */
      onPhoneNumberChange,

      /**
       * @var {function} this.props.onPasswordChange 
       * @description Change the state `password` when 
       *              user type in the `field password`.
       * @return void
       * @see login.js {./screen/src/}
       */
      onAddressChange,

      /**
       * @var {function} this.props.onSubmitForm 
       * @description to get `token` and `user info`  
       *              from server.
       * @return void
       * @see login.js {./screen/src/}
       */
      getImage,

    } = this.props;

    let {
      // keyboardAvoidingViewKey,
    } = this.state;
    return (
        <View 
        style={{flex:1}}
        >
        <KeyboardAvoidingView 
      style={{flex:0}} 
      behavior="padding" 
      // key={keyboardAvoidingViewKey}
      // keyboardVerticalOffset = {0}
      enabled = {false}
      >
        <ScrollView 
          // style={{flex:1}}
          >
          <Image
            style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,resizeMode: 'contain'}}
            source={this.getPhoto()}
          />
          <View style={styles.container}>
          <Button 
            flex = {1}
            customIcon={IconPicture()}
            customValue={'Từ thư viện'}
            txtStyle={{
              fontFamily:FONT.segoeUIL,
              color: RED,}}
            onPress={this.getImage}
            />
          <Button 
            flex = {1}
            customIcon={IconCamera()}
            customValue={'Chụp Ảnh'}
            txtStyle={{
              fontFamily:FONT.segoeUIL,
              color: RED,}}
            onPress={this.snap}
            />
          <TouchableOpacity
              style = {styles.button}
              onPress = {this.makeFriend} // to parent container
            >
              <Text
                style = {styles.txtLogIn}
              >
                Kết bạn
              </Text>
          </TouchableOpacity>
          </View>
          <Text>{name}</Text>
          <Text>{email}</Text>
          <Text>{address}</Text>
          <Text>{email}</Text>
           
          <TextInput
            style = {{
              flex: 0.1,
            }}
            name={"email"}
            placeholder={"Email"}
            editable={false}
            value={email}
            sercure={phone}
          />
          <View style={{ height: 60 }} />
        </ScrollView>
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
