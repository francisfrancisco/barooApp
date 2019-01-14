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
  Modal,
  Button
} from 'react-native';
import { WebBrowser } from 'expo';
import { Post } from '../components';

import * as firebase from 'firebase'
import 'firebase/firestore';


const prof = {
  uri: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABDCLPfm62cwsbuOiILdmNhcmRfcGhvdG8qKDk5NDA5ZTg5OGI1YTBlMzc0OWNiMDgwNDE5NWRmNTc3MmE1ZmZmYmEwAUJOCeKX0cBHU08PDn2FMgi5BZoa?sz=128'
}

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
      return(
        <View key={url}>
          <View style={{flexDirection:'row'}} key={url}>
            <TouchableOpacity onPress={() => this.toggleModal()} key={url} style={{ flexDirection:'row',borderWidth: StyleSheet.hairlineWidth*5, borderBottomWidth: StyleSheet.hairlineWidth*5, borderColor: 'white'}}>
                <Image key={url} source={{uri: url.image}} style={{height:Dimensions.get('window').height/5, width: Dimensions.get('window').width, flexDirection: 'row'}}/>
                <View>
                  <Modal 
                    visible={this.state.modalVisible}
                    transparent={false}
                    style={{backgroundColor:'green'}}
                    animationType={'slide'}
                    key={url}
                  >
                    <View key={url} style={{marginTop:80, justifyContent:'center', alignItems:'center'}}>
                        <Button key={url} title='Hide' onPress={() => {this.toggleModal();}}/>
                      <Image key={url} source={{uri: url.image}} style={{height:400, width: Dimensions.get('window').width}}/>
                      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent:'flex-start'}}>
                        <Image source={prof} style={{height: 40, width: 40, borderRadius: 20 }}/>
                        <Text style={{marginHorizontal: 10}}>Frank Francisco</Text>
                    </View>
                      <Text style={{fontSize: 20}}key={url}>{url.text}</Text>
                    </View>
                  </Modal>
                </View>
            </TouchableOpacity>
          </View>
        </View>
        )
      }
    )

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