import { AsyncStorage }from 'react-native';
import message ,{ 
  System_Message,
} from '../constant/message';
import {
  NO_LOCAL_TOKEN,
} from '../constant/ErrorType';
import {
  isString,
  isEmpty
} from '../api/StringHelper';

export default class LocalStorage {
  constructor () {}

  static async getToken () {
    try{
      let val = await AsyncStorage.getItem('token');
      return val;
    } catch(err){
      throw new Error(NO_LOCAL_TOKEN);
    }
  }
  
  static async setToken (
    value
  ) {
    if( 
        isString(value) &&
        !isEmpty(value)
      ) {

        await AsyncStorage.removeItem('token');
        await AsyncStorage.setItem('token',value);
    }
    else throw new Error(
      System_Message.setFailed
    );
  }
}