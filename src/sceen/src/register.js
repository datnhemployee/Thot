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
  ToastAndroid,

  Platform,
} from 'react-native';
import {
  isString,
  isEmpty,
} from '../../api/StringHelper';
import { connect } from 'react-redux';
import {
  register,
} from '../../actions/actLogin';
import FRegister from '../form/fRegister';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios'
import Connection from '../../constant/connection'

// const img = 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500';
const img = Connection.defUrl+'photo_1545762842899_IMG_20181220_034429';

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

class Register extends Component {
  constructor (props) {
    super (props);
    this.state = {
      username: String,
      password: String,
      confirm: String,
      email: String,
      nickName: String,
      phone: String,
      address: String,
      photo: {
        uri: img,
      }
    }
    this.onUsernameChange=this.onUsernameChange.bind(this);
    this.onPasswordChange=this.onPasswordChange.bind(this);
    this.onConfirmPasswordChanged=this.onConfirmPasswordChanged.bind(this);
    this.onEmailChange=this.onEmailChange.bind(this);
    this.onNickNameChange=this.onNickNameChange.bind(this);
    this.onPhoneNumberChange=this.onPhoneNumberChange.bind(this);
    this.onAddressChange=this.onAddressChange.bind(this);

    this.onConfirmPress=this.onConfirmPress.bind(this);

    this.send=this.send.bind(this);
    this.getImage=this.getImage.bind(this);
    this.snap=this.snap.bind(this);
  } 

  async send () {
    const config = {
      onUploadProgress: function(progressEvent) {
        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
        console.log(percentCompleted)
      }
    }
    if(this.state.photo.uri === img)
      alert('No image has been found.')
    else{
      await axios.post('http://192.168.56.1:8000/Upload',
        createFormData(this.state.photo, {}),
        config)
    }
  }
  
  async getImage () {
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
      const options = {
        noData: true,
      }
      ImagePicker.launchCamera(options, response => {
        if (response.uri) {
          this.setState({ photo: response })
        }
      })
  }

  onUsernameChange (value) {
    this.setState({username:value});
  }
  onPasswordChange (value) {
    this.setState({password:value},()=>{
      if(this.state.confirm!==this.state.password)
      ToastAndroid.showWithGravity(
        'Mật khẩu chưa trùng khớp.',
        ToastAndroid.CENTER,
        ToastAndroid.SHORT);
     else {
      ToastAndroid.showWithGravity(
        'Mật khẩu đã trùng khớp.',
        ToastAndroid.CENTER,
        ToastAndroid.SHORT);
    }
    });
  }
  onConfirmPasswordChanged (value) {
    this.setState({confirm:value},()=>{
      if(this.state.confirm!==this.state.password)
      ToastAndroid.showWithGravity(
        'Mật khẩu chưa trùng khớp.',
        ToastAndroid.CENTER,
        ToastAndroid.SHORT);
     else {
      ToastAndroid.showWithGravity(
        'Mật khẩu đã trùng khớp.',
        ToastAndroid.CENTER,
        ToastAndroid.SHORT);
    }
    });
  }
  onEmailChange (value) {
    this.setState({email:value});
  }
  onNickNameChange (value) {
    this.setState({nickName:value});
  }
  onPhoneNumberChange (value) {
    this.setState({phone:value});
  }
  onAddressChange (value) {
    this.setState({address:value});
  }

  onConfirmPress () {
    const {
      register,
      navigation,
    } = this.props;

    const {
      username,
      password,
      email,
      nickName,
      phone,
      address,
    } = this.state;
    console.log(JSON.stringify({
      username,
      password,
      email,
      nickName,
      phone,
      address,
    }));
    register({
      username,
      password,
      email,
      nickName,
      phone,
      address,
    },(message)=>{
      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.CENTER,
        ToastAndroid.SHORT);
      console.log('res: '+ JSON.stringify(navigation));

      navigation.navigate('Login');
    },
    (message)=>{
      ToastAndroid.showWithGravity(
        message,
        ToastAndroid.CENTER,
        ToastAndroid.SHORT);
    }
    );
  }

  render () {
    try{
    const {
      navigation
    } = this.props;
    return (
      <View style={styles.container}>
        <FRegister 
          snap={this.snap}
          send={this.send}
          getImage={this.getImage}
          photo={this.state.photo}

          onUsernameChange={this.onUsernameChange}
          onPasswordChange={this.onPasswordChange}
          onConfirmPasswordChanged={this.onConfirmPasswordChanged}
          onEmailChange={this.onEmailChange}
          onNickNameChange={this.onNickNameChange}
          onPhoneNumberChange={this.onPhoneNumberChange}
          onAddressChange={this.onAddressChange}
          onConfirmPress={this.onConfirmPress}
        />
      </View>
    );
    } catch (err) {
      console.log(err);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const mapStateToProps = (
  state) => {
   console.log('connect: ' + JSON.stringify(state));
 
   return {
    _id: state.auth._id,
    token: state.auth.token,
    username: state.auth.username,
    password: state.auth.password,
    errType: state.auth.errType,
    email: state.auth.email,
    nickName: state.auth.nickName,
    phone: state.auth.phone,
    address: state.auth.address,
   }
 }
 
 const mapDispatchToProps = (dispatch) => ({
   register: (data,success,failed) => dispatch(register(data,success,failed)),
   logOut: () => dispatch(logOut()),
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
 )(Register);


