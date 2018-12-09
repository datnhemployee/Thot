// import React, {Component} from 'react';
// import Connection from '../../constant/connection';
// import {
//   USERNAME_HOLDER_COLOR, 
//   USERNAME_COLOR,
//   PASSWORD_HOLDER_COLOR,
//   PASSWORD_COLOR,
//   SCREEN_SIZE,
//   RED,
//   GRAY,
//   LIGHT_RED,
//   LIGHT_GRAY,
//   FONT,
// } from '../../constant/style';
// import {
//   AsyncStorage,
//   StyleSheet, 
//   Text, 
//   View, 
//   TouchableOpacity
// } from 'react-native';

// import {connect } from 'react-redux';
// import {
//   inputUsername,
//   inputPassword,
// } from '../../actions/actLogin';
// import mDialog from '../component/Dialog';


// // /** API: @see  https://www.npmjs.com/package/react-native-filesystem
// //  * 26/11/2018 5:32 PM
// //  * Dat| 
// //  * This Library does not work because nothing happen with function 
// //  * 
// //  * Dat|
// //  * Bug: Can not run with emulator because of the key word `@override` in line 18 of 
// //  * @see F:\Mobile\Project\thottui\node_modules\react-native-filesystem\android\src\main\java\com\benwixen\rnfilesystem\RNFileSystemPackage.java`
// //  * => Solution: 
// //  * 1. change it to commit.
// //  * 2. Run `react-native run-android`
// //  */
// // //import FileSystem from 'react-native-filesystem';

// class login extends Component {
  
//   constructor(props) {
//     super(props);

//     this.state = {
//       auth: {
//         username: '',
//         password: '',
//       },
//       token: '',
//       response: false,
//       endpoint: Url,
//       isPopUp: false,
//       alert: '',
//       alertContent: '',
//     };

//     this._chgValue = this._chgValue.bind(this);
//     // this._logIn = this._logIn.bind(this);
//     this._onPress = this._onPress.bind(this);
//     this._saveToken = this._saveToken.bind(this);
//     this._removeToken = this._removeToken.bind(this);
//     this._getTokenFromLocal = this._getTokenFromLocal.bind(this);
//     // this._isExist = this._isExist.bind(this);
    
//   }

//   // /** API: @see  https://www.npmjs.com/package/react-native-filesystem
//   // * 26/11/2018 5:32 PM
//   // * Dat| 
//   // * This Library does not work because nothing happen with function 
//   // */
//   // // _isExist = async function (path) {
//   // //   const fileExists = await FileSystem.fileExists(path).then((value) =>{
//   // //     console.log(`file exists: ${fileExists}`);
//   // //     return true;
//   // //   });
//   // //   return false;
//   // // }

//   // /** API: @see  https://www.npmjs.com/package/react-native-filesystem
//   // * 26/11/2018 5:32 PM
//   // * Dat| 
//   // * This Library does not work because nothing happen with function 
//   // */
//   // // _saveToken () {
//   //   // let path = 
//   //   //   tokenPath.path +
//   //   //   tokenPath.file;
//   //   // console.log('path: '+ path);
//   //   // if(this._isExist(path)){
//   //   //   console.log('OK');
//   //   // }
//   //   // const content = {
//   //   //   token: this.state.token,
//   //   // }
//   //   // FileSystem.writeToFile(
//   //   //   path,
//   //   //   JSON.stringify(content),
//   //   //   FileSystem.storage.important
//   //   // );

//   /**
//    *  6:00 PM 26/11/2018 | v.1.0
//    * 
//    * `.Usecase:` `Save` the `this.state.token` to AsyncStorage 
//    * 
//    * @throws 
//    * Have found yet 
//    * 
//    * @see https://facebook.github.io/react-native/docs/asyncstorage
//    */
//   async _saveToken () {
//     await AsyncStorage.setItem(
//       token.key,
//       this.state.token,
//       );
//   }

