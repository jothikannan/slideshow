import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text, Button } from 'react-native';
// import all basic components
 
export default class Screen2 extends Component {
  //Screen2 Component
  render() {
    return (
      <View style={styles.MainContainer}>
        <Text style={{ fontSize: 23 }}> Screen 2 </Text>
        <Button title="Goto SLider" onPress={() => this.props.navigation.navigate("Screen3")} />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});