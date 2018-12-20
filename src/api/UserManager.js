import ErrorType from '../constant/ErrorType';
import {
  isEmpty,
  isString,
  isRegularExpression,
} from './StringHelper'
import {
  LOG_IN_WITH_AUTH,
  LOG_IN_WITH_TOKEN,
  REGISTER,
  GET_INFO_FROM_DATABASE,

} from '../constant/HttpRequest';
import axios from 'axios';
import LocalStorage from '../store/local';

export default class UserManager {
  constructor () {}

  static async getToken () {
    try{
      if(!this.isRelevantToken()) {
        token = await this.getTokenFromLocal();
      }  
      if(!this.isRelevantToken()) {
        token = await this.getTokenFromDB();
      }
      throw new Error(ErrorType.WRONG_AUTH_TO_GET_TOKEN);
    } catch (err) {
      throw new Error(err);
    }
  }
  static async getUserInfo (token) {
    try{
      let url = GET_INFO_FROM_DATABASE.URL;
      let timeout = GET_INFO_FROM_DATABASE.TIME_OUT;
      let request = GET_INFO_FROM_DATABASE.REQUEST;

      let res = await axios.post( 
        url,{
          token: token,
        },{
          timeout: timeout,
          headers: {
            request: request,
          },
      });
  
      if(res.data){
        return res.data.info;
      } 
  
      throw new Error(ErrorType.NO_RESPONSE);

    } catch (err) {
      throw new Error(err);
    }
  }

  static async getTokenFromLocal () {
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

  static async getTokenFromDB (
      username,
      password,
    ) {
      // Có thể kiểm tra sai chỗ này
    if(!this.isRelevantUsername(username) ||
    !this.isRelevantPassword(password))
      throw new Error(
        ErrorType.WRONG_TYPE_USERNAME_OR_PASSWORD
      );

    let url = REGISTER.URL;
    let timeout = REGISTER.TIME_OUT;
    let request = REGISTER.REQUEST;

    // 'http://192.168.56.1:8000/LogIn'
    console.log('url: '+ url);
    // Check Username & password
    let res = await axios.post( 
      url,{
        auth: {
          username: username,
          password: password,
        },
        nickName: 'Dat huu',
      },{
        timeout: timeout,
        headers: {
          request: request,
        },
    });
    console.log('res: '+ JSON.stringify(res.data));

    if(res.data){
      token = res.data.token;

      await LocalStorage.setToken(token);
      return token;
    } 

    throw new Error(ErrorType.NO_RESPONSE);
  }

  static isRelevantInfo () {
    if (false)
      throw new Error();
    if(true)
      return true;
    return false;
  }
  static isRelevantUsername (username) {
    try{
      return isRegularExpression(username);
    } catch (err) {
      console.log(err);
      throw new Error(ErrorType.INVALID_USERNAME);
    }
  }
  static isRelevantPassword (password) {
    try{
      return isRegularExpression(password);
    } catch (err) {
      throw new Error(ErrorType.INVALID_PASSWORD);
    }
  }
  static isRelevantToken (token) {
    try{
      return isString(token)&&!isEmpty(token);
    } catch (err) {
      throw new Error(ErrorType.INVALID_TOKEN);
    }
  }
}