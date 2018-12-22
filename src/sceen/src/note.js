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
import NoteDish from '../component/NoteDish'
import MainTab from '../component/MainTab'
import MainHeader from '../component/MainHeader'


const pic = require('../../img/default_pic.png')
export default class Note extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 0,
      notes: [{
        dish: {
          name:'Phở',
          author:'Dat Huu',
          notes: 'gì đó đó',
        }
      },{
        dish: {
          name:'Phở',
          author:'B',
          notes: 'gì đó đó',
        }
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
      <MainTab navigation={navigation} tabNumber={2}/>
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
    console.log('item' + JSON.stringify(item))
    return (
      <View>
        <NoteDish 
          note = {item}
          onChangeText={()=>{}}
          navigation={navigation}
          />
      </View>
    )
  }

  getPost () {
    const {
      notes,
    } = this.state;

    if(notes){
      return (<FlatList
        style={{flex:8,marginBottom:5}}
        scrollEnabled={true}
        data={notes}
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
