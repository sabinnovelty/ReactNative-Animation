import React, { Component } from 'react'
import { Platform, StyleSheet, Text,TextInput, View, Animated ,TouchableWithoutFeedback } from 'react-native'
import Ball from './src/app/component/Ball'

export default class App extends Component {
  state = {
    animated:new Animated.Value(0),
    textInput:300
  }

  startAnimation=()=>{
      Animated.timing( this.state.animated , {
        toValue:1,
        timing:2000
      }).start();
  }

  startInputAnimation=()=>{
    Animated.timing( this.state.textInput , {
      toValue:500,
      timing:1500
    }).start()
  }
  render () {
    const interpolation = this.state.animated.interpolate({
      inputRange:[0,1],
      outputRange:[1,2]
    })
    const animatedStyle = {
      // opacity:this.state.animated
       transform:[ { scaleY:interpolation } ]
    }

    const opaStyle = {
      opacity:this.state.animated
    }


    return (
      // <View style={styles.container}>
      //   <Ball />
      // </View>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
           <Animated.View style={[ styles.square , opaStyle ]}>

           </Animated.View>

        </TouchableWithoutFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red'
  }
})
