import login from '../sceen/src/login';
import register from '../sceen/src/register';
import MainTabNavigator from './MainTabNavigator';

import { 
  createStackNavigator ,
} from "react-navigation";

export default RootStack = createStackNavigator({
  Login: login,
  Home: MainTabNavigator,
  Register: register
},{
  initialRouteKey: 'Login',
  headerMode: 'none'
});