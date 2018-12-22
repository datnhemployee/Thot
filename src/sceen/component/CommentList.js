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
} from '../../constant/picture';
import MInputText from './mTextInput';
import RecipeDetail from './RecipeDetail';
import Button from './Button';
import MyList from './MyList';

export default class CommentList extends MyList {
  constructor (props){
    super (props);

    this.state = {
      refresh: true,
    }
  }

  renderElement (item,index) {
    const { navigation} = this.props;
    return (
      <View>
        <TouchableOpacity
          onPress={()=>{navigation.navigate('User')}}>
          <Text> @ {item.author}</Text>
        </TouchableOpacity>
        <TextInput 
          value={item.content}
          editable={false}
          multiline={true}
        />
      </View>
    )
  }

  render () {
    const {
      listElement,
      onAddPress,
      onAddChanged,
      addPlaceHolder,
    } = this.props;
    const {
      refresh,
    } = this.state;
    return (
      <View>
        <FlatList 
          style={styles} 
          data={listElement}
          renderItem={({item,index})=>this.renderElement(item,index)}
          refreshing={refresh}
        />
        <View style = {{
              borderWidth: 1,
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
          // flex = {1}
          customIcon={IconSaved()}
          onPress={onAddPress}
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