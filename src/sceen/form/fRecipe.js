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
  IconChat,
  IconLoveClicked,
  IconLove,
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

export default class fRecipe extends Component {
  constructor (props) {
    super (props);

    const {
      isLike,
    } = this.props;

    this.state = {
      isLike
    }

    this.onCommentPress = this.onCommentPress.bind(this);
    this.onLikePress = this.onLikePress.bind(this);
  }

  getPhoto () {
    console.log('photo :'+ JSON.stringify(this.state.photo))
    let photo = this.state.photo;
    if(photo)
      return {uri: photo.uri};
    return {uri: img};
  }

  getLike () {
    const {
      isLike
    } = this.state;
    if(isLike)
      return IconLoveClicked()
    return IconLove();
  }

  onCommentPress () {
    const {
      navigation
    } = this.props;
    navigation.navigate('Comment')
  }

  onLikePress () {
    const {
      isLike
    } = this.state;
    const temp = !isLike
    this.setState({isLike:temp});
  }

  renderElement (item,index) {
    return (
      <TextInput
          style = {{
            flex: 0.1,
          }}
          placeholder={"Bước làm..."}
          value={item}
          onChangeText={()=>{}}
          editable={false}
          sercure={false}
      />
    )
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

      name,
      gredients,
      steps,
      intro,
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
          <TextInput
            style = {{
              flex: 0.1,
            }}
            name={"Dish"}
            placeholder={"Tên món ăn"}
            value={name}
            onChangeText={()=>{}}
            editable={false}
            sercure={false}
          />
          <Image
            style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,resizeMode: 'contain'}}
            source={this.getPhoto()}
          />
          
          <View style={styles.container}>
            <TextInput
              style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,}}
              multiline={true}
              value={intro}
              editable={false}
              placeholder={'Chưa có giới thiệu'}
            />
            <TextInput
              style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,}}
              multiline={true}
              value={gredients}
              editable={false}
              placeholder={'Chưa có nguyên liệu'}
            />
            <FlatList 
              style={styles} 
              data={steps}
              renderItem={({item,index})=>this.renderElement(item,index)}
              refreshing={true}
            />
            <View style={{flexDirection:'row',borderTopColor: LIGHT_GRAY,borderTopWidth: 1,}}>
              <Button 
                flex = {1}
                customIcon = {this.getLike()}
                onPress = {this.onLikePress}
                justifyContent = {'center'}
                alignItems = {'center'}
              />
              <Button 
                flex = {1}
                customIcon = {IconChat()}
                onPress = {this.onCommentPress}
                justifyContent = {'center'}
                alignItems = {'center'}
              />
            </View>
            <View style={{ height: 60 }} />
          </View>
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
