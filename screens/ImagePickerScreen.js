import React, {Component} from 'react';
import { Image, StyleSheet, Button, Text, View, Alert, } from 'react-native';
import { ImagePicker } from 'expo';
import * as firebase from 'firebase';


class ImagePickerScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  onChooseImagePress = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      this.uploadImage(result.uri)
        .then(() => {
            this.props.navigation.navigate('NewPost', { image: result.uri })
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  }

  onTakePhotoPress = async () => {
    let result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri)
        .then(() => {
            //navigate
            this.props.navigation.navigate('NewPost', { image: result.uri })
        })
        .catch((error) => {
          Alert.alert(error);
        });
    }
  }

//   onTakePhotoPress = async () => {
//     let result = await ImagePicker.launchCameraAsync();

//     if (!result.cancelled) {
//         this.props.navigation.navigate('NewPost', { image: result.uri })
//     }
//   }

  uploadImage = async (uri) => {
    let imageName = uri.slice(uri.lastIndexOf('/'))

    const blob = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function() {
          resolve(xhr.response);
        };
        xhr.onerror = function(e) {
        //   console.log(e);
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', uri, true);
        xhr.send(null);
      });
    
    //   firebase.storage().ref().getDownloadURL

    var ref = firebase.storage().ref().child("images/" + imageName );
    return ref.put(blob);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button title="Choose image..." onPress={this.onChooseImagePress} />
        <Button title="Take Photo..." onPress={this.onTakePhotoPress} />
      </View>
    );
  }
}

export default ImagePickerScreen

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50, alignItems: "center", },
});