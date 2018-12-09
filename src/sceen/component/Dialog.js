import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View} from 'react-native';
  import {
    USERNAME_HOLDER_COLOR, 
    USERNAME_COLOR,
    PASSWORD_HOLDER_COLOR,
    PASSWORD_COLOR,
    SCREEN_SIZE,
    RED,
    GRAY,
    LIGHT_RED,
    LIGHT_GRAY,
    FONT,
  } from '../../constant/style';
import
  Dialog, {
  DialogButton,
  DialogTitle,
  ScaleAnimation,
} from 'react-native-popup-dialog';

export default class mDialog extends Component {
  constructor (
    props) {
    super (props);
    
    this.state = {
      isShown: false,
    }

    this.close = this.close.bind(this);
    this.isShown = this.isShown.bind(this);
  }

  isShown = () => {
    let {
      title
    } = this.props;
    if(title){
      this.setState({
        isShown: true,
      });
    } else {
      this.close;
    }
    return this.state.isShown;
  }

  close = () => {
    this.setState({
      isShown: false,
    });
  }

  get width () {
    return SCREEN_SIZE.W*2/3;
  }

  render () {

    let {
      title,
      content,
    } = this.props;
    let width
    = this.width;
    let isShown
    = this.isShown;
    
    return (
      <View style={styles.container}>
        <Dialog
          dialogTitle = {<DialogTitle title={title}/>}
          visible = {isShown}
          dialogAnimation = {new ScaleAnimation({
            toValue: 0,
          })}
          dismissOnHardwareBackPress = {true}
          dismissOnTouchOutside={false}
          width={width}
        ><Text>
          {content}
        </Text>
        <DialogButton
          text={"Đóng"}
          onPress={close}
        />
        </Dialog>
      </View>
    );
  }

  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  }
});