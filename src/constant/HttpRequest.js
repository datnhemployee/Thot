import Connection from './connection';

const Url = {
  LogIn: Connection.defUrl + Connection.defPath.logIn,
}
const Time_Out = 3000;
const Post = {
  request: {
    LogInWithAuth: 'log-in-with-auth' ,
    LogInWithToken: 'log-in-with-token',
    GetInfoFromDatabase: 'get-info-from-database',
    Register: 'register',
  }
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