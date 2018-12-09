// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TouchableOpacity,
// } from 'react-native';
//   import {
//     USERNAME_HOLDER_COLOR, 
//     USERNAME_COLOR,
//     PASSWORD_HOLDER_COLOR,
//     PASSWORD_COLOR,
//     SCREEN_SIZE,
//     RED,
//     GRAY,
//     LIGHT_RED,
//     LIGHT_GRAY,
//     FONT,
//   } from '../../../src/constant/style';
// import
//   Dialog, {
//   DialogButton,
//   DialogTitle,
//   ScaleAnimation,
// } from 'react-native-popup-dialog';


// class mDialog extends Component {
//   constructor (
//     props) {
//     super (props);
    
//   }

//   get width () {
//     return SCREEN_SIZE.W*2/3;
//   }

//   render () {

//     let {
//       title,
//       alertContent,
//       show,
//       close,
//     } = this.props;
//     let width
//     = this.width;
//     console.log('render Dialog: ' + typeof title);
//     console.log('render Dialog: ' + typeof alertContent);
//     console.log('render Dialog: ' + typeof isShown);
//     return (
//       <View style={styles.container}>
//          <Dialog
//           dialogTitle = {() => <DialogTitle title={title}/>}
//           visible = {show()}
//           dialogAnimation = {new ScaleAnimation({
//             toValue: 0,
//           })}
//           dismissOnHardwareBackPress = {true}
//           dismissOnTouchOutside={false}
//           width={width}
//         > 
//         <Text>
//           {alertContent}
//         </Text>
//         <DialogButton
//           text = {'Đóng'}
//           onPress={close}
//         />
//         </Dialog>
//       </View>
//     );
//   }

  
// }

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// });

