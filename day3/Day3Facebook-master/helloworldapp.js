import React, { Component } from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)

export default class HelloWorldApp extends Component {
    static navigationOptions = { title: "Learn about Props" }
  render() {
    return (
      <Text>Hello world!</Text>
    );
  }
}