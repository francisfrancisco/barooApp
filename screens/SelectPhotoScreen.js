import { Constants, ImagePicker, Permissions } from 'expo';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking, Button } from 'react-native';

async function getPermission(permission) {
  let { status } = await Permissions.askAsync(permission);
  if (status !== 'granted') {
    Linking.openURL('app-settings:');
    return false;
  }
  return true;
}

const options = {
  allowsEditing: true,
};

class SelectPhotoScreen extends Component {
  state = {};

  selectPhoto = async () => {
    const status = await getPermission(Permissions.CAMERA_ROLL);
    if (status) {
      const result = await ImagePicker.launchImageLibraryAsync(options);
      if (!result.cancelled) {
        this.props.navigation.navigate('NewPost', { image: result.uri });
      }
    }
  };

  takePhoto = async () => {
    const status = await getPermission(Permissions.CAMERA);
    if (status) {
      const result = await ImagePicker.launchCameraAsync(options);
      if (!result.cancelled) {
        this.props.navigation.navigate('NewPost', { image: result.uri });
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title='Choose Photo' onPress={this.selectPhoto} style={styles.text}>
        </Button>
        <Button title='Take Photo' onPress={this.takePhoto} style={styles.text}>
        </Button>
      </View>
    );
  }
}

export default SelectPhotoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    padding: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});