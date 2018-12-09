const cnstTitle = {
  ERROR: {
    LOG_IN: 
      `Lỗi tại trang đăng nhập!`,
  },
  FAILED: {
    LOG_IN: 'Thất bại!',
  }
}
let a = new RegExp(/[^\w\s]/g);

const cnstContent = Object.freeze({
  ERROR: {
    LOG_IN: `\nVui lòng bình luận lên App Store` + 
      `\nđể nhận được hỗ trợ chi tiết.`,
  },
  FAILED: {
    LOG_IN: 
      `Mật khẩu hoặc tài khoản chưa đúng.` +
      `\nVui lòng bình luận lên App Store` + 
      `\nđể nhận được hỗ trợ chi tiết.`,
  }
});

export default Message = {
  LogInError: {
    title: cnstTitle.ERROR.LOG_IN,
    content: cnstContent.ERROR.LOG_IN,
  },
  LogInFai: {
    title: cnstTitle.FAILED.LOG_IN,
    content: cnstContent.FAILED.LOG_IN,
  }
}

export const System_Message = {
  Token: {
    setFailed: 
      'The value must be a string and'+
      'be specified.',
  }
}