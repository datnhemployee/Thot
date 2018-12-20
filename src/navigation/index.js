import home from '../sceen/src/home';
import login from '../sceen/src/login';
import register from '../sceen/src/register';

import { 
  createStackNavigator, 
} from "react-navigation";

export default RootStack = createStackNavigator({
  Login: login,
  Home: home,
  Register: register
},{
  initialRouteKey: 'Login',
  headerMode: 'none'
});