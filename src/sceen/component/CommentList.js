import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {
  DEFAULT_PIC,
  IconSaved,
  IconNotSaved,
  IconAdd,
} from '../../constant/picture';
import MInputText from './mTextInput';
import RecipeDetail from './RecipeDetail';
import Button from './Button';
import MyList from './MyList';
import { LIGHT_GRAY } from '../../constant/style';

export default class CommentList extends MyList {
  constructor (props){
    super (props);

    this.state = {
      refresh: true,
    }
  }

  renderElement (item,index) {
    const { navigation} = this.props;
    console.log('item',JSON.stringify(item))
    return (
      <View>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('User',{nickName:item.author})}}>
          <Text style={{color:'black'}}> @ {item.author}</Text>
        </TouchableOpacity>
        <Text >{item.content}</Text>
      </View>
    )
  }

  render () {
    const {
      listElement,
      onAddPress,
      onAddChanged,
      addPlaceHolder,
      onRefresh,
      onEndReached,
      refreshing,
    } = this.props;
    
    return (
      <View>
        <FlatList 
          style={styles} 
          data={listElement}
          onRefresh={onRefresh}
          onEndReachedThreshold={0.5}
          onEndReached={onEndReached}
          renderItem={({item,index})=>this.renderElement(item,index)}
          refreshing={refreshing}
          keyExtractor={(item,index)=>JSON.stringify(item)+index}
        />
        <View style = {{
              backgroundColor: LIGHT_GRAY,
              borderRadius: 5,
              flexDirection:'row'
            }}>
          <TextInput
            // style = {{
            //   flex:1,
            // }}
            name={"add"}
            placeholder={addPlaceHolder}
            onChangeText={onAddChanged}
            sercure={false}
          />
          <Button 
          flex = {1}
          customIcon={IconAdd()}
          onPress={onAddPress}
          justifyContent={'flex-end'}
          alignItems={'center'}
          />
        </View>
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
  }
});