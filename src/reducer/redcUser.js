import ActionType from '../actions/actType';
import Message from '../constant/message';

const INITIAL_STATE = {
}

export default function (
  state = INITIAL_STATE,
  action,
) {
    console.log('===============================');
    console.log('action.error: '+ (action.error));
    console.log('action.type: '+ (action.type ));
    console.log('===============================');
    // console.log('INPUT_USERNAME_CHANGES: '+ (ActionType.INPUT_USERNAME_CHANGES ));
    // console.log('action.type: '+ (action.type === ActionType.INPUT_USERNAME_CHANGES));
    
    switch (action.type) {
    case ActionType.GET_USER_INFO_ID:
    case ActionType.GET_USER_INFO_NICKNAME:
        if(!action.error) {
          return {
              ...action.payload,
          }
        } 
    case ActionType.LOG_OUT:
      return {}
    default:
      return {
        ...state,
      }
  }
}