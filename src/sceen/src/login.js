import React, {Component} from 'react';
import Connection from '../../constant/connection';
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
  DEFAULT_PIC
} from '../../constant/picture'
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import {connect } from 'react-redux';
import {
  logInWithAuth,
  // logInWithToken,
  logOut,
} from '../../actions/actLogin';
import FLogin from '../form/fLogin';
import axios from 'axios';


class login extends Component {
  
  constructor(props) {
    super(props);

    this.usernameChange = this.usernameChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.formSubmitted = this.formSubmitted.bind(this);
    this.onRegister = this.onRegister.bind(this);

    this.state = {
      username:'',
      password:'',
    }
  }

  // async componentWillMount() {
  //   const {
  //     logInWithToken
  //   } = this.props;
    
  //   await logInWithToken((data) => {
  //       ToastAndroid.show(message,ToastAndroid.SHORT);
  //       navigation.navigate('Home',{...data});  
  //     }, (message) => {
  //         ToastAndroid.show(message,ToastAndroid.SHORT);
  //   });
  // }

  onRegister = () =>{
    const {
      navigation,
    } = this.props;
    navigation.navigate('Register');
  }


   formSubmitted = async () => {
    let {
      logInWithAuth,
      navigation
    } = this.props;

    let {
      username,
      password,
    } = this.state;

    console.log('username ',username, 'password ',password);

    await logInWithAuth (
    {
      username,
      password
    }, (message) => {
      ToastAndroid.show(message,ToastAndroid.SHORT);
      navigation.navigate('Home');  

    }, (message) => {
        ToastAndroid.show(message,ToastAndroid.SHORT);
      });
  }

  usernameChange (val){
    const {
      username,
    } = this.state;
    this.setState({username:val});
  }

  passwordChange  (val) {
    this.setState({password:val});
  }

  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.header}>
          <Text style={styles.label}> Thớt </Text>
        </View>
        <View style={styles.body}>
          <FLogin
            onSubmitForm={this.formSubmitted}
            onUsernameChange={this.usernameChange}
            onPasswordChange={this.passwordChange}
          />
        </View>
        <View style={styles.footer}>
        <TouchableOpacity
          style = {styles.button}
          onPress = {this.onRegister} // to parent container
        >
          <Text
            style = {styles.txtLogIn}
          >
            Đăng kí
          </Text>
      </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: 'white',
    // flexDirection: 'column'
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  label: {
    fontFamily:FONT.uvfVerner,
    fontSize: 66,
    color: RED,
    // fontStyle: 'italic',
  },
  body: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  txtLogIn: {
    fontSize: 20,
    textAlign: 'center',
    color: 'green',
  },
  btnLogIn: {
    flex: 1,
    width: SCREEN_SIZE.W * 3/5,
    margin: 10,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

const mapStateToProps = (
 state) => {
  console.log('connect: ' + JSON.stringify(state));

  return {
    token: state.auth.token,
    _id: state.auth._id,
  }
}

const mapDispatchToProps = (dispatch) => ({
  logInWithAuth: (auth,success,failed) => dispatch(logInWithAuth(auth,success,failed)),
  // logInWithToken: (success,failed) => dispatch(logInWithToken(success,failed)),
  logOut: () => dispatch(logOut()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(login);