//   // /** API: @see  https://www.npmjs.com/package/react-native-filesystem
//   // * ========================================================================
//   // * 26/11/2018 5:32 PM
//   // * Dat| 
//   // * This Library does not work because nothing happen with function 
//   // * ========================================================================
//   // */
//   // _getToken () {
//   //   const token = FileSystem.readFile(
//   //       tokenPath.path+tokenPath.file,
//   //       FileSystem.storage.important).catch((reason)=>{
//   //         console.log(reason);
//   //       });
//   //   console.log('token is '+ token);
//   // } 


//   /**
//    *  6:00 PM 26/11/2018 | v.1.0
//    * 
//    * `.Usecase:` `Get` the `token` from AsyncStorage 
//    * 
//    * @throws 
//    * Have found yet 
//    * 
//    * @see https://facebook.github.io/react-native/docs/asyncstorage
//    */
//   async _getTokenFromLocal () {
//     return await AsyncStorage.getItem(
//       token.key,
//     );
//   } 

//   async _removeToken () {
//     return await AsyncStorage.removeItem(
//       token.key,
//     );
//   }

//   async _loginWithToken () {
//     // Check the token from local 
//     try{
//       let token = await this._getTokenFromLocal();
//       await this.setState({token});
//       if(token.length==0 ||
//         !token){
//         throw new Error('Token can not be found.')
//       } 
//       await this.setState({
//         isPopUp: true,
//         alert: notification.LogInSuc_Tile,
//         alertContent: notification.LogInSuc,
//       });
//     } catch ( err ){
//       await this.setState({
//         isPopUp: true,
//         alert: 'Phần mềm tại máy bị lỗi',
//         alertContent: `Quý khách vui lòng thông báo trên App Store`
//         + `\nđể nhận được hỗ trợ chi tiết.`
//         ,
//       });
//     }
//   }

//   async _loginNoToken () {
//     try{
//       await this._removeToken();
//       let res = await axios.post( 
//         Url + Path.logIn,{
//           'data': {
//               'username': this.state.auth.username,
//               'password': this.state.auth.password,
//           },
//         },{
//         headers: {
//           'request-name': Header.reqToken,
//         },
//       })
//       console.log('response =' + res);
//       if(res){
//         let {token} = res.data;
//         if(token && token.length != 0){
//           await this.setState({
//             isPopUp: true,
//             token:token,
//             alert: notification.LogInSuc_Tile,
//             alertContent: notification.LogInSuc,
//           });
//           await this._saveToken();
//         } else{
//           await this.setState({
//             isPopUp: true,
//             alert: notification.LogInFai_Tile,
//             alertContent: notification.LogInFai,
//           });
//         }
//       }
//       else{
//         throw new Error ('Username or password is incorrect. Try again.');
//       }
//     } catch ( ex ){
//       await this.setState({
//         isPopUp: true,
//         alert: 'Lỗi hệ thống',
//         alertContent: `Quý khách vui lòng kiểm tra App Store`
//         + `\nđể biết thêm thông tin chi tiết.`
//         ,
//       });
//     }
//   }

//   // /** 
//   //  *  9:17 PM 26/11/2018 | v.1.0
//   //  * Dat: I see no use for this one anymore
//   //  *
//   //  *  11:20 PM 25/11/2018 | v.1.0
//   //  * 
//   //  * `.Usecase:` `Post` the server with `this.state.auth.username` and 
//   //  * `this.state.auth.password` to: 
//   //  * 1. `set` the `token`.
//   //  * 2. `save` the `token` to temporary file in
//   //  * `user/info.json`
//   //  * 
//   //  * @throws 
//   //  * `Network error` 
//   //  * check the IPV4 of the localhost- My Computer
//   //  * 
//   //  * `Example: ` 
//   //  * @see http://192.168.56.1:8000/
//   //  */
//   // async _logIn ()  {
//   //   // console.log('You are loging in the system: '+ 
//   //   //   this.state.auth.username + 
//   //   //   " ," + 
//   //   //   this.state.auth.password);
//   //   if(!this._loginWithToken()){
//   //   }
//   // }

