//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components
import TimedSlideshow from 'react-native-timed-slideshow';

export default class Screen3 extends Component {
  //Screen3 Component
  constructor(props){
    super(props);
    this.state = {
       items :[
        {
            uri: "http://www.lovethemountains.co.uk/wp-content/uploads/2017/05/New-Outdoor-Sports-and-Music-Festival-For-Wales-4.jpg",
            title: "Michael Malik",
            text: "Minnesota, USA",
        },
        {
            uri: "http://blog.adrenaline-hunter.com/wp-content/uploads/2018/05/bungee-jumping-barcelona-1680x980.jpg",
            title: "Victor Fallon",
            text: "Val di Sole, Italy",
            duration: 3000
        },
        {
            uri: "https://greatist.com/sites/default/files/Running_Mountain.jpg",
            title: "Mary Gomes",
            text: "Alps",
            fullWidth: true
        }]
    };
  }


  closeSlider(){
    console.log('close slider');
    this.props.navigation.navigate('Screen2');
 }

  render() {
    const { items } = this.state;
    return (
       <TimedSlideshow
            items={items}
            index={0}
            onClose={this.closeSlider.bind(this)}
        />
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