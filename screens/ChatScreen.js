import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'baroo',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>Chat</Text>
      </ScrollView>
    );
  }
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
