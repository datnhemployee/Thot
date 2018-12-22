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
import Connection from '../constant/connection'
import axios from 'axios';
import LocalStorage from '../store/local';

export default class Picture {
  static async get (id) {
    return await axios.post(
      Connection.defUrl() + 'Image',
      {
        id: id,
      },{
        timeout: timeout,
        headers: {
          request: 'get-picture',
        },
      });
  }
}