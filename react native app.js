import React from 'react';
import { StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'text': ""}
  }
  render() {
    return (
      <View style={styles.container}>
      <TextInput value={this.state.text}
      style={{width: "50%", height: 40,
      borderColor: 'green', borderwidth: 2}}
      onChangeText={(text)=> this.setState({text})
        />
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