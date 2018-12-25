import React, {Component} from 'react';
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
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {
  isString,
  isEmpty,
} from '../../api/StringHelper';
import { connect } from 'react-redux';
import TextInput from '../component/mTextInput';
import {
  getDish_ByID,
  logOut,
} from '../../actions/actDishDetail';
import FRecipe from '../form/fRecipe';

class Recipe extends Component {
  constructor (props) {
    super (props);
  } 

  async componentWillMount () {
    const {
      navigation,
      getDish_ByID,
    } = this.props;
    await getDish_ByID(navigation.getParam('_id',''));
  }

  render () {
    const {
      navigation,
      name,
      ingredients,
      intro,
      steps,
    } = this.props;

    return (
      <View style={styles.container}>
        <FRecipe 
         name={name}
         ingredients={ingredients}
         steps={steps}
         intro={intro}
        navigation = {navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});


const mapStateToProps = (
  state) => {
   console.log('connect: ' + JSON.stringify(state));
 
   return {
    name: state.dishDetail.name,
    ingredients: state.dishDetail.ingredients,
    intro: state.dishDetail.intro,
    steps: state.dishDetail.steps,
   }
 }
 
 const mapDispatchToProps = (dispatch) => ({
  getDish_ByID: (data) => dispatch(getDish_ByID(data)),
  logOut: () => dispatch(logOut()),
 });
 
 export default connect(
   mapStateToProps,
   mapDispatchToProps,
 )(Recipe);
