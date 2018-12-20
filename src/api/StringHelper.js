import {
  WHITE_SPACE,
  NOT_WORDS_AND_DIGITS_ONLY,
} from '../constant/RegularExpression';
import {
  NOT_STRING,
  STRING_EMPTY,
} from '../constant/ErrorType';

export const isString = (val) => {
  if(typeof val === 'string')
    return true;
  return false;
}

export const isEmpty = (val) => {
  if(val === '')
    return true;
  return false;
}

export const hasWhiteSpace = (val) => {
  if(!isString(val)){
    throw new Error(NOT_STRING);
  }
  if(isEmpty(val)){
    throw new Error(STRING_EMPTY);
  }
  return WHITE_SPACE.test(val);
}

export const isRegularExpression = (val) => {
  console.log('isString: '+isString(val));

  if(!isString(val)){
    throw new Error(NOT_STRING);
  }
  console.log('isString: '+isEmpty(val));
  if(isEmpty(val)){
    throw new Error(STRING_EMPTY);
  }

  console.log(' NOT_WORDS_AND_DIGITS_ONLY.test(val): '+ NOT_WORDS_AND_DIGITS_ONLY.test(val));
  return !NOT_WORDS_AND_DIGITS_ONLY.test(val);
}