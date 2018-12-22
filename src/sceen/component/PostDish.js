import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image
} from 'react-native';
import {
  DEFAULT_PIC,
  IconSaved,
  IconNotSaved,
  IconLove,
  IconLoveClicked,
  IconChat,
  IconChatCliked,
} from '../../constant/picture';
import {
  save,
} from '../../actions/actPost'
import Connection from '../../constant/connection'
import {
  Avatar
} from 'react-native-elements'
import Button from './Button';
import PictureHelper from '../../api/PictureHelper'
import { SCREEN_SIZE, LIGHT_GRAY } from '../../constant/style';

const pic = require('../../img/default_pic.png')

export default class PostDish extends Component{
  constructor (props) {
    super(props)

    this.getAvartar = this.getAvartar.bind(this);
    this.getDishPicture = this.getDishPicture.bind(this);
    this.getLike = this.getLike.bind(this);
    this.getComment = this.getComment.bind(this);
    this.getSave = this.getSave.bind(this);
    this.onLikePress = this.onLikePress.bind(this);
    this.onCommentPress = this.onCommentPress.bind(this);
    this.onSavePress = this.onSavePress.bind(this);

    this.state = {
      isLike: this.props.dish.isLike,
      isComment: this.props.dish.isComment,
      isSave: this.props.dish.isSave,
    }
  }
  
  async getAvartar () {
    const {
      dish,
    } = this.props;

    return dish.pic;
    // return await PictureHelper.get(dish.author.avatar);
  }

  async getDishPicture () {
    const {
      dish,
    } = this.props;

    return dish.pic;
    // return await PictureHelper.get(dish.picture);
  }

  getLike () {
    const {
      isLike,
    } = this.state;
    if(isLike)
      return <IconLoveClicked /> 
    return <IconLove/>
  }

  getComment () {
    const {
      isComment,
    } = this.state;
    if(isComment)
      return <IconChatCliked /> 
    return <IconChat/>
  }
  
  getSave () {
    const {
      isSave,
    } = this.state;
    if(isSave)
      return <IconSaved /> 
    return <IconNotSaved/>
  }

  onCommentPress () {
    const {
      isComment
    } = this.state;
    const {
      navigation
    } = this.props;
    let val = !isComment;
    this.setState({isComment:val})
    navigation.navigate('Comment');
  }
  onLikePress () {
    const {
      isLike
    } = this.state;
    let val = !isLike;
    this.setState({isLike:val})
  }
  onSavePress () {
    const {
      isSave
    } = this.state;
    let val = !isSave;
    this.setState({isSave:val})
  }

  render () {
    let {
      dish,
      navigation,
    } = this.props;
    console.log('navigation: '+ JSON.stringify(navigation))

    let avatar =  this.getAvartar();
    let picture =  this.getDishPicture();
    console.log('avatar ' + JSON.stringify(avatar));
    return (
      <View style={{backgroundColor:'white',marginTop: 5,paddingTop: 5,paddingBottom: 5}}>
        <View style={{flexDirection: 'row'}}>
          <Avatar
            size="small"
            rounded
            source={avatar}
            onPress={() => {navigation.navigate('UserDetail',{author:dish.author.id})}}
            activeOpacity={0.7}
          />
          <Text style={{margin: 5,alignContent:'center'}}>{dish.author.name}</Text>
          <Button 
            flex = {1}
            customIcon = {this.getSave()}
            onPress = {this.onSavePress}
            justifyContent = {'flex-end'}
            alignItems = {'center'}
          />
        </View>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Recipe')}}>
          <Image 
            style={{flex:1,width:SCREEN_SIZE.W,height:SCREEN_SIZE.H/3,resizeMode: 'contain'}}
            source={pic}
          />
          <View style={{flexDirection: 'row',justifyContent:'space-between'}}>
            <Text>{dish.likes} người thích công thức này</Text>
            <Text>{dish.comments} bình luận</Text>
          </View>
        </TouchableOpacity>
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
            customIcon = {this.getComment()}
            onPress = {this.onCommentPress}
            justifyContent = {'center'}
            alignItems = {'center'}
          />
        </View>
      </View>
    );
  }
}
