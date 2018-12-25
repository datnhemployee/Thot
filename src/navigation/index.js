import login from '../sceen/src/login';
import register from '../sceen/src/register';
import MainTabNavigator from './MainTabNavigator';

import { 
  createSwitchNavigator ,
} from "react-navigation";

export default RootStack = createSwitchNavigator({
  Login: login,
  Home: MainTabNavigator,
  Register: register
},{
  initialRouteKey: 'Login',
  headerMode: 'none'
});