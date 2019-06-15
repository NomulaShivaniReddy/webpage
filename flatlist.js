import React from 'react';
import { StyleSheet, Text, FlatList, View} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'text': ""}
  }
  render() {
    return (
      <View style={styles.container}>
      <FlatList style={{height: 80}}
      data={[
        {key: '1', text: "Dream Theatre"},
        {key: '2', text: "AeroSmith"},
        {key: '3', text: "Pink Floyd"},
        {key: '4', text: "The Eagles"},
        {key: '5', text: "Pearl"},
        {key: '6', text:  "Beatles"}, ]}
        renderItem={({item}) =><Text>{item.text}</Text>} />
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