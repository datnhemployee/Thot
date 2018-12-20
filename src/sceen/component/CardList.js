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
  IconSaved,
  IconNotSaved,
} from '../../constant/picture';
import FilterText from './FilterText';
import RecipeCard from './RecipeCard';

export default class CardList extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isLoading: true,
    }
    this.renderFilter = this.renderFilter.bind(this);
    this.renderList = this.renderList.bind(this);
    this.renderItem = this.renderItem.bind(this);
    this.renderFilterList = this.renderFilterList.bind(this);

    this.onEndReached = this.onEndReached.bind(this);
    this.onRefresh = this.onRefresh.bind(this);

    this.getItems = this.getItems.bind(this);
    this.getFilterList = this.getFilterList.bind(this);

  }

  getItems() {}
  getFilterList() {}

  renderFilterList() {
    let FilterList = this.getFilterList();
    return (
      <View style={styles.HeaderList}>
        <FilterText
          styles = {styles.Filter}
          listElement={FilterList}
        />
      </View>
    );
  }

  renderFilter () {
    return (
      <View style={styles.Header}>
        <IconSaved />
        {this.renderFilterList()}
      </View>
    );
  }

  renderItem(item) {}

  async onEndReached() {}

  async onRefresh() { }

  renderList = () => {
    let {
      isLoading
    } = this.state;
    let Items = this.getItems();
    return (
      <FlatList
        data={Items}
        renderItem={(item) => this.renderItem(item)}
        onEndReached={this.onEndReached}
        onEndReachedThreshold={0.5}
        refreshing={isLoading}
        onRefresh={this.onRefresh}
        keyExtractor={item => item._id}
        contentContainerStyle={styles.contentContainerStyle}
      />
    );
  }

  render () {
    let {
      getAllItem
    } = this.props;
    return (
      <View>
        {this.renderFilter()}
        {this.renderList()}
        <TouchableOpacity
          onPress={getAllItem}>
          <Text style={styles.txtGetAll}>Hiển thị toàn bộ</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  Filter:{
    flex: 1,
  }
});