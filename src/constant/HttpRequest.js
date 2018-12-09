import Connection from './connection';

const Url = {
  LogIn: Connection.defUrl +
    Connection.defPath.logIn,
}
const Time_Out = 3000;
const Post = {
  'request-name': {
    LogInWithAuth: 'Log In With Auth' ,
    LogInWithToken: 'Log In With Token',
  }
}

export const LOG_IN_WITH_AUTH = {
  URL: Url.LogIn,
  TIME_OUT: Time_Out,
  REQUEST: Post['request-name'].LogInWithAuth,
}

// export const LOG_IN_WITH_TOKEN = {
//   URL: Url.LogIn,
//   TIME_OUT: Time_Out,
//   HEADER: Post.header.LogInWithAuth,
//   AUTH: {
//     username: String,
//     password: String,
//   }
// }