//   print(obj){
//     if(obj){
//       for( var k in obj){
//         if(obj[k] instanceof Object) this.print(obj[k]);
//         else
//           console.log(k+": "+obj[k])
//       }
//     }
//   }

//   _chgValue  (name,value) {
//     // if(!value)
//     //   value = "";

//     // console.log('assign: ');
//     let auth = {...this.state.auth};
//     auth[name] = value;

//     // console.log('before'+
//     //   '\nauth[ '+ name + "] : " +
//     // auth[name] );
//     // console.log('this.state: '+ 
//     // this.state.auth[name] );

//     this.setState({
//       auth
//     });
//     // ,
//       // () => {
//       //   console.log('after');
//       //   console.log('auth[ '+ name + "] : " +
//       //   auth[name] );
//       //   console.log('this.state: '+ 
//       //   this.state.auth[name] );
//       // });
//   }

//   async _onPress () {
//     // normalize username and password

//     // Request token
//     await this._loginNoToken();

//     this.props.navigation.navigate('Home');
//   }

//   render() {
//     // log in with token and navigate to main screen 

//     // else navigate to login screen
//     return (
//       <Provider
//         store={createStore(reducer)}>
//         <View style={styles.container}>
//           <View style={styles.header}>
//             <Text style={styles.label}> Thớt </Text>
//           </View>
//           <View style={styles.body}>
//             <TextInput
//               style = {{
//                 flex: 0.1,
//               }}
//               // fontStyle={fontStyle}
//               name={"username"}
//               placeholder={"Tài khoản"}
//               _onChangeText={(value) => this._chgValue("username",value)}
//               sercure={false}
//             />
//             <TextInput
//               style = {{
//                 flex: 0.1,
//               }}
//               // fontStyle={
//               //   (this.state.auth.password.length==0)?
//               //   'italic':'normal'}
//               name={"password"}
//               placeholder={"Mật khẩu"}
//               _onChangeText={(value) => this._chgValue("password",value)}
//               sercure={true}
//             />
//             <TouchableOpacity
//               style = {styles.btnLogIn}
//               onPress = {this._onPress}
//             >
//               <Text
//                 style = {styles.txtLogIn}
//               >
//                 Đăng Nhập
//               </Text>
//             </TouchableOpacity>

//             {
//               // Pop-Up
//             }
//             <Dialog
//               dialogTitle = {
//               <DialogTitle
//                 title={this.state.alert}
//               > 
//               </DialogTitle>}
//               visible={this.state.isPopUp}
//               dialogAnimation={new ScaleAnimation({
//                 toValue: 0,
//               })}
//               dismissOnHardwareBackPress={true}
//               dismissOnTouchOutside={false}
//               width={SCREEN_SIZE.W*2/3}
//               // height={SCREEN_SIZE.H*3/5}
//             ><Text
//             > {this.state.alertContent}
//             </Text>
//             <DialogButton
//               text={" Hủy "}
//               onPress={()=>this.setState({isPopUp:false})}
//               >
//             </DialogButton>
//             </Dialog>
//           </View>
//           <View style={styles.footer}>
            
//           </View>
//         </View>
//       </Provider>
//     );
//   }
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 3,
//     backgroundColor: RED,
//     // flexDirection: 'column'
//   },
//   header: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // borderWidth: 1,
//     // borderColor: 'white',
//   },
//   label: {
//     fontFamily:FONT.uvfVerner,
//     fontSize: 66,
//     color: 'white',
//     // fontStyle: 'italic',
//   },
//   body: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     flexDirection: 'column',
//     // borderWidth: 1,
//     // borderColor: 'white',
//   },
//   footer: {
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     flexDirection: 'column',
//     // borderWidth: 1,
//     // borderColor: 'white',
//   },
//   txtLogIn: {
//     fontSize: 20,
//     textAlign: 'center',
//     color: 'white',
//   },
//   btnLogIn: {
//     flex: 1,
//     width: SCREEN_SIZE.W * 3/5,
//     margin: 10,
//     marginTop: 20,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     flexDirection: 'column',
//     // borderWidth: 1,
//     // borderColor: 'white',
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });

