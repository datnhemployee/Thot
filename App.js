import React, {Component} from 'react';
import { 
  createAppContainer 
} from "react-navigation";
import RootStack from './src/navigation/index';
import store from './src/store/index';
import { Provider } from 'react-redux';



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




