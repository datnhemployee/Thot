import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {
  RED,
  LIGHT_GRAY,
  SCREEN_SIZE,
  FONT,
} from '../../constant/style';
import Button from '../component/Button'
import {
  IconSaved,
  IconNotSaved
} from '../../constant/picture'
import PostDish from '../component/PostDish'
import MainTab from '../component/MainTab'
import MainHeader from '../component/MainHeader'


const pic = require('../../img/default_pic.png')
export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 0,
      dishes: [{
        author: {
          id: 1,
          name: 'Dat Huu',
        },
        id: 1,
        pic: pic,
        isLike: true,
        isComment: false,
        isSave: true,
        likes: 12,
        comments: 13,
      },{
        author: {
          id: 2,
          name: 'abcd',
        },
        id: 2,
        pic: pic,
        isLike: false,
        isComment: true,
        isSave: false,
        likes: 1,
        comments: 13,
      }]
    }
    this.getMainTab =this.getMainTab.bind(this);
    this.getHeader =this.getHeader.bind(this);
    this.renderItem =this.renderItem.bind(this);
    this.getPost =this.getPost.bind(this);
    this.onEndReached =this.onEndReached.bind(this);

  }

  onEndReached () {
    const {
      page
    } = this.page;

  }

  getMainTab () {
    const {navigation} = this.props;
    return (
      <MainTab navigation={navigation} tabNumber={1}/>
    )
  }

  getHeader () {
    const {navigation} = this.props;
    return (
      <MainHeader navigation={navigation}/>
    )
  }

  renderItem (item) {
    const {
      navigation
    } = this.props;
    return (
      <View>
        <PostDish 
          dish = {item}
          navigation={navigation}
          />
      </View>
    )
  }

  getPost () {
    const {
      dishes,
    } = this.state;

    if(dishes){
      return (<FlatList
        style={{flex:8,marginBottom:5}}
        scrollEnabled={true}
        data={dishes}
        renderItem={({item}) => {
          console.log(JSON.stringify(item));
          return this.renderItem(item)}
        }
        // onEndReached={this.onEndReached}
        // onEndReachedThreshold={0.5}
        refreshing={false}
        // onRefresh={this.onRefresh}
        keyExtractor={(item,index) => 'post'+ index}
        // contentContainerStyle={}
      />);
    }
    return (<View></View>);
  }

  render () {
    
    return (
        <View style={{flex:10,borderColor:'black',borderWidth:1,backgroundColor:LIGHT_GRAY}}>
          <View style={{flex:2, backgroundColor: 'white'}}>
            {this.getHeader()}
            {this.getMainTab()}
          </View>
          <View style={{flex:8}}>
            {this.getPost()}
          </View>
        </View>
    );
  }

}
