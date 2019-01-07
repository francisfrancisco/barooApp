import React, { Component } from 'react';
import { AddItem } from '../components';

class NewItemScreen extends Component{
  static navigationOptions = {
    title: 'New Item',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <AddItem />;
  }
}

export default NewItemScreen
