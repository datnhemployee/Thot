import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image,
  FlatList,
  ToastAndroid,
} from 'react-native';
import {
  RED,
  LIGHT_GRAY,
  SCREEN_SIZE,
  FONT,
} from '../../constant/style';
import Button from '../component/Button'
import {
  IconSaved,
  IconNotSaved
} from '../../constant/picture'
import PostDish from '../component/PostDish'
import MainTab from '../component/MainTab'
import MainHeader from '../component/MainHeader'
import {connect } from 'react-redux';
import { getDishes } from '../../actions/actDish';


class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      page: 0,
      refreshing: false,
    }
    this.getMainTab =this.getMainTab.bind(this);
    this.getHeader =this.getHeader.bind(this);
    this.renderItem =this.renderItem.bind(this);
    this.getPost =this.getPost.bind(this);
    this.onEndReached =this.onEndReached.bind(this);
    // this.getListItems =this.getListItems.bind(this);
    this.onRefresh = this.onRefresh.bind(this);
    this.onLikePress = this.onLikePress.bind(this);
    this.onSavePress = this.onSavePress.bind(this);

  }

  onLikePress () {
    this.onEndReached();
  }

  onSavePress () {
    this.onEndReached();
  }

  async onEndReached () {
    const {
      page,
    } = this.state;

    const {
      getDishes,
      _id,
    } = this.props;

    await getDishes(
      {
        page,
        _id
      },
      (message)=>{
        ToastAndroid.show(message,ToastAndroid.SHORT);
        this.setState({
          page: page+1,
          refreshing: true,
        });
      },
      (message)=>{
        ToastAndroid.show(message,ToastAndroid.SHORT);
      }
    );

    this.setState({
      refreshing: false,
    });

  }

  async componentWillMount () {
    await this.onEndReached();
  }

  getMainTab () {
    const {navigation} = this.props;
    return (
      <MainTab navigation={navigation} tabNumber={1}/>
    )
  }

  getHeader () {
    const {navigation} = this.props;
    return (
      <MainHeader navigation={navigation}/>
    )
  }

  renderItem (item) {
    const {
      navigation
    } = this.props;
    return (
      <View>
        <PostDish 
          dish = {item}
          navigation={navigation}
          onLikePress={this.onLikePress}
          onSavePress={this.onSavePress}
          />
      </View>
    )
  }

  async onRefresh () {
    await this.onEndReached();
  }

  getPost () {
    const {
          _id,
          list,
        } = this.props;
    console.log('id',_id,'list',JSON.stringify(list));
    // return (
    //   <Text>{JSON.stringify(list)}</Text>
    // )
    return (<FlatList
      style={{flex:8,marginBottom:5}}
      scrollEnabled={true}
      data={list}
      renderItem={({item}) => 
        // <Text>{JSON.stringify(item)}</Text>
      {
        console.log(JSON.stringify(item));
        return this.renderItem(item)}
      }
      onEndReached={this.onEndReached}
      onEndReachedThreshold={0.5}
      refreshing={this.state.refreshing}
      onRefresh={this.onRefresh}
      keyExtractor={(item,index) => 'post'+ index}
      // contentContainerStyle={}
    />);
  }

  render () {
    return (
        <View style={{flex:10,borderColor:'black',borderWidth:1,backgroundColor:LIGHT_GRAY}}>
          <View style={{flex:2, backgroundColor: 'white'}}>
            {this.getHeader()}
            {this.getMainTab()}
          </View>
          <View style={{flex:8}}>
            {this.getPost()}
          </View>
          {/* <TouchableOpacity
            onPress={this.onEndReached}>
            <Text>Load</Text>
          </TouchableOpacity> */}
        </View>
    );
  }

}

const mapStateToProps = (
  state) => {
   console.log('connect: ' + JSON.stringify(state));
 
   return {
    list: state.dish.list, 
    token: state.auth.token, 
    _id: state.auth._id, 
   }
 }
 
 const mapDispatchToProps = (dispatch) => ({
   getDishes: (data,success,failed) => dispatch(getDishes(data,success,failed)),
   logOut: () => dispatch(logOut()),
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
 )(Home);

