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
import {
  getUserInfo_nickName,
} from '../../actions/actUser'

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

class User extends Component {
  constructor (props) {
    super (props);

    this.state = {
      photo:{
        uri: img,
      },
    }
  }

  async componentWillMount () {
    const {
      navigation,
      getUserInfo_nickName,
    } = this.props;
    console.log('User nè: ',JSON.stringify(navigation));
    const nickName = navigation.getParam('nickName','');
    await getUserInfo_nickName(nickName);
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
      _id,
      email,
      nickName,
      phone,
      address,
    } = this.props;

    console.log('blallal: ',email,
      nickName,
      phone,
      address,);
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
            <Text style={styles.lable}> #Tên:</Text>
            <Text style={styles.content}> {nickName}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.lable}> #Email:</Text>
            <Text style={styles.content}> {email}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.lable}> #Địa chỉ:</Text>
            <Text style={styles.content}> {address}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.lable}> #Điện Thoại:</Text>
            <Text style={styles.content}> {phone}</Text>
          </View>
          <View style={{ height: 60 }} />
        </ScrollView>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flex: 1,
  },
  lable: {
    fontFamily: FONT.segoeUIL,
    color: 'black',
    fontSize: 20,
  },
  content: {
    fontFamily: FONT.segoeUIL,
    color: 'black',
    fontSize: 20,
  }
});

const mapStateToProps = (
  state) => {
   console.log('connect: ' + JSON.stringify(state));
   return {
    _id: state.user._id,
    email: state.user.email,
    nickName: state.user.nickName,
    phone: state.user.phone,
    address: state.user.address,
   }
 }
 
 const mapDispatchToProps = (dispatch) => ({
  getUserInfo_nickName: (data) => dispatch(getUserInfo_nickName(data)),
  logOut: () => dispatch(logOut()),
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
 )(User);