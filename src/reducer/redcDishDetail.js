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
    
    switch (action.type) {
    case ActionType.GET_DISH_ID:
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