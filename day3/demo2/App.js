

import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import { Video } from "expo"

MyButton = (props) => {
 //I could do something here
  return (
 <TouchableOpacity onPress={props.onPress}>
   <View style={styles.button}>
     <Text style={styles.buttonText}>{props.text}</Text>
   </View>
 </TouchableOpacity>)

}

class CrazyButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {showText: true}
    this.intervalKey = setInterval(()=>{
      const newVal = !this.state.showText;
      this.setState({showText: newVal});
    }, 1000)
  }
  componentWillUnmount(){
    clearInterval
  }
  render () {
    const txt = this.state.showText? this.props.text : "";
    return (
      <MyButton onPress={this.props.onPress} text={txt}></MyButton>
    )
  }
}

FlexDemo = () => (
  <view style={{flex: 1, flexDirection:"row"}}>
    <view style = {{width:50, height:50, color:"green"}}/>
    <view style = {{width:50, height:50, color:"red"}}/>
    <view style = {{width:50, height:50, color:"blue"}}/>
  </view>
)


export default class App extends React.Component {
 render() {
   return (
     <View style={styles.container}>
       <Text>Hi Class</Text>
       <Button title="Hi Class" onPress={() => Alert.alert("Hi Class Again")} />
       <MyButton text="Hi From my Button"  onPress={() => Alert.alert("Hi  Again")}/>
       <CrazyButton text="Hi From my Button"  onPress={() => Alert.alert("Hi  Again")}/>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#fff',
   alignItems: 'center',
   justifyContent: 'center',
 },
 button: {
   marginBottom: 30,
   width: 260,
   alignItems: 'center',
   backgroundColor: '#2196F3'
 },
 buttonText: {
   padding: 10,
   fontSize: 28,
   fontWeight: "bold",
   color: 'white'
 }
});

