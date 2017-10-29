import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

class basics extends React.Component {
    static navigationOptions = { title: "basics" }
    render() {
        return (
            <View>
                <Text>Learn The Basics</Text>
            </View>
        )
    }
}
export default basics;