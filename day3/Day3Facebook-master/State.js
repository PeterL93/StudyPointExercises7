import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

// Some taken from basiscs

const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)

export default class State extends React.Component {
    static navigationOptions = { title: "Learn about states" }
    constructor(props) {
        super(props);
        this.state = {showText: true};

        setInterval(() => {
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });
        }, 1000);
    }
    render() {
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <View>
                <Text>{display}</Text>
            </View>
        )
    }
}