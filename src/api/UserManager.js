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
  GET_USER_INFO_ID,
  GET_USER_INFO_NICKNAME
} from '../constant/HttpRequest';
import axios from 'axios';
import LocalStorage from '../store/local';

export default class UserManager {
  constructor () {}

  static async getUserInfo_ID (ID) {
    let url = GET_USER_INFO_ID.URL;
    let timeout = GET_USER_INFO_ID.TIME_OUT;
    let request = GET_USER_INFO_ID.REQUEST;

    return res = await axios.post(
      url,{
        ID,
      },{
        timeout: timeout,
        headers: {
          request: request,
        },
    });
  }

  static async getUserInfo_nickName (nickName) {
    let url = GET_USER_INFO_NICKNAME.URL;
    let timeout = GET_USER_INFO_NICKNAME.TIME_OUT;
    let request = GET_USER_INFO_NICKNAME.REQUEST;

    return res = await axios.post(
      url,{
        nickName,
      },{
        timeout: timeout,
        headers: {
          request: request,
        },
    });
  }

  static async getToken () {
    try{
      if(!this.isRelevantToken()) {
        token = await this.logInWithToken();
      }  
      if(!this.isRelevantToken()) {
        token = await this.logInWithAuth();
      }
      throw new Error(ErrorType.WRONG_AUTH_TO_GET_TOKEN);
    } catch (err) {
      throw new Error(err);
    }
  }

  /**
     * @returns { Object || Object } 
     * {
     *  _id: (gởi đi trong mỗi lần truy cập để biết người dùng),
     *  token: (
     *    + Gởi đi trong mỗi lần truy cập để biết người dùng
     *    + Lưu vào trong Async Storage để đăng nhập lần sau
     *  ),
     * }
     * ||
     * {
     *  error: {String }(thông tin chi tiết)
     * }
     */
  static async register (data) {
    let url = REGISTER.URL;
    let timeout = REGISTER.TIME_OUT;
    let request = REGISTER.REQUEST;

    return res = await axios.post(
      url,{
        ...data,
      },{
        timeout: timeout,
        headers: {
          request: request,
        },
    });
  }

  static async logInWithToken () {
      let token = await LocalStorage.getToken();
    
      console.log('token: '+ token)
      let url = LOG_IN_WITH_TOKEN.URL;
      let timeout = LOG_IN_WITH_TOKEN.TIME_OUT;
      let request = LOG_IN_WITH_TOKEN.REQUEST;

      return res = await axios.post(
        url,{
          token: token,
        },{
          timeout: timeout,
          headers: {
            request: request,
          },
      });
  }

  static async logInWithAuth (
      username,
      password,
    ) {
      // Có thể kiểm tra sai chỗ này
    // if(!this.isRelevantUsername(username) ||
    // !this.isRelevantPassword(password))
    //   throw new Error(
    //     ErrorType.WRONG_TYPE_USERNAME_OR_PASSWORD
    //   );

    let url = LOG_IN_WITH_AUTH.URL;
    let timeout = LOG_IN_WITH_AUTH.TIME_OUT;
    let request = LOG_IN_WITH_AUTH.REQUEST;

    return await axios.post( 
      url,{
        auth: {
          username: username,
          password: password,
        },
      },{
        timeout: timeout,
        headers: {
          request: request,
        },
    });
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