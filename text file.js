import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
class Greeting extends React.Component{
  render(){
    return(
      <Text>Hi {this.props.name}</Text>
      )
  }
}
export default class App extends React.Component {
  
  render() {
    return (
      <View style={styles.container}>
      <Greeting name="shivani"></Greeting>
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
});