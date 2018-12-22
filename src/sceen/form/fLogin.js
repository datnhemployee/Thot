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
import MTextInput from '../component/mTextInput';
import {
  inputUsername,
  inputPassword,
} from '../../actions/actLogin';


export default class fLogin extends Component {
  constructor (props) {
    super (props);
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
       * @var {function} this.props.onSubmitForm 
       * @description to get `token` and `user info`  
       *              from server.
       * @return void
       * @see login.js {./screen/src/}
       */
      onSubmitForm,

    } = this.props;

    return (
      <View style={styles.container}>
        <MTextInput
              style = {{
                flex: 0.1,
              }}
              name={"username"}
              placeholder={"Tài khoản"}
              onChangeText={onUsernameChange}
              sercure={false}
            />
        <MTextInput
              style = {{
                flex: 0.1,
              }}
              name={"password"}
              placeholder={"Mật khẩu"}
              onChangeText={onPasswordChange}
              sercure={true}
            />
        <TouchableOpacity
            style = {styles.button}
            onPress = {onSubmitForm} // to parent container
          >
            <Text
              style = {styles.txtLogIn}
            >
              Đăng Nhập
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
  // button:{
  //   flex: 0.1,
  // },
  txtLogIn: {
    fontFamily: FONT.segoeUIL,
    color: 'white'
  }
});



