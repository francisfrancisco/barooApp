import React, {Component} from "react";
import { View, Text, StyleSheet, Image, Button, TextInput, ScrollView } from "react-native";

class AddItem extends Component {
    state = {
        clubType: '',
        brand: '',
        name: '',
        dexterity: '',
        shaftType: '',
        flex: '',
        condition: '',
        picture: '',
        description: ''

    }

    render() {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <Text>Club Type</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder="jkhvkjhvk"
                    onChangeText={(clubType) => this.setState({clubType})}
                />              
                <Text>Brand</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder="rayrsyu"
                    onChangeText={(clubType) => this.setState({clubType})}
                />               
                <Text>Name</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder=";oihj;h"
                    onChangeText={(clubType) => this.setState({clubType})}
                />               
                <Text>Dexterity</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder=""
                    onChangeText={(clubType) => this.setState({clubType})}
                />               
                <Text>Shaft Type</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder=""
                    onChangeText={(clubType) => this.setState({clubType})}
                />               
                <Text>Flex</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder=""
                    onChangeText={(clubType) => this.setState({clubType})}
                />               
                <Text>Condition</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder=""
                    onChangeText={(clubType) => this.setState({clubType})}
                />               
                <Text>Picture</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder=""
                    onChangeText={(clubType) => this.setState({clubType})}
                />               
                <Text>Description</Text>
                <TextInput
                    style={{height: 40, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: 'black'}}
                    placeholder=""
                    onChangeText={(clubType) => this.setState({clubType})}
                />
                <Button title='submit' onPress={() => this.props.navigation.navigate('')}/>
            </ScrollView>             
        );
    }
}

export default AddItem

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: 100 + '%',
      height: 100 + '%',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
    },

    inputs: {
        height: 40,
        width: 100 + '%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: 'black'    
    }
  });