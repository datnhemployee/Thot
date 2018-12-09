export default ErrorType  = {
  Client: {
    LogIn: {
      title: 'Lỗi phần mềm!',
      content: 'Phần mềm tại máy xuất hiện lỗi' +
      '\nQuý khách xin vui lòng để lại tình trạng' +
      '\nmáy mình thông qua App Store. Xin cảm ơn.',
    }
  },
  Server: {
    LogIn: {
      title: 'Máy chủ không phản hồi!',
      content: 'Không nhận được phản hồi từ máy chủ.' +
      '\nQuý khách xin vui lòng để lại tình trạng' +
      '\nmáy mình thông qua App Store. Xin cảm ơn.',
    }
  },
  INVALID_USERNAME:'Sai tài khoản',
  INVALID_PASSWORD:'Sai mật khẩu',
  NO_RESPONSE:'Không phản hồi',
  NO_LOCAL_TOKEN:'Không token từ thiết bị',
}