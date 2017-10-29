import React from 'react';
import { Text, View, Platform, TouchableOpacity, StyleSheet, Button, WebView } from 'react-native';
import { Constants, WebBrowser } from "expo";
import { StackNavigator } from 'react-navigation';
import basics from "./Basics";
import props from "./Props";
import WhatToDo from "./WhatToDo";
import flexbox from './FlexBox';
import listviews from './listViews';
import state from './State';
import style from './Style';
import textinput from './TextInput';
import touches from './Touches';
import heightwidth from './HeightWidth';
import networking from './Networking';
import helloworldapp from './helloworldapp';


const Touchable = (props) => (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>)

class HomeScreen extends React.Component {
    static navigationOptions = { title: 'Day1 Tutorial' };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View >
                <Text style={{ textAlign: "center", fontSize: 20 }}>See all Demos implemented by cph-fk58</Text>
                <Touchable onPress={() => navigate('web')} title="What I have to do" />
                <Touchable onPress={() => navigate('basics')} title="Basics" />
                <Touchable onPress={() => navigate('props')} title="Props" />
                <Touchable onPress={() => navigate('helloworldapp')} title="helloworldapp" />
                <Touchable onPress={() => navigate('state')} title="State" />
                <Touchable onPress={() => navigate('style')} title="Style" />
                <Touchable onPress={() => navigate('heightwidth')} title="HeightWidth" />
                <Touchable onPress={() => navigate('flexbox')} title="FlexBox" />
                <Touchable onPress={() => navigate('textinput')} title="TextInput" />
                <Touchable onPress={() => navigate('touches')} title="Touches" />
                <Touchable onPress={() => navigate('listviews')} title="ListViews" />
                <Touchable onPress={() => navigate('networking')} title="Networking" />
            </View>
        )
    }
}

export default App = () => <RouteStack style={{ marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight / 2 }} />

const RouteStack = StackNavigator({
    Home: { screen: HomeScreen },
    basics: { screen: basics },
    props: { screen: props },
    flexbox: { screen: flexbox },
    web: { screen: WhatToDo },
    state: { screen: state },
    helloworldapp: { screen: helloworldapp },
    style: { screen: style },
    textinput: { screen: textinput },
    networking: { screen: networking },
    listviews: { screen: listviews },
    touches: { screen: touches },
    

});

const styles = StyleSheet.create({
    button: {
        margin: 3,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },

    buttonText: {
        padding: 7,
        fontSize: 18,
        fontWeight: "bold",
        color: 'white'
    }
})