import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  ToastAndroid,
} from 'react-native';
import {
  DEFAULT_PIC,
  IconLove,
  IconLoveClicked,
  IconChat,
  IconChatCliked,
} from '../../constant/picture';
import {
  Avatar
} from 'react-native-elements'
import Button from './Button';
import PictureHelper from '../../api/PictureHelper'
import { SCREEN_SIZE, LIGHT_GRAY } from '../../constant/style';
import {connect } from 'react-redux';
import { like, dislike } from '../../actions/actDish';

const pic = require('../../img/default_pic.png')

class PostDish extends Component{
  constructor (props) {
    super(props)

    this.getAvartar = this.getAvartar.bind(this);
    this.getDishPicture = this.getDishPicture.bind(this);
    this.getLike = this.getLike.bind(this);
    this.onLikePress = this.onLikePress.bind(this);
    this.onCommentPress = this.onCommentPress.bind(this);

    this.state = {
      isLike: this.props.dish.isLike,
    }
  }
  
  async getAvartar () {
    return pic;
  }

  async getDishPicture () {
    return pic;
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
    return <IconChat/>
  }
  
  onCommentPress () {
    const {
      navigation,
      dish,
    } = this.props;
    navigation.navigate('Comment',{postID:dish._id});
  }

  async onLikePress () {
    const {
      isLike
    } = this.state;

    let {
      onLikePress,
      dish,
      user,
      like,
      dislike,
    } = this.props;
    console.log('like',JSON.stringify(dish));
    console.log('like',JSON.stringify(user));

    if(!isLike){
      await like({
        _id: user,
        postID: dish._id,
      },
      ()=>{
        let val = !isLike;
        this.setState({isLike:val})
        onLikePress();
      },
      ()=>{
        ToastAndroid.show('Cơ sở dữ liệu bị lỗi.');
      }
      );
    }
    else {
      await dislike({
        _id: user,
        postID: dish._id,
      },()=>{
        let val = !isLike;
        this.setState({isLike:val})
        onLikePress();
      },
      ()=>{
        ToastAndroid.show('Cơ sở dữ liệu bị lỗi.');
      });
    }
  }

  render () {
    let {
      dish,
      navigation,
    } = this.props;
    console.log('navigation: '+ JSON.stringify(dish))

    let avatar =  this.getAvartar();
    let picture =  this.getDishPicture();
    console.log('avatar ' + JSON.stringify(avatar));
    return (
      <View style={{backgroundColor:'white',marginTop: 5,paddingTop: 5,paddingBottom: 5}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {navigation.navigate('User',{nickName:dish.author})}}>
          {/* <Avatar
            size="small"
            rounded
            source={avatar}
            
            activeOpacity={0.7}
          /> */}
            <Text style={{margin: 5,alignContent:'center',fontSize: 20}}> @{dish.author}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Recipe',{_id:dish._id})}}>
          <Text style={{marginLeft: 5,fontSize: 30}}> {dish.name}</Text>
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

const mapStateToProps = (
  state) => {
   return {
    list: state.dish.list, 
    token: state.auth.token, 
    user: state.auth._id, 
   }
  
 }
 
 const mapDispatchToProps = (dispatch) => ({
    like: (data,success,failed) => dispatch(like(data,success,failed)),
    dislike: (data,success,failed) => dispatch(dislike(data,success,failed)),
    logOut: () => dispatch(logOut()),
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
 )(PostDish);