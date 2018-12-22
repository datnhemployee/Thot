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

export default class RecipeList extends Component {
  constructor (props){
    super (props);

    this.state = {
      refresh: true,
    }
  }

  getIcon (Item ) {
    if(Item.isSave)
      return IconSaved();
    return IconNotSaved();
  }

  renderElement (item,index) {
    const {
      onChangeElement,
      onDeletePress,
      elementPlaceHolder,
    } = this.props;
    return (
      <View>
        <RecipeDetail 
          elementPlaceHolder={elementPlaceHolder}
          value={item}
          onChangeText={(text) => onChangeElement(text,index)}
          onPressDelete={()=> onDeletePress(index)}
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
        <View>
          <TextInput
            style = {{
              flex: 0.1,
            }}
            name={"add"}
            placeholder={addPlaceHolder}
            onChangeText={onAddChanged}
            sercure={false}
          />
          <Button 
          flex = {1}
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