import ActionType from './actType';
import DishManager from '../api/DishManager';

const comment = (
  data, 
  // success,
  // failed
) => async (
  dispatch
) =>{
  try{
    const res = await DishManager.comment(data);
    if(!res.data.error){
      dispatch({
        type: ActionType.COMMENT,
      });
      // success();
    } else {
      await dispatch({
        type: ActionType.COMMENT,
        error: true,
      });
      // failed(res.data.error);
    }
  } catch (err) {
      console.log(err)
      await dispatch({
        type: ActionType.COMMENT,
        error: true,
      }); 
      // failed('Không thể kết nối server');
  }
}

const getComments = (
  data, 
  // success,
  // failed
) => async (
  dispatch
) =>{
  try{
    console.log('getComments',JSON.stringify(data));
    const res = await DishManager.getComments(data);
    console.log('getComments res',JSON.stringify(res));
    if(!res.data.error){
      dispatch({
        type: ActionType.GET_COMMENTS,
        payload: res.data,
      });
      // success();
    } else {
      await dispatch({
        type: ActionType.GET_COMMENTS,
        error: true,
      });
      // failed(res.data.error);
    }
  } catch (err) {
      console.log(err)
      await dispatch({
        type: ActionType.GET_COMMENTS,
        error: true,
      }); 
      // failed('Không thể kết nối server');
  }
}

export {
  comment,
  getComments,
};
