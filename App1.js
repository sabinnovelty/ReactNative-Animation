import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
  Animated,  
  TouchableWithoutFeedback
} from 'react-native'
import Ball from './src/app/component/Ball'

export default class App extends Component {
  state={
    animated:new Animated.Value(0)
  }

  startAnimation = ()=>{
    Animated.timing( this.state.animated ,{
      toValue:1,
      timing:1500
    }).start(()=>{         
      Animated.timing( this.state.animated , {
        toValue:0,
        timing:1400
      }).start();
    });
  }
  render () {
    const animatedStyle = {
      transform:[
        {scale:this.state.animated}
      ]
    }
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={this.startAnimation}>
          <Animated.View style={[ styles.square ,animatedStyle ]}>

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
