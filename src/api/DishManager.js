import ErrorType from '../constant/ErrorType';
import {
  isEmpty,
  isString,
  isRegularExpression,
} from './StringHelper'
import {
  ADD_DISH,
  GET_DISHES,
  LIKE,
  DISLIKE,
  COMMENT,
  GET_COMMENTS,
  GET_DISH_ID,
} from '../constant/HttpRequest';
import axios from 'axios';
import LocalStorage from '../store/local';

export default class DishManager {
  constructor () {}

  static async getDishes (data) {
    let url = GET_DISHES.URL;
    let request = GET_DISHES.REQUEST;

    console.log(url);
    const res = await axios.post(
      url,{
        ...data,
      },{
        headers: {
          request: request,
        },
    });

    return res;
  }

  static async addDish (
    data) {
    let url = ADD_DISH.URL;
    let request = ADD_DISH.REQUEST;
    
    console.log(url);
    console.log('data data: ',JSON.stringify(data));
    const res = await axios.post(
      url,{
        ...{
          author: data._id,
          name: data.name,
          intro:data.intro,
          ingredients:data.ingredients,
          steps:data.steps,
        },
      },{
        headers: {
          request: request,
        },
    });

    return res;
  }

  static async like (
    data) {
    let url = LIKE.URL;
    let request = LIKE.REQUEST;
    
    console.log(url);
    const res = await axios.post(
      url,{
        ...data,
      },{
        headers: {
          request: request,
        },
    });

    return res;
  }

  static async dislike (
    data) {
    let url = DISLIKE.URL;
    let request = DISLIKE.REQUEST;
    
    console.log(url);
    const res = await axios.post(
      url,{
        ...data,
      },{
        headers: {
          request: request,
        },
    });

    return res;
  }

  static async comment (
    data) {
    let url = COMMENT.URL;
    let request = COMMENT.REQUEST;
    
    console.log(url);
    const res = await axios.post(
      url,{
        ...data,
      },{
        headers: {
          request: request,
        },
    });

    return res;
  }

  static async getComments (
    data) {
    let url = GET_COMMENTS.URL;
    let request = GET_COMMENTS.REQUEST;
    
    console.log(url);
    const res = await axios.post(
      url,{
        ...data,
      },{
        headers: {
          request: request,
        },
    });

    return res;
  }

  static async getDish_ID (
    data) {
    console.log('getDish_ID nè: ',JSON.stringify(data));

    let url = GET_DISH_ID.URL;
    let request = GET_DISH_ID.REQUEST;
    
    console.log(url);
    const res = await axios.post(
      url,
      {_id: data},{
        headers: {
          request: request,
        },
    });

    return res;
  }

  
}