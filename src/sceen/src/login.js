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
} from 'react-native';
import {connect } from 'react-redux';
import {
  inputUsername,
  inputPassword,
  logInNoToken,
  logInWithToken,
  getUserInfo,
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
    
  }
  async componentWillMount () {
    let {
      logInWithToken,
    } = this.props;

    // console.log(JSON.stringify(Connection.defUrl + Connection.defPath.logIn));
    // let res = await axios.post( 
    //   Connection.defUrl + Connection.defPath.logIn,{
    //   },{
    //     timeout: 3000,
    //     auth: {
    //       username: 'username',
    //       password: 'password',
    //     },
    //     headers: {
    //       request: 'log-in-with-auth',
    //     },
    // });
    // console.log(JSON.stringify(res));

    await logInWithToken ();
  }

  // async componentWillReceiveProps (nextProps) {
  //   let {
  //     logOut,
  //     getUserInfo,
  //     navigation,
  //   } = this.props;

  //   let {
  //     token
  //   } = nextProps;
  //   console.log('Nextprops: ' + JSON.stringify(nextProps));
  //     // if(token){
  //     // await getUserInfo(token);

  //     // // const {username} = this.props;
  //     // // if(username)
  //     // navigation.navigate('Home');  
  //     // logOut();
  //   // } 
  // }

  onRegister = () =>{
    const {
      navigation,
    } = this.props;
    navigation.navigate('Register');
  }


   formSubmitted = async () => {
    let {
      username,
      password,
      logInNoToken,
      navigation
    } = this.props;

    console.log('formSubmitted: ' + username);
      // navigation.navigate('Home');  
      navigation.navigate('Home',{username});  

    // await logInNoToken ({username,password});
  }

  usernameChange = async (val) => {
    let {
      username,
      usernameChange
    } = this.props;

    console.log('usernameChange: ' + val);
    console.log('usernameChange: ' + username);

    await usernameChange (val);
  }

  passwordChange = async (val) => {
    let {
      passwordChange,
    } = this.props;

    await passwordChange (val);
  }

  render() {
    let errType = {
      title:undefined,
      content:undefined,
    };
    if(this.props.errType){
      errType = {
        ...errType,
        ...this.props.errType,
      };
    }
    // log in with token and navigate to main screen 
    console.log('render: ' + this.props.username);

    // else navigate to login screen
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
    backgroundColor: RED,
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
    color: 'white',
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
    color: 'white',
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
    username: state.auth.username,
    password: state.auth.password,
    errType: state.auth.errType,
    info: state.auth.info,
  }
}

const mapDispatchToProps = (dispatch) => ({
  usernameChange: (username) => dispatch(inputUsername(username)),
  passwordChange: (password) => dispatch(inputPassword(password)),
  logInNoToken: (auth) => dispatch(logInNoToken(auth)),
  logInWithToken: () => dispatch(logInWithToken()),
  logOut: () => dispatch(logOut()),
  getUserInfo: (token) => dispatch(getUserInfo(token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(login);