import Error from "./ErrorType";

class Connection {
  constructor (
    Port = Connection.defPort,
    Url = Connection.defUrl,
      ) {
    this.Port = this.Port.bind(this);
    this.Url = this.Url.bind(this);

    this.Port = Port;
    this.Url = Url;
  }

  static get defPort () {
    return 8000;
  }

  static get defUrl () {
    return `http://192.168.56.1:`
      +`${Connection.defPort}/`;
  }

  static get defMethod () {
    return {
      Post: 'POST',
      Put: 'PUT',
    };
  }

  static get defPath () {
    return {
      logIn: 'LogIn',
      register: 'Register',
      dish: 'Dish',
      getDishes: 'GetDishes',
      addDish: 'AddDish',
      like: 'Like',
      dislike: 'Dislike',
      Comment: 'Comment',
      getComments: 'GetComments',
      getInfo_ID: 'GetUserByID',
      getInfo_NickName: 'GetUserByNickName',
      getDish_ID: 'GetDishByID'
    }
  }

  static get defToken (){
    return {
      // /** 
      //  * 5:57 PM 26/11/2018
      //  * Dat| does not work with current version of System
      // */ 
      // path: './tokenController',
      // path: 'F:/Mobile/Project/thottui/tokenController/',
      // file: 'token.txt'

      key: 'token',
    }
  }

  static get defHeader () {
    return {
    // Response
    
    // Request
    reqToken: 'Request-token',
    reqInfo: 'Request-user-info',
    }
  }

  static get defNotification () {
    return {
      LogInSuc_Tile: 'Thành công',
      LogInSuc: 'Đăng nhập thành công. Chờ giây lát.'+
      '\nNhấp chọn nút "Đóng" nếu muốn hủy đăng nhập.',
      LogInFai_Tile: 'Thất bại',
      LogInFai: 'Vui lòng kiểm tra lại tài khoản và mật khẩu.',
    }
  }

  set Port (val = Connection.defPort) {
    if(typeof val === 'number'){
      this.Port = val; 
      return;
    }
    throw Error.errPort;
  }

  set Url (val = Connection.defUrl) {
    if(typeof val === 'string'){
      this.Url = val+`:${this.Port}/`;
      return;
    }
    throw Error.errUrl;
  }
}

export default Connection;