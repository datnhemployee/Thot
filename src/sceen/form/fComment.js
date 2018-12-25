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
  KeyboardAvoidingView ,
  ToastAndroid,
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
  comment,
  getComments,
} from '../../actions/actComment';
import CommentList from '../component/CommentList';

const img = 'https://images.pexels.com/photos/371633/pexels-photo-371633.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500';

class fComment extends Component {
  constructor (props) {
    super (props);

    this.onAddPress=this.onAddPress.bind(this);
    this.onAddChanged=this.onAddChanged.bind(this);
    this.onEndReached=this.onEndReached.bind(this);
    this.onRefresh=this.onRefresh.bind(this);

    this.state = {
      content: '',
      photo:{
        uri: img,
      },
      refreshing: false,
    }
  }

  async onRefresh () {
    await this.onEndReached();
  }

  async onEndReached () {
    const {
      getComments,
      postID,
    } = this.props;
    this.setState({refreshing:true})
    await getComments({
      postID,
    });
    this.setState({refreshing:false})
  }

  async componentWillMount () {
    await this.onEndReached();
  }

  onAddChanged (value) {
    this.setState({content:value});
  }

  async onAddPress () {
    const {
      content,
    } = this.state;
    const {
      userID,
      postID,
      comment,
    } = this.props;
    console.log('onAddPress: '+ JSON.stringify(this.state));

    console.log('onAddPress: '+ JSON.stringify({
      content,
      userID,
      postID,
      }));

      comment({
      content,
      userID,
      postID,
      });
    await this.onEndReached();

  }

  getPhoto () {
    console.log('photo :'+ JSON.stringify(this.state.photo))
    let photo = this.state.photo;
    if(photo)
      return {uri: photo.uri};
    return {uri: img};
  }

  render () {
    
    const {
      navigation,
      listComment,
    } = this.props;
    console.log('Comment Comment: ',JSON.stringify(listComment))
    return (
        <View 
        style={{flex:1}}
        >
        <KeyboardAvoidingView 
          style={{flex:0}} 
          behavior="padding" 
          enabled = {false}
        >
          <CommentList 
            navigation={navigation}
            listElement={listComment}
            onAddPress={this.onAddPress}
            onAddChanged={this.onAddChanged}
            addPlaceHolder={'Bình luận của bạn'}
            onRefresh={this.onRefresh}
            onEndReached={this.onEndReached}
            refreshing={this.state.refreshing}
          />
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

const mapStateToProps = (
  state) => {
    return {
      list: state.dish.list, 
      token: state.auth.token, 
      userID: state.auth._id, 
      listComment: state.comments.listComment,
    }
  
 }
 
 const mapDispatchToProps = (dispatch) => ({
   comment: (data
    // ,
    // success,
    // failed
    ) => dispatch(comment(data
      // ,
      // success,
      // failed
      )),
    getComments: (data) => dispatch(getComments(data)),
    logOut: () => dispatch(logOut()),
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
 )(fComment);

