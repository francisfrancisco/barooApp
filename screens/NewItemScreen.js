import { Ionicons } from '@expo/vector-icons';
import React, { Component } from 'react';
import { Image, TextInput, ScrollView, StyleSheet } from 'react-native';
import HeaderButtons from 'react-navigation-header-buttons';

import * as firebase from 'firebase'
import 'firebase/firestore';

class NewItemScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'New Item',
    headerRight: (
      <HeaderButtons IconComponent={Ionicons} iconSize={23} color="black">
        <HeaderButtons.Item
          title="Share"
          onPress={() => {
            const text = navigation.getParam('text');
            const image = navigation.getParam('image');
            const imageSlice = image.slice(image.lastIndexOf('/'));
            if (text && image) {
              navigation.goBack();
              firebase.firestore().collection('clubs').add({
                image: imageSlice.slice(1),
                text
              })
              alert('Your item has been added')
            } else {
              alert('Need valid description');
            }
          }}
        />
      </HeaderButtons>
    ),
  });

  state = { 
    text: '',
  };

  render() {
    const { image } = this.props.navigation.state.params;
    console.log('asdfasdf' + image)
    return (
      <ScrollView style={{ padding: 10, flexDirection: 'column' }}>
        <Image
          source={{uri: this.props.navigation.state.params.image}}
          style={{ resizeMode: 'contain', aspectRatio: 1, width: 72, height: 200 }}
        />
       <TextInput
          style={styles.input}
          placeholder="Club Type"
          onChangeText={text => {
            this.setState({ text });
            this.props.navigation.setParams({ text });
          }}
        />
       <TextInput
          style={styles.input}
          placeholder="Dexterity"
          onChangeText={text => {
            this.setState({ text });
            this.props.navigation.setParams({ text });
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Condition"
          onChangeText={text => {
            this.setState({ text });
            this.props.navigation.setParams({ text });
          }}
        />
        <TextInput
          multiline
          style={styles.input}
          placeholder="Add full description of club(s)"
          onChangeText={text => {
            this.setState({ text });
            this.props.navigation.setParams({ text });
          }}
        />
      </ScrollView>
    );
  }
}

export default NewItemScreen

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: StyleSheet.hairlineWidth*5, 
    borderColor: 'black',
    height: 100
  }
});