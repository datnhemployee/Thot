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
import LineTextNavigation from '../component/LineTextNavigation'
// import RecipeList from '../component/RecipeList'
import Spinner from '../component/Spinner'
import IntroDish from '../component/IntroDish'
import TagDish from '../component/TagDish'

const pic = require('../../img/default_pic.png')
export default class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      Saved:false,
      something:1,
    }
    this.getSaveIcon =this.getSaveIcon.bind(this);
    this.savePost =this.savePost.bind(this);
    this.increment =this.increment.bind(this);
    this.decrement =this.decrement.bind(this);
    // this.renderItem =this.renderItem.bind(this);

  }

  increment () {
    let {
      something
    } = this.state;
    let increase = something + 1;
    this.setState({something:increase})
  }

  decrement () {
    let {
      something
    } = this.state;
    let increase = something - 1;
    this.setState({something:increase})
  }

  renderItem(item) {
    
    console.log('recipe: '+JSON.stringify(item));
    return (
      <View style={{width:SCREEN_SIZE.W/3,borderColor:'red',borderWidth:1}}>
        <Text style={{borderColor:'blue',borderWidth:1}}>{item}</Text>
      </View>
    );
  }

  getSaveIcon () {
    let {
      Saved,
    } = this.state;
    if(Saved)
    {  console.log('getSaveIcon: ' + JSON.stringify(this.state));
      return IconSaved();}
    return IconNotSaved();
  }

  savePost () {
    let {
      Saved
    } = this.state;
    let notSaved= !Saved;
    console.log('before: ' + JSON.stringify(this.state));
     this.setState({Saved: notSaved});
     console.log('after: ' + JSON.stringify(this.state));
    }
  render () {
    let filter = ['a','b','c','d','e','f','g','h']
    return (
        <View style={{flex:1,borderColor:'black',borderWidth:1}}>
          <View style={{flex:2,flexDirection:'row',
            borderColor:'black',
            borderWidth:1,
            }}>
            <View style={{flex:2,flexDirection:'column',
              borderColor:'black',
              borderWidth:1,
              paddingLeft:5,
            }}>
              <Text style={{flex:2,color:'yellow'}}>Phở</Text>
              <Text style={{flex:2,color:'red'}}>Tái Nạm</Text>
            </View>

            <View style={{flex:2,flexDirection:'row',
              borderColor:'black',
              borderWidth:1,
              justifyContent:'flex-end',
              alignItems:'center',
            }}>
              <Button 
              flex = {1}
              customIcon={this.getSaveIcon()}
              customValue={'Lưu'}
              txtStyle={{
                fontFamily:FONT.segoeUIL,
                color: RED,}}
              onPress={this.savePost}
              />
              <Button 
              flex = {1}
              customIcon={IconSaved()}
              customValue={''}
              txtStyle={{}}
              onPress={()=>{}}
              />
            </View>
          </View>
          <Image
             style={{flex:7,width:null,height:null,resizeMode: 'contain'}}
            source={pic}
          />
          <IntroDish 
            id ={1}
            author={'Dat Huu'}
            dishType={'Món ăn mặn'}
            place={'Quán Bà Hoàng'}
            placeID={1}
            price={20000}
            unit={'tô'}
          />
          <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',padding:5}}>
            <TagDish 
              Tags={['Món chính','Món ngày', 'Món ăn mặn', 'Món ăn no','Cả ngày']}
              // Tags={['Món chính']}
              />
          </View>
          <View style={{flex:1,justifyContent:'space-between',flexDirection:'row',padding:5}}>
            <Text>12 người bày tỏ cảm xúc</Text>
            <Text>12 đã lưu</Text>
          </View>
          <View style={{flex:1,justifyContent:'space-between',flexDirection:'row'}}>
            <Button 
                flex = {1}
                alignItems={'flex-start'}
                justifyContent={'flex-start'}
                customIcon={undefined}
                customValue={'Chi tiết'}
                txtStyle={{
                  fontFamily:FONT.segoeUIL,
                  color: 'yellow',}}
                onPress={()=>{}}
              />
            <Button 
              flex = {1}
              alignItems={'flex-start'}
              justifyContent={'flex-end'}
              customIcon={undefined}
              customValue={'Bảng giá'}
              txtStyle={{
                fontFamily:FONT.segoeUIL,
                color: 'green',}}
              onPress={()=>{}}
            />
          </View>
          <View style={
            {flex:1,flexDirection:'row',
            borderColor:'black',
            borderWidth:1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            }}>
            <Button 
              flex = {1}
              alignItems={'center'}
              justifyContent={'center'}
              customIcon={this.getSaveIcon()}
              customValue={12}
              txtStyle={{
                fontFamily:FONT.segoeUIL,
                color: RED,}}
              onPress={this.savePost}
            />
             <Button 
              flex = {1}
              alignItems={'center'}
              justifyContent={'center'}
              customIcon={this.getSaveIcon()}
              customValue={12}
              txtStyle={{
                fontFamily:FONT.segoeUIL,
                color: RED,}}
              onPress={this.savePost}
            />
          </View>
          <View style={
            {flex:5,
            borderColor:'black',
            borderWidth:1,
            }}>
           
            <View style={{flex:1,
            flexDirection:'row',
            borderColor:'black',
            borderWidth:1,
            }}> 
            {/** btnSearch navigate to 'Search' */}
              <Button 
                flex = {0.1}
                customIcon={IconSaved()}
                customValue={''}
                txtStyle={{}}
                onPress={()=>{}}
                />
              <FlatList
                horizontal={true}
                style={{flex:0.9,marginBottom:5}}
                scrollEnabled={true}
                data={filter}
                renderItem={({item}) => {
                  console.log(JSON.stringify(item));
                  return this.renderItem(item)}
                }
                // onEndReached={this.onEndReached}
                // onEndReachedThreshold={0.5}
                refreshing={false}
                // onRefresh={this.onRefresh}
                keyExtractor={(item,index) => item + index}
                // contentContainerStyle={}
              />
            </View>
            <View style={{flex:4,
              borderColor:'black',
              borderWidth:1,
            }}> 
              <Spinner 
                increment={this.increment}
                value={this.state.something}
                decrement={this.decrement}
              />
            </View>
          </View>
        </View>
    );
  }

}
