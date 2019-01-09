import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  ListItem,
  View,
  ActivityIndicator
} from 'react-native';
import { WebBrowser } from 'expo';
import { PostFeed } from '../components';

import * as firebase from 'firebase'
import 'firebase/firestore';




class HomeScreen extends Component {
  static navigationOptions = {
    title: 'baroo',
  };

    constructor() {
      super();
      this.ref = firebase.firestore().collection('clubs');
      this.unsubscribe = null;
      this.
      state = {
        isLoading: true,
        clubs: []
      };
    }

  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);
    // firebase.firestore().collection('clubs').get().then(snapshot => {
    //   snapshot.docs.forEach(doc => {
    //   })
    // })
  }

  onCollectionUpdate = (querySnapshot) => {
    const clubs = [];
    querySnapshot.forEach((doc) => {
      clubs.push(doc.data().image)
    });
    this.setState({
      clubs,
      isLoading: false,
   });
  }

  //   _renderPost(){
  //     <Text>hello</Text>
  // }

  // _returnKey(item){
  //     return item.toString()
  // }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    console.log(this.state.clubs)
    return (
      <ScrollView style={styles.container}>
        {/* <FlatList
        data={this.state.clubs}
        keyExtractor={this._returnKey}
        renderItem={this._renderPost}
        /> */}
      </ScrollView>
    );
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'red',
    fontSize: 50
  }
});
