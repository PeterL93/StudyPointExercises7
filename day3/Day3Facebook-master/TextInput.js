import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';

const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)

class TextInput extends React.Component {
    static navigationOptions = { title: "Learn about Text Input" }
    render() {
        return (
            <View>
                <TextInput style={styles.searchInput}
                           value={this.state.searchString}
                           onChange={this._onSearchTextChanged}
                           placeholder='Search via id'/>
            </View>
        )
    }
}
export default TextInput;