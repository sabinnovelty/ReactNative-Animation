import React, { Component } from 'react';
import { View , Text ,StyleSheet ,Animated ,TouchableWithoutFeedback } from 'react-native';

export default class Animation1 extends Component {
 constructor( props ){
     super( props );
     this.state={
        animated:new Animated.Value(150)
    }
 }

    startAnimation = ()=>{
        Animated.timing( this.state.animated , {
            toValue:400,
            timing:1500
        }).start();
    }
    render() {
        const animatedStyle = {
            width:this.state.animated,
            height:this.state.animated ? this.state.animated : 150
        }

        return (
           <View style={styles.container}>
              <TouchableWithoutFeedback onPress={this.startAnimation }>
              <View  style={[ styles.square , animatedStyle]}>
                     <Text>Animation1</Text>
                </View>
                </TouchableWithoutFeedback>

           </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    square: {
        justifyContent: 'center',
        alignItems: 'center',
        width:200,
        height:200,
        backgroundColor: 'red'
      }
})
