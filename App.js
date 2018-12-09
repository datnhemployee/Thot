import React, {Component} from 'react';
import { 
  createStackNavigator, 
  createAppContainer 
} from "react-navigation";
import home from './src/sceen/src/home';
import login from './src/sceen/src/login';
import store from './src/store/index';
import { Provider } from 'react-redux';

const RootStack = createStackNavigator({
  Login: login,
  Home: home,
},{
  initialRouteKey: 'Login',
});

const AppContainer = createAppContainer(RootStack);

class App extends Component {

  render() {
    return (
      <Provider store ={store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;




