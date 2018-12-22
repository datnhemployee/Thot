import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {
  DEFAULT_PIC,
  IconAdd,
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
import NoteList from './MyList';

const pic = require('../../img/default_pic.png')

export default class NoteDish extends Component{
  constructor (props) {
    super(props)
  }

  render () {
    let {
      note,
      navigation,
      onChangeText,
    } = this.props;
    console.log('item' + JSON.stringify(note))

    return (
      <View style={{backgroundColor:'white',marginTop: 5,paddingTop: 5,paddingBottom: 5}}>
        <TouchableOpacity 
          onPress={()=>{navigation.navigate('Recipe')}}>
          <Text style={{margin: 5}}> {note.dish.name}</Text>
          <Text style={{margin: 5}}>@ {note.dish.author}</Text>
        </TouchableOpacity>
        <View style={{flexDirection:'row',borderTopColor: LIGHT_GRAY,borderTopWidth: 1,}}>
          <TextInput
            style = {{
              flex: 1,
            }}
            multiline= {true}
            name={"add"}
            value={note.dish.notes}
            placeholder={'Ghi chú của món ăn này'}
            onChangeText={onChangeText}
            sercure={false}
          />
        </View>
      </View>
    );
  }
}
