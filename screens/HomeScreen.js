import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  List,
  FlatList,
  ListItem,
  View,
  ActivityIndicator,
  TouchableOpacity,
  TouchableHighlight,
  Dimensions,
  Modal
} from 'react-native';
import { WebBrowser } from 'expo';
import { Post } from '../components';

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
    this.state = {
      isLoading: true,
      clubs: [],
      data: [],
      imgUrls: [],
      cduFlag: 0,
      modalVisible:false
    };
  }

  componentDidMount(){
    this.unsubscribe = this.ref.onSnapshot(this.onCollectionUpdate);  
  }

  componentDidUpdate() {
    if(!this.state.cduFlag) {
      this.state.clubs.forEach(club => {
        console.log('curr text', club.image)
        firebase.storage().ref("images/").child(club.image).getDownloadURL().then( url =>{
          club.image = url
          this.setState({ imgUrls: [...this.state.imgUrls, url] })
          console.log('after', club.image)
        })        
      })
      // for(url of this.state.clubs) {

      // }
      this.setState({ cduFlag: 1 })
    }
  }

  onCollectionUpdate = (querySnapshot) => {
    const clubs = [];
    querySnapshot.forEach((doc) => {
      clubs.push(doc.data())
    });
    this.setState({
      clubs,
      isLoading: false,
   });
  }

  toggleModal = () => {
    this.setState({ modalVisible: !this.state.modalVisible });
  }

  render() {
    let imageTags = this.state.clubs.map((url,i) => {
      console.log('moasudfhao', url)
      return(
        // <TouchableOpacity onPress={this.toggleModal()}>
        <TouchableOpacity onPress={() => this.toggleModal()} key={i}>
            <Image key={url} source={{uri: url.image}} style={{height:400, width: Dimensions.get('window').width}}/>
            <View style={{marginTop: 22}}>
            <Modal visible={this.state.modalVisible}>
            <View style={{marginTop:22}}>
              <Text>{url.text}</Text>
              <TouchableHighlight
                onPress={() => {
                  this.toggleModal();
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
              </View>
            </Modal>
            </View>
        </TouchableOpacity>
      )
      }
    )

    let clubDesc = this.state.clubs.map((club,i) => <Text key={i}>{club.text}</Text>)
    if(this.state.isLoading){
      return(
        <View style={styles.activity}>
          <ActivityIndicator size="large" color="#0000ff"/>
        </View>
      )
    }
    
    return (
      <ScrollView>
        {imageTags}
        {clubDesc}
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