const Port = 8000;
const Msg = {
  LogIn: "LogIn",
}
const Url = `http://192.168.56.1:${Port}/`;

const Method = {
  Post: 'POST',
  Put: 'PUT',

}

const Path = {
  logIn: 'logIn',
}

const Header = {
  // Response
  
  // Request
  reqToken: 'Request token',
}

const token = {

  // /** 
  //  * 5:57 PM 26/11/2018
  //  * Dat| does not work with current version of System
  // */ 
  // path: './tokenController',
  // path: 'F:/Mobile/Project/thottui/tokenController/',
  // file: 'token.txt'

  key: 'token',
}

const notification = {
  LogInSuc_Tile: 'Xin Chú Ý',
  LogInSuc: 'Đăng nhập thành công. Chờ giây lát.'+
  '\nNhấp chọn bất kì để hủy đăng nhập.',
  LogInFai_Tile: 'Xin Chú Ý',
  LogInFai: 'Vui lòng kiểm tra lại tài khoản và mật khẩu.'+
  '\nNhấp chọn bất kì để tắt thông báo',
}

export {
  Port, 
  Msg, 
  Url, 
  Method, 
  Header,
  Path,
  token,
  notification,
}