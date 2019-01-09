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

//FROM INSTA CLONE EXAMPLE
// import { Ionicons } from '@expo/vector-icons';

// import React, {Component} from 'react';
// import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native';
// import constants from '../constants';

// const profileImageSize = 36;
// const padding = 12;

// class Post extends Component{

//   state = {}

//   componentDidMount() {
//     if (!this.props.imageWidth) {
//       // Get the size of the web image
//       Image.getSize(this.props.image, (width, height) => {
//         this.setState({ width, height });
//       });
//     }
//   }

//   render(){
//     const { text, name, imageWidth, imageHeight, uid, image } = this.props;
//     console.log(this.props.image)
//     // Reduce the name
//     const imgW = imageWidth || this.state.width;
//     const imgH = imageHeight || this.state.height;
//     const aspect = imgW / imgH || 1;
//     return (
//       <View>
//         <Image
//           resizeMode="contain"
//           style={{
//             backgroundColor: '#D8D8D8',
//             width: '100%',
//             aspectRatio: aspect,
//           }}
//           source={{ uri: image }}
//         />
//         {/* <Metadata name={name} description={text} /> */}
//       </View>
//     )
//   }
// }

// export default Post


// const styles = StyleSheet.create({
//   text: { fontWeight: '600' },
//   subtitle: {
//     opacity: 0.8,
//   },
//   row: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   padding: {
//     padding,
//   }
// });