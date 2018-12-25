import React, {Component} from 'react';
import {
  USERNAME_HOLDER_COLOR, 
  USERNAME_COLOR,
  PASSWORD_HOLDER_COLOR,
  PASSWORD_COLOR,
  SCREEN_SIZE,
  RED,
  GRAY,
  LIGHT_RED,
  LIGHT_GRAY,
  FONT,
} from '../../constant/style';
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {
  isString,
  isEmpty,
} from '../../api/StringHelper';
import { connect } from 'react-redux';
import TextInput from '../component/mTextInput';
import {
  addDish,
} from '../../actions/actDish';
import FAddRecipe from '../form/fAddRecipe';

const createFormData = (photo, body) => {
  const data = new FormData()

  data.append('photo', {
    name: photo.fileName,
    type: photo.type,
    uri:
      Platform.OS === 'android' ? photo.uri : photo.uri.replace('file://', ''),
  })

  Object.keys(body).forEach(key => {
    data.append(key, body[key])
  })

  return data
}

class AddRecipe extends Component {
  constructor (props) {
    super (props);

    this.getImage = this.getImage.bind(this);
    this.snap = this.snap.bind(this);
    this.send = this.send.bind(this);

    this.onChangeElement=this.onChangeElement.bind(this);
    this.onIngredientsChange=this.onIngredientsChange.bind(this);
    this.onIntroChange=this.onIntroChange.bind(this);
    this.onDeletePress=this.onDeletePress.bind(this);
    this.onAddPress=this.onAddPress.bind(this);
    this.onAddChanged=this.onAddChanged.bind(this);
    this.confirm=this.confirm.bind(this);
    this.onDishNameChange=this.onDishNameChange.bind(this);

    this.state = {
      recipe: '',
      dishName: '',
      intro: '',
      ingredients:'',
      listRecipe: [],
    }
  } 

  onDishNameChange(value) {
    this.setState({dishName:value});
  }
  onIntroChange (value) {
    this.setState({intro:value});
  }
  onIngredientsChange (value) {
    this.setState({ingredients:value});
  }
  confirm = () => {
    const {
      navigation,
      addDish,
      _id,
      token,
    } = this.props;

    console.log('navigation: '+ JSON.stringify(navigation));
    console.log('confirm _id: '+ JSON.stringify(_id));

    const {
      dishName,
      intro,
      ingredients,
      listRecipe,
    } = this.state;
    console.log('ingredients: '+ JSON.stringify(ingredients));
    addDish({
      _id,
      dishName,
      intro,
      ingredients,
      listRecipe,
    },(message)=>{
      ToastAndroid.show(message,ToastAndroid.SHORT);
      navigation.navigate('Home');
    },(message)=>{
      ToastAndroid.show(message,ToastAndroid.SHORT);
    })
  }
  onDeletePress = (index) => {
    const {
      listRecipe,
    } = this.state;
    console.log('index: '+ JSON.stringify(index));

    let temp = listRecipe.slice();
    temp = temp.slice(index+1);
    console.log('state: '+ JSON.stringify(this.state));
    console.log('temp: '+ JSON.stringify(temp));
    this.setState({listRecipe:temp.slice()});
  }
  onChangeElement = (val,index) => {
    const {
      listRecipe,
    } = this.state;

    const temp = listRecipe.slice();
    temp[index] = val;
    this.setState({listRecipe:temp.slice()});
  }
  onAddChanged (value) {
    console.log('recipe: '+ JSON.stringify(value));
    this.setState({recipe:value});
    console.log('state: '+ JSON.stringify(this.state));

  }
  onAddPress = () => {
    const {
      listRecipe,
      recipe,
    } = this.state;
    console.log('state: '+ JSON.stringify(this.state));
    console.log('recipe: '+ JSON.stringify(recipe));

    let temp = listRecipe.slice();
    temp.push(recipe);
    console.log('temp: '+ JSON.stringify(temp));

    this.setState({listRecipe:temp.slice()});
  }
  async send () {

    const res = await axios.get('http://192.168.56.1:8000/');
    const config = {
      onUploadProgress: function(progressEvent) {

        var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total )
  
        console.log(percentCompleted)
  
      }
    }
    console.log(res.data);

    if(this.state.photo.uri === img)
      alert('No image has been found.')
    else{
      await axios.post('http://192.168.56.1:8000/Upload',
        createFormData(this.state.photo, {}),
        config)
    }
  }
  async getImage () {
    const {
      img,
    } = this.props;

      const options = {
        noData: true,
      }
      ImagePicker.launchImageLibrary(options, response => {
        if (response.uri) {
          this.setState({ photo: response })
        }
      })
  }
  async snap () {
    const {
      img,
    } = this.props;

      const options = {
        noData: true,
      }
      ImagePicker.launchCamera(options, response => {
        if (response.uri) {
          this.setState({ photo: response })
        }
      })
  }

  render () {
    const {
      navigation
    } = this.props;
    const {
      listRecipe
    } = this.state;
    return (
      <View style={styles.container}>
        <FAddRecipe 
          onDishNameChange={this.onDishNameChange}
          getImage = {this.getImage}
          onIntroChange={this.onIntroChange}
          navigation = {navigation}
          listRecipe={listRecipe}
          onChangeElement={this.onChangeElement }
          onDeletePress={this.onDeletePress}
          onAddPress={this.onAddPress}
          onIngredientsChange={this.onIngredientsChange}
          onAddChanged={this.onAddChanged}
          confirm={this.confirm}
          // photo={}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

const mapStateToProps = (
  state) => {
   console.log('connect: ' + JSON.stringify(state));
 
   return {
    _id: state.auth._id, 
    token: state.auth.token, 
   }
 }
 
 const mapDispatchToProps = (dispatch) => ({
   addDish: (data,success,failed) => dispatch(addDish(data,success,failed)),
   logOut: () => dispatch(logOut()),
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
 )(AddRecipe);
