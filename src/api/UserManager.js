import ErrorType, {
  INVALID_USERNAME,
  INVALID_PASSWORD,
  NO_RESPONSE,
} from '../constant/ErrorType';
import {
  isEmpty,
  isString,
  isRegularExpression,
} from './StringHelper'
import {
  LOG_IN_WITH_AUTH
} from '../constant/HttpRequest';
import axios from 'axios';
import LocalStorage from '../store/local';

export default class UserManager {
  constructor (
    {
      username,
      password,
    }) { 
    this.props = {
      token: String,
      auth: {
        username: username,
        password: password,
      },
      info: Object,
    }
    console.log('here too: '+ this.props.auth.username);
  }

  getUsername () {
    if(this.isRelevantUsername())
      return this.props.auth.username;
    return undefined;
  }
  getPassword () {
    if(this.isRelevantUsername())
      return this.props.auth.password;
    return undefined;
  }
  getUserInfo () {
    if(isRelevantInfo()) {
      return this.props.info;
    }
  }
  async getTokenFromLocal ( ) {
    try{
      let token = await LocalStorage.getToken();
    
      if(isString(token) &&
        !isEmpty(token)){
        return token;
      } 
    } catch (err) {
      // console.log(/**error */);
    }
  }

  async getTokenFromDB ( ) {
    username = this.getUsername();
    password = this.getPassword();

    let url = LOG_IN_WITH_AUTH.URL;
    let timeout = LOG_IN_WITH_AUTH.TIME_OUT;
    let request = LOG_IN_WITH_AUTH.REQUEST;

    // Check Username & password
    let res = await axios.post( 
      url,{
      },{
        timeout: timeout,
        auth: {
          username: username,
          password: password,
        },
        headers: {
          request: request,
        },
    });

    if(res.data){
      token = res.data.token;
      this.props.token = token;

      await LocalStorage.setToken(token);
      return token;
    } 

    throw new Error(NO_RESPONSE);
  }

  setUserInfo (info) {
    if(this.isRelevantInfo(info))
      this.props.info = {
        ...this.props.info,
        ...info,
      };
  }

  isRelevantInfo () {
    if (false)
      throw new Error();
    if(true)
      return true;
    return false;
  }
  isRelevantUsername () {
    try{
      return isRegularExpression(this.props.auth.username);
    } catch (err) {
      throw new Error(INVALID_USERNAME);
    }
  }
  isRelevantPassword () {
    try{
      return isRegularExpression(this.props.auth.password);
    } catch (err) {
      throw new Error(INVALID_PASSWORD);
    }
  }
}