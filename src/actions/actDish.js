import ActionType from './actType';
import DishManager from '../api/DishManager';

const addDish = (
  data, 
  success,
  failed
) => async (
  dispatch
) =>{
  try{
    const res = await DishManager.addDish({
      _id: data._id,
      name: data.dishName,
      intro:data.intro,
      ingredients:data.ingredients,
      steps:data.listRecipe,
    });
    if(!res.data.error){
      dispatch({
        type: ActionType.ADD_DISH,
      });
      success(res.data.success);
    } else {
      await dispatch({
        type: ActionType.ADD_DISH,
        error: true,
      });
      failed(res.data.error);
    }
  } catch (err) {
      console.log(err)
      await dispatch({
        type: ActionType.ADD_DISH,
        error: true,
      }); 
      failed('Không thể kết nối server');
  }
}

const getDishes = (
  data, 
  success,
  failed
) => async (
  dispatch
) =>{
  try{
    console.log("addDish: 123 "+JSON.stringify(data));
    const res = await DishManager.getDishes({
      page: data.page,
      _id: data._id,
    });
    console.log("addDish: res "+JSON.stringify(res));
    if(!res.data.error){
      dispatch({
        type: ActionType.GET_DISHES,
        payload:{ 
          list: res.data,
        },
      });
      success(undefined);
    } else {
      await dispatch({
        type: ActionType.GET_DISHES,
        error: true,
      });
      failed(res.data.error);
    }
  } catch (err) {
      console.log(err)
      await dispatch({
        type: ActionType.GET_DISHES,
        error: true,
      }); 
      failed('Không thể kết nối server');
  }
}

const like = (
  data, 
  success,
  failed
) => async (
  dispatch
) =>{
  try{
    const res = await DishManager.like(data);
    if(!res.data.error){
      dispatch({
        type: ActionType.LIKE,
      });
      success(res.data);
    } else {
      await dispatch({
        type: ActionType.LIKE,
        error: true,
      });
      failed(res.data.error);
    }
  } catch (err) {
      console.log(err)
      await dispatch({
        type: ActionType.LIKE,
        error: true,
      }); 
      failed('Không thể kết nối server');
  }
}

const dislike = (
  data, 
  success,
  failed
) => async (
  dispatch
) =>{
  try{
    const res = await DishManager.dislike(data);
    if(!res.data.error){
      dispatch({
        type: ActionType.LIKE,
      });
      success();
    } else {
      await dispatch({
        type: ActionType.LIKE,
        error: true,
      });
      failed(res.data.error);
    }
  } catch (err) {
      console.log(err)
      await dispatch({
        type: ActionType.LIKE,
        error: true,
      }); 
      failed('Không thể kết nối server');
  }
}

const logOut = () => async (dispatch) => {
  dispatch({type: ActionType.LOG_OUT});
}

export {
  addDish,
  getDishes,
  logOut,
  like,
  dislike,
};
