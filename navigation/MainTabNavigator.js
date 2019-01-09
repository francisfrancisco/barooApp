import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import NewItemScreen from '../screens/NewItemScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SelectPhotoScreen from '../screens/SelectPhotoScreen';
import ImagePickerScreen from '../screens/ImagePickerScreen';

const navigator = createBottomTabNavigator(
  {
    Feed: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={
              Platform.OS === 'ios' ? `ios-list-box` : 'md-list-box'
            }
          />
        )
      }
    },
    Chat: {
      screen: ChatScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-chatbubbles' : 'md-chatbubbles'}
          />
        )
      }
    },
    Item: {
      screen: ImagePickerScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
          />
        )
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-person' : 'md-person'}
          />
        )
      }
    }
  },
  {
    // We want to hide the labels and set a nice 2-tone tint system for our tabs
    tabBarOptions: {
      showLabel: false,
      activeTintColor: 'black',
      inactiveTintColor: 'gray',
    },
  },
);

// Create the navigator that pushes high-level screens like the `NewPost` screen.
const MainStackNavigator = createStackNavigator(
  {
    Main: {
      screen: navigator,
      navigationOptions: { title: 'baroo' },
    },
    NewPost: NewItemScreen,
  },
  {
    cardStyle: { backgroundColor: 'white' },
  },
);

// Export it as the root component
export default MainStackNavigator;