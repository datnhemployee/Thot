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
  IconAdd,
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
          keyExtractor={(item,index)=>'IdontKnow'+index}
        />
        <View style={{flexDirection:'row'}}>
          <TextInput
            style = {{
              flex: 2,
            }}
            name={"add"}
            multiline={true}
            placeholder={addPlaceHolder}
            onChangeText={onAddChanged}
            sercure={false}
          />
          <Button 
          flex = {2}
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