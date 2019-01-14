import React, {Component} from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView, Dimensions } from "react-native";
import { PostFeed } from './'
import HomeScreen from "../screens/HomeScreen";
import HeaderButtons from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';


class Profile extends Component {
    render() {

        const prof = {
            uri: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABDCLPfm62cwsbuOiILdmNhcmRfcGhvdG8qKDk5NDA5ZTg5OGI1YTBlMzc0OWNiMDgwNDE5NWRmNTc3MmE1ZmZmYmEwAUJOCeKX0cBHU08PDn2FMgi5BZoa?sz=128'
        }

        return (
            <View style={styles.container}>
                <View style={styles.userBar}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={prof} style={styles.prof}/>
                        <Text style={{marginHorizontal: 10}}>Frank Francisco</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={{fontSize: 15, alignItems: 'center'}}>Mesa, AZ</Text>
                        <Text style={{fontSize: 15, alignItems: 'center'}}>15 handicap</Text>
                        {/* <Button title='LogOut' onPress={() => this.props.navigation.go} /> */}
                    </View>
                    {/* <View style={styles.buttonsView}>
                        <View style={{borderRightWidth: StyleSheet.hairlineWidth*2, borderRightColor: 'black', justifyContent:'center', alignItems: 'baseline', flexDirection: 'row', width: Dimensions.get('window').width}}>
                            <View style={{width: Dimensions.get('window').width/2, height: 30}}>
                                <Text>Favorites</Text>
                            </View>
                            <View style={{borderTop: StyleSheet.hairlineWidth*2, borderTopColor: 'black', width: Dimensions.get('window').width/2, height: 30}}>
                                <Text>My Clubs</Text>
                            </View>
                        </View>
                    </View> */}
                </View>                
                <ScrollView>
                    <HomeScreen />
                </ScrollView>
            </View>  
        );
    }
}

export default Profile

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 100 + '%',
      height: 100 + '%',
      marginTop: 10
    },
    prof: {
        width: 40,
        height: 40,
        borderRadius: 20
      },
      userBar: {
        width: 100 + '%',
        height: 130,
        backgroundColor: 'rgb(255,255,255)',
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start',
      },
      info: {
          marginTop: 15
      },
      buttonsView: {
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        marginTop: 60,
        width: Dimensions.get('window').width
      }
  });