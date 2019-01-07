import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { PostFeed } from '../components';


class HomeScreen extends Component {
  static navigationOptions = {
    title: 'baroo',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <PostFeed />
      </ScrollView>
    );
  }
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
