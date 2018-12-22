import ActionType from '../actions/actType';
import Message from '../constant/message';

const INITIAL_STATE = {}

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
      case ActionType.GET:
          if(!action.error) {
            return {
              ...state,
              ...{
                dishes: action.payload.dishes,
                page: action.payload.page,
                errType: undefined,
              }
            }
          } else {
            return {
              ...state,
              ...{
                errType: action.payload,
              }
            }
          }
      default:
        return {
          ...state,
        }
    }
}