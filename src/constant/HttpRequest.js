import Connection from './connection';

const Url = {
  LogIn: Connection.defUrl + Connection.defPath.logIn,
  getDishes: Connection.defUrl + Connection.defPath.getDishes,
  addDish: Connection.defUrl + Connection.defPath.addDish,
  dislike: Connection.defUrl + Connection.defPath.dislike,
  like: Connection.defUrl + Connection.defPath.like,
  Register: Connection.defUrl + Connection.defPath.register,
  Comment: Connection.defUrl + Connection.defPath.Comment,
  getComments: Connection.defUrl + Connection.defPath.getComments,
  getInfo_ID: Connection.defUrl + Connection.defPath.getInfo_ID,
  getInfo_NickName: Connection.defUrl + Connection.defPath.getInfo_NickName,
  getDish_ID: Connection.defUrl + Connection.defPath.getDish_ID,
}
const Time_Out = 3000;
const Post = {
  request: {
    LogInWithAuth: 'log-in-with-auth' ,
    LogInWithToken: 'log-in-with-token',
    GetInfoFromDatabase: 'get-info-from-database',
    Register: 'register',
    AddDish: 'add-dish',
    GetDishes: 'get-dishes',
  }
}

export const GET_DISH_ID = {
  URL: Url.getDish_ID,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetDishes,
}


export const GET_USER_INFO_ID = {
  URL: Url.getInfo_ID,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetDishes,
}

export const GET_USER_INFO_NICKNAME = {
  URL: Url.getInfo_NickName,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetDishes,
}

export const GET_COMMENTS = {
  URL: Url.getComments,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetDishes,
}

export const COMMENT = {
  URL: Url.Comment,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetDishes,
}

export const LIKE = {
  URL: Url.like,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetDishes,
}

export const DISLIKE = {
  URL: Url.dislike,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetDishes,
}

export const GET_DISHES = {
  URL: Url.getDishes,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetDishes,
}

export const ADD_DISH = {
  URL: Url.addDish,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.AddDish,
}
export const REGISTER = {
  URL: Url.LogIn,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.Register,
}
export const LOG_IN_WITH_AUTH = {
  URL: Url.LogIn,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.LogInWithAuth,
}

export const LOG_IN_WITH_TOKEN = {
  URL: Url.LogIn,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.LogInWithToken,
}

export const GET_INFO_FROM_DATABASE = {
  URL: Url.LogIn,
  TIME_OUT: Time_Out,
  REQUEST: Post.request.GetInfoFromDatabase,
}