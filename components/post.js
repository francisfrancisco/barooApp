import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
import constants from '../constants';
// import { connect } from 'react-redux';

class Post extends Component{

  state = {
    screenWidth: Dimensions.get('window').width,
    screenHeight: Dimensions.get('window').height
  }

  GoToItem(){
    alert("going")
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity activeOpacity={.9} onPress={() => {this.GoToItem()}} style={{borderBottomWidth: StyleSheet.hairlineWidth*5, borderColor: 'black'}} >
          <Image source={constants.images.stockPost} style={{width: this.state.screenWidth, height: this.state.screenHeight/2.5 }} />
        </TouchableOpacity>
        {/* <View>
          <Text>GOLF CLUB DETAILS maybe modal?</Text>
        </View> */}
      </View>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//       posts: state.post
//   }
// }

export default Post

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100 + '%',
    height: 100 + '%',
    flexDirection: 'row'
  }
});
