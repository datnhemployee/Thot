import home from '../sceen/src/home';
import note from '../sceen/src/note';
import user from '../sceen/src/user';
import edit from '../sceen/src/edit';
import addRecipe from '../sceen/src/addRecipe';
import recipe from '../sceen/src/recipe';
import Comment from '../sceen/src/Comment';

import { 
  createStackNavigator, 
} from "react-navigation";

export default MainTabNavigator = createStackNavigator({
  Home: home,
  Note: note,
  User: user,
  Recipe: recipe,
  AddRecipe: addRecipe,
  Comment: Comment,
  Edit: edit,
},{
  initialRouteKey: 'Home',
  headerMode: 'none'
});