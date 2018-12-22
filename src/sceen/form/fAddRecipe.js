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
  Image,
  Platform,
  ScrollView,
  KeyboardAvoidingView ,
  Keyboard,
  TextInput,
  FlatList,
} from 'react-native';
import {
  isString,
  isEmpty,
} from '../../api/StringHelper';
import { connect } from 'react-redux';
import MTextInput from '../component/mTextInput';
import {
  inputUsername,
  inputPassword,
} from '../../actions/actLogin';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import Button from '../component/Button';
import {
  IconCamera,
  IconPicture,
} from '../../constant/picture'
import RecipeList from '../component/MyList';

const img = 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500';

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

export default class fAddRecipe extends Component {
  constructor (props) {
    super (props);

    this.getImage = this.getImage.bind(this);
    this.snap = this.snap.bind(this);
    this.send = this.send.bind(this);

    this.onChangeElement=this.onChangeElement.bind(this);
    this.onDeletePress=this.onDeletePress.bind(this);
    this.onAddPress=this.onAddPress.bind(this);
    this.onAddChanged=this.onAddChanged.bind(this);
    this.confirm=this.confirm.bind(this);

    this.state = {
      recipe: '',
      photo:{
        uri: img,
      },
      listRecipe: [],
    }
  }

  confirm = () => {
    const {
      navigation,
    } = this.props;
    navigation.navigate('Home')
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

  getPhoto () {
    console.log('photo :'+ JSON.stringify(this.state.photo))
    let photo = this.state.photo;
    if(photo)
      return {uri: photo.uri};
    return {uri: img};
  }

  render () {
    let {
      /**
       * @var {function} this.props.onUsernameChange 
       * @description Change the state `username` when 
       *              user type in the `field username`.
       * @return void
       * @see login {./screen/src/}
       */
      onUsernameChange,

      /**
       * @var {function} this.props.onSubmitForm 
       * @description to get `token` and `user info`  
       *              from server.
       * @return void
       * @see login.js {./screen/src/}
       */
      getImage,

    } = this.props;

    let {
      listRecipe,
    } = this.state;
    return (
        <View 
        style={{flex:1}}
        >
        <KeyboardAvoidingView 
          style={{flex:0}} 
          behavior="padding" 
          enabled = {false}
        >
        <ScrollView 
          // style={{flex:1}}
          >
          <MTextInput
            style = {{
              flex: 0.1,
            }}
            name={"Dish"}
            placeholder={"Tên món ăn"}
            onChangeText={onUsernameChange}
            sercure={false}
          />
          <Image
            style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,resizeMode: 'contain'}}
            source={this.getPhoto()}
          />
          
          <View style={styles.container}>
          <Button 
            flex = {1}
            customIcon={IconPicture()}
            customValue={'Từ thư viện'}
            txtStyle={{
              fontFamily:FONT.segoeUIL,
              color: RED,}}
            onPress={this.getImage}
            />
          <Button 
            flex = {1}
            customIcon={IconCamera()}
            customValue={'Chụp Ảnh'}
            txtStyle={{
              fontFamily:FONT.segoeUIL,
              color: RED,}}
            onPress={this.snap}
            />
          </View>
          <TextInput
            style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,}}
            multiline={true}
            placeholder={'Giới thiệu về món ăn'}
          />
          <TextInput
            style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,}}
            multiline={true}
            placeholder={'Nguyên liệu của món ăn'}
          />
          <RecipeList 
            listElement={listRecipe}
            onChangeElement={this.onChangeElement }
            onDeletePress={this.onDeletePress}
            onAddPress={this.onAddPress}
            onAddChanged={this.onAddChanged}
            addPlaceHolder={'Thêm bước làm'}
          />
          <TouchableOpacity
              style = {styles.button}
              onPress = {this.confirm} // to parent container
            >
              <Text
                style = {styles.txtLogIn}
              >
                Đăng
              </Text>
          </TouchableOpacity>
          <View style={{ height: 60 }} />
        </ScrollView>
      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // paddingVertical: 20
    // flex: 1
  },
  txtLogIn: {
    fontFamily: FONT.segoeUIL,
    color: 'black'
  }
});
