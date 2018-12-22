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
  DEFAULT_PIC,
  IconFeedClicked,
  IconFeed,
  IconAdd,
} from '../../constant/picture';
import {
  FONT,
  RED,
} from '../../constant/style'
import Button from './Button';

export default class MainHeader extends Component {
  constructor(props) {
    super (props);
    this.onImagePress = this.onImagePress.bind(this);
    this.onAddCliked = this.onAddCliked.bind(this);

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

  onImagePress () {
    const {
      navigation,
    } = this.props;
    navigation.navigate('Edit');
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
  
  onAddCliked () {
    const {
      navigation,
    } = this.props;
    navigation.navigate('AddRecipe');
  }

  render () {
    return (
      <View style={styles.container}>
          <Button 
            flex = {1}
            customIcon = {this.getIconHome()}
            onPress = {this.onImagePress}
            justifyContent = {'center'}
            alignItems = {'center'}
          />
        
        <View style={styles.header}>
            <Text style={styles.label}> Thớt </Text>
        </View>
        <Button 
          flex = {1}
          customIcon = {<IconAdd/>}
          onPress = {this.onAddCliked}
          justifyContent = {'center'}
          alignItems = {'center'}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container :{
    flex: 1,
    flexDirection: 'row',
    justifyContent : 'center',
    alignItems: 'center',
  },
  label: {
    fontFamily:FONT.uvfVerner,
    fontSize: 44,
    color: RED,
    // fontStyle: 'italic',
  },
})

