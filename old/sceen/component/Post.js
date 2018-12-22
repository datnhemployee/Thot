import React, {Component} from 'react';
import {
  AsyncStorage,
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity,
  Image
} from 'react-native';
import {
  DEFAULT_PIC,
  IconSaved,
  IconNotSaved,
} from '../../constant/picture';
import {
  Avatar
} from 'react-native-elements'
import CardList from './CardList';

export default class Post extends Component {

  constructor (props) {
    super(props);

    this.getImageURL = this.getImageURL.bind(this);
    this.renderBody = this.renderBody.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderFooter = this.renderFooter.bind(this);
    this.renderFilter = this.renderFilter.bind(this);
    this.renderCards = this.renderCards.bind(this);
    this.renderHeaderComponent = this.renderHeaderComponent.bind(this);
  }
  renderHeaderComponent () {}

  renderHeader  =  () => {
    let {
      save,
    } = this.props;
    return (
    <View style={styles.header}>
      <View style={styles.FirColumn}>
        {this.renderHeaderComponent()}
      </View>
      <View style={styles.SecColumn}>
        <TouchableOpacity 
          style={styles.btnSave}
          onPress={save}>
          <IconSaved />
          <Text>Lưu</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.body}>
        <Image
          source ={this.getImageURL()}
        ></Image>
      </View>
    </View>
  )};

  getImageURL = () => {
    let {
      img
    } = this.props;
    if(typeof img === 'object')
      return img;
    return DEFAULT_PIC;
  }

  renderBody = () => {
    let {
      renderBodyComponent,
      goToDetail,
      addComment,
      giveLikes,
    } = this.props;
    let getImageURL = this.getImageURL;

    return (
      <View style={styles.body}>
        {/** Image */}
        <TouchableOpacity
          onPress={goToDetail}>
          <Image 
            source={{
              uri: getImageURL(),
            }} 
          />
        </TouchableOpacity>
        {renderBodyComponent()}
        <TouchableOpacity>
          <Text style={styles.Detail}>
            Chi tiết
          </Text>
        </TouchableOpacity>
        <View style={styles.btnFunction} 
        ><View style={styles.btnLove} >
            <TouchableOpacity
            onPress={giveLikes}>
              <IconSaved />
              <Text> Yêu thích </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.btnAdd} >
            <TouchableOpacity
            onPress={addComment}>
              <IconSaved />
              <Text> Thêm mới </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  renderListCards = () => {
    let {
      FilterList,
      RecipeList,
    } = this.props;
    return (
      <View>
          <CardList
            filterList={FilterList}
            RecipeList={RecipeList}
          />
      </View>
    );
  }

  renderFooter = () => {
    let {
      renderFooterComponent,
    } = this.props;
    let getImageURL = this.getImageURL;

    return (
      <View style={styles.body}>
        <View style={styles.filter}>
          <IconNotSaved />
          {this.renderFilter()}
        </View>
        {this.renderCards()}
      </View>
    );
  }

  render () {
    return (
        <View style={styles.CardContainer}>
          {this.renderHeader()}
          {this.renderBody()}
          {this.renderFooter()}
        </View>
    );
  }

}

const styles = StyleSheet.create({
  CardContainer: {
    flex: 1,

  }
});
