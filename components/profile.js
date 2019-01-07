import React, {Component} from "react";
import { View, Text, StyleSheet, Image, Button, ScrollView } from "react-native";
import { PostFeed } from './'
class Profile extends Component {
    static navigationOptions = {
        title: 'PROFILE',
      };
    render() {

        const prof = {
            uri: 'https://plus.google.com/_/focus/photos/public/AIbEiAIAAABDCLPfm62cwsbuOiILdmNhcmRfcGhvdG8qKDk5NDA5ZTg5OGI1YTBlMzc0OWNiMDgwNDE5NWRmNTc3MmE1ZmZmYmEwAUJOCeKX0cBHU08PDn2FMgi5BZoa?sz=128'
        }

        return (
            <View style={styles.container}>
                <View style={styles.userBar}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={prof} style={styles.prof}/>
                        <Text style={{marginHorizontal: 10}}>shonu_ff</Text>
                    </View>
                    <View>
                        <Text style={{fontSize: 30, alignItems: 'center'}}>golfgolfgolfgolfgolfgolf</Text>
                        <Button title='LogOut' onPress={() => this.props.navigation.navigate('App')} />

                    </View>
                </View>                
                <ScrollView>
                    <PostFeed />
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
      marginTop: 60
    },
    header: {
      width: 100 + '%', 
      height: 100,
      backgroundColor: 'rgb(250,250,250)',
      borderBottomColor: 'rgb(233,233,233)',
      borderBottomWidth: StyleSheet.hairlineWidth,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 60,
      flexDirection: 'row'
    },
    prof: {
        width: 40,
        height: 40,
        borderRadius: 20
      },
      userBar: {
        width: 100 + '%',
        height: 200,
        backgroundColor: 'rgb(255,255,255)',
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingHorizontal: 10,
        flexDirection: 'column',
        justifyContent: 'flex-start'
      }
  });