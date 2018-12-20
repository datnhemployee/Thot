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
import TextInput from '../component/textInput';
import {
  inputUsername,
  inputPassword,
} from '../../actions/actLogin';


export default class fRegister extends Component {
  constructor (props) {
    super (props);

    this.getImage = this.getImage.bind(this);
  }

  async getImage () {
    const {
      img,
    } = this.props;

    // console.log('url = ' + await picker.openPicker({
    //   mediaType: 'image',
    //   multiple: true,
    //   cropping: true,
    //   width: 300,
    //   height: 400
    // }));
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
       * @var {function} this.props.onSubmitForm 
       * @description to get `token` and `user info`  
       *              from server.
       * @return void
       * @see login.js {./screen/src/}
       */
      getImage,

    } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity
            style = {styles.button}
            onPress = {this.getImage} // to parent container
          >
            <Text
              style = {styles.txtLogIn}
            >
              Lấy Hình Từ bộ sưu tập
            </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button:{
    flex: 0.1,
  },
  txtLogIn: {
    fontFamily: FONT.segoeUIL,
    color: 'white'
  }
});



