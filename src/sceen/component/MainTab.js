import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import {
  RED,
} from '../../constant/style';
import {
  DEFAULT_PIC,
  IconSaved,
  IconNotSaved,
  IconFeedClicked,
  IconFeed,
  IconNoteClicked,
  IconNote,
} from '../../constant/picture';
import Button from './Button';

export default class MainHeader extends Component {
  constructor(props) {
    super (props);
    this.onHomePress = this.onHomePress.bind(this);
    this.onNotePress = this.onNotePress.bind(this);
    this.getIconHome = this.getIconHome.bind(this);
    this.getIconNote = this.getIconNote.bind(this);

    this.state = {
      tabNumber: 1,
    }
  }

  static get TabNumber () {
    return {
      Home: 1,
      Note: 2,
    }
  }

  onHomePress () {
    const {
      navigation,
    } = this.props;
    navigation.navigate('Home');
  }

  onNotePress () {
    const {
      navigation,
    } = this.props;
    navigation.navigate('Note');
  }

  getIconHome () {
    const {
      tabNumber,
    } = this.props;
    if( tabNumber === MainHeader.TabNumber.Home ||
      !tabNumber){
      return <IconFeedClicked />
    }
    return <IconFeed/>
  }

  getIconNote () {
    const {
      tabNumber,
    } = this.props;
    if( tabNumber === MainHeader.TabNumber.Note ){
      return <IconNoteClicked />
    }
    return <IconNote/>
  }

  getBottomBorderHome () {
    const {
      tabNumber,
    } = this.props;
    if( tabNumber === MainHeader.TabNumber.Home ){
      return styles.bottomBorder;
    }
    return styles.none;
  }

  getBottomBorderNote () {
    const {
      tabNumber,
    } = this.props;
    if( tabNumber === MainHeader.TabNumber.Note ){
      return styles.bottomBorder;
    }
    return styles.none;
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={[this.getBottomBorderHome(),{flex:1}]}>
            <Button 
              flex = {1}
              customIcon = {this.getIconHome()}
              onPress = {this.onHomePress}
              justifyContent = {'center'}
              alignItems = {'center'}
            />
        </View>
        <View style={[this.getBottomBorderNote(),{flex:1}]}>
          <Button 
            flex = {1}
            customIcon = {this.getIconNote()}
            onPress = {this.onNotePress}
            justifyContent = {'center'}
            alignItems = {'center'}
          />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 2,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent : 'flex-start',
    alignItems: 'flex-start',
  },
  bottomBorder: {
    borderBottomColor: RED,
    borderBottomWidth: 2
  },
  none: {}
});

