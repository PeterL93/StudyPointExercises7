import React from  'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';


class Props extends React.Component {
    static navigationOptions = { title: "Props" }
    render() {
        return (
            <View>
                <Text>Hello {this.props.name}!</Text>
            </View>
        )
    }
}
export default Props