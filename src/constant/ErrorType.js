export default ErrorType  = {
  Client: {
    LogIn: {
      WrongToken: {
        id: 'cliWrongToken',
        title: 'Token hiện không khả dụng!',
        content: 'Token của bạn đã bị sai lệch' +
        '\nQuý khách xin vui lòng để lại tình trạng' +
        '\nmáy mình thông qua App Store. Xin cảm ơn.',
      }
    },
    Register: {
      id: 'cliValidUsernameOrEmail',
      title: 'Tài khoản hoặc email đã đăng kí.',
      content: 'Vui lòng thử lại với tài khoản hoặc email khác.' +
      '\nxin cảm ơn.',
    }
  },
  Database: {
    LogIn: {
      FindToken: {
        id: 'dbFindToken',
        title: 'Không thể tìm kiếm với Token!',
        content: 'Database hoặc máy chủ đang lỗi' +
        '\nChúng tôi sẽ khắc phục trong thời gian sớm' +
        '\nXin cảm ơn.',
      }
    },
  },
  Server: {
      LogIn: {
        NoResponse: {
        id: 'serNoResponse',
        title: 'Máy chủ không phản hồi!',
        content: 'Không nhận được phản hồi từ máy chủ.' +
        '\nQuý khách xin vui lòng để lại tình trạng' +
        '\nmáy mình thông qua App Store. Xin cảm ơn.',
        },
      },
      Register: {
        NoResponse: {
        id: 'serNoResponse',
        title: 'Máy chủ không phản hồi!',
        content: 'Không nhận được phản hồi từ máy chủ.' +
        '\nQuý khách xin vui lòng để lại tình trạng' +
        '\nmáy mình thông qua App Store. Xin cảm ơn.',
      }
    }
  },
  STRING_EMPTY:'Chuỗi trống',
  NOT_STRING: ' Không phải chuỗi',
  INVALID_USERNAME:'Sai tài khoản',
  INVALID_PASSWORD:'Sai mật khẩu',
  NO_RESPONSE:'Máy chủ không phản hồi',
  NO_LOCAL_TOKEN:'Không có token từ thiết bị',
  CAN_T_GET_USER_INFO: 'Không thể lấy được thông tin người dùng này',
  WRONG_AUTH_TO_GET_TOKEN: 'Không thể thực thi tiếp do tài khoản hoặc mật khẩu.',
  WRONG_TYPE_USERNAME_OR_PASSWORD: 'Tài khoản và mật khẩu chỉ có thể là chữ hoặc số',
}