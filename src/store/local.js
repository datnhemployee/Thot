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

  static set props (val) {
    return {
      token: {
        ...LocalStorage.props,
        ...val,
      }
    }
  }

  static get props () {
    return {
      token: {
        name: 'token',
        value: String,
      }
    }
  }

  static async getToken () {
    try{
      let val = await AsyncStorage.getItem(
        name,
      );
      this.props = {value: val};
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
        let {name} = this.props.token;

        await AsyncStorage.removeItem(name);
        await AsyncStorage.setItem(name,value);

        LocalStorage.props.value = {value};
    }
    else throw new Error(
      System_Message.setFailed
    );
  }
}