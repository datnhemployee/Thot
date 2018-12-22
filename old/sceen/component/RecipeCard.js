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
import IntroLabel from './IntroLabel';
import Spinner from './Spinner';
import { RED } from '../../constant/style';

export default class RecipeCard extends Component {
  constructor (props) {
    super(props);

    this.navigateToRecipe = this.navigateToRecipe.bind(this);
  }

  navigateToRecipe () {
    let {
      recipe,
      navigation,
    } = this.props;
    console.log('recipe: '+JSON.stringify(recipe));
    navigation.navigate('RecipeDetail',{
      _id: recipe._id,
    });
  }

  renderSpinner () {
    let {
      doIncrease,
      doDecrease,
    } = this.props;
    return (
      <View style={styles.spinner}>
        <Spinner
          increment={doIncrease}
          value ={recipe.relevant}
          decrement={doDecrease}
        />
      </View>
    );
  }
  renderHeader () {
    return (
      <View style={styles.header}>
        <TouchableOpacity
          onPress={this.navigateToRecipe}>
        </TouchableOpacity>
      </View>
    );
  }
  renderBody () {
    
    return (
      <View style={styles.body}>
        <TouchableOpacity
            onPress={this.navigateToRecipe}>
          <IntroLabel
            title={'Thời gian'}
            content={shortTime}
            contentStyle={styles.contentTime}
            titleStyle={styles.titleIntroLable}
          />
          <IntroLabel
            title={'Nguyên Liệu'}
            content={shortGredient}
            contentStyle={styles.contentTime}
            titleStyle={styles.titleIntroLable}
          />
          <IntroLabel
            title={'Khẩu Phần'}
            content={ration}
            contentStyle={styles.contentRation}
            titleStyle={styles.titleIntroLable}
          />
        </TouchableOpacity>
      </View>
    );
  }
  renderFooter () {
    return (
      <View style={styles.footer}>
        <TouchableOpacity>
          
        </TouchableOpacity>
      </View>
    );
  }

  render () {
    return (
      <View style={styles.container}>
          {this.renderSpinner()}
        <View style={styles.card}>
          {this.renderHeader()}
          {this.renderBody()}
          {this.renderFooter()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  header: {
    flex:1,

  },
  body: {
    flex:1,

  },
  footer: {
    flex:1,

  },
  titleIntroLable: {
    flex:1,

  },
  contentTime: {
    flex:1,
    color: RED,
  },
  contentRation: {
    flex:1,
    color: 'green',

  },
  card:{
    flex:1,

  },
});