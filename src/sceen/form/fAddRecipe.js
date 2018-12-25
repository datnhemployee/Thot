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
import axios from 'axios';
import Button from '../component/Button';
import {
  IconCamera,
  IconPicture,
} from '../../constant/picture'
import RecipeList from '../component/MyList';

const img = 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500';



export default class fAddRecipe extends Component {
  constructor (props) {
    super (props);
    
  }

  getPhoto () {
    // let photo = this.props;
    // if(photo)
    //   return {uri: photo.uri};
    return {uri: img};
  }

  render () {
    let {
      onDishNameChange,
      listRecipe,
      onChangeElement,
      onDeletePress,
      onAddPress,
      onAddChanged,
      onIntroChange,
      onIngredientsChange,
      getImage,
      snap,
      confirm,
    } = this.props;

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
            onChangeText={onDishNameChange}
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
            onPress={getImage}
            />
          <Button 
            flex = {1}
            customIcon={IconCamera()}
            customValue={'Chụp Ảnh'}
            txtStyle={{
              fontFamily:FONT.segoeUIL,
              color: RED,}}
            onPress={snap}
            />
          </View>
          <TextInput
            style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,borderRadius:5,borderWidth:2,borderColor:LIGHT_GRAY}}
            multiline={true}
            placeholder={'Giới thiệu về món ăn'}
            onChangeText={onIntroChange}
          />
          <TextInput
            style={{flex:7,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,borderRadius:5,borderWidth:2,borderColor:LIGHT_GRAY}}
            multiline={true}
            placeholder={'Nguyên liệu của món ăn'}
            onChangeText={onIngredientsChange}
          />
          <RecipeList 
            listElement={listRecipe}
            onChangeElement={onChangeElement }
            onDeletePress={onDeletePress}
            onAddPress={onAddPress}
            onAddChanged={onAddChanged}
            addPlaceHolder={'Thêm bước làm'}
          />
          <TouchableOpacity
              style = {styles.button}
              onPress = {confirm} // to parent container
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
    flexDirection: 'row',
  },
  txtLogIn: {
    fontFamily: FONT.segoeUIL,
    color: 'white',
    fontSize: 20,
    backgroundColor: LIGHT_RED,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});
