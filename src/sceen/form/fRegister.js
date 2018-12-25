import React, {Component} from 'react';
import {
  SCREEN_SIZE,
  RED,
  FONT,
} from '../../constant/style';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView ,
} from 'react-native';
import {
  isString,
  isEmpty,
} from '../../api/StringHelper';
import MTextInput from '../component/mTextInput';
import axios from 'axios';
import Button from '../component/Button';
import {
  IconCamera,
  IconPicture,
} from '../../constant/picture'

const img = 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500';
export default class fRegister extends Component {
  constructor (props) {
    super (props);
  }

  render () {
    let {
      onUsernameChange,
      onPasswordChange,
      onConfirmPasswordChanged,
      onEmailChange,
      onNickNameChange,
      onPhoneNumberChange,
      onAddressChange,
      onConfirmPress,

      photo,
      snap,
      send,
      getImage,
    } = this.props;

    return (
        <View 
        style={{flex:1}}
        >
        <ScrollView 
          style={{flex:1}}
          >
          <Image
            style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,resizeMode: 'contain'}}
            source={photo}
          />
          <View style={styles.container}>
          <Button 
            flex = {1}
            customIcon={IconPicture()}
            customValue={'Từ thư viện'}
            txtStyle={{
              fontFamily:FONT.segoeUIL,
              color: RED,}}

            onPress={getImage}
            />
          <Button 
            flex = {1}
            customIcon={IconCamera()}
            customValue={'Chụp Ảnh'}
            txtStyle={{
              fontFamily:FONT.segoeUIL,
              color: RED,}}

            onPress={snap}
            />
          <Button 
            flex = {1}
            customIcon={IconCamera()}
            customValue={'Gửi'}
            txtStyle={{
              fontFamily:FONT.segoeUIL,
              color: RED,}}

            onPress={send}
            />
          </View>
           <MTextInput
            style = {{
              flex: 0.1,
              
            }}
            name={"username"}
            placeholder={"Tên Tài khoản"}
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
          <MTextInput
            style = {{
              flex: 0.1,
            }}
            name={"confirm"}
            placeholder={"Xác nhận lại mật khẩu"}
            onChangeText={onConfirmPasswordChanged}
            sercure={true}
          />
          <MTextInput
            style = {{
              flex: 0.1,
            }}
            name={"name"}
            placeholder={"Tên của bạn"}
            onChangeText={onNickNameChange}
            sercure={false}
          />
          <MTextInput
            style = {{
              flex: 0.1,
            }}
            name={"email"}
            placeholder={"Email"}
            onChangeText={onEmailChange}
            sercure={false}
          />
          <MTextInput
            style = {{
              flex: 0.1,
            }}
            name={"address"}
            placeholder={"Địa chỉ"}
            onChangeText={onAddressChange}
            sercure={false}
          />
          <MTextInput
            style = {{
              flex: 0.1,
            }}
            name={"phone"}
            placeholder={"Điện thoại"}
            onChangeText={onPhoneNumberChange}
            sercure={false}
            keyboardType={'number-pad'}
          />
          <TouchableOpacity
              style = {styles.button}
              onPress = {onConfirmPress} // to parent container
            >
              <Text
                style = {styles.txtLogIn}
              >
                Đăng kí
              </Text>
          </TouchableOpacity>
          <View style={{ height: 60 }} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20
    // flex: 1
    flexDirection: 'row'
  },
  txtLogIn: {
    flex: 2,
    fontSize: 20,
    fontFamily: FONT.segoeUIL,
    backgroundColor: RED,
    textAlign: 'center',
    color: 'white',
  }
});



