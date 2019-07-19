import React, { Component } from 'react';
import { View , Text ,StyleSheet ,Animated ,TouchableWithoutFeedback } from 'react-native';

export default class Animation1 extends Component {
 constructor( props ){
     super( props );
     this.state={
        colorAnimation:new Animated.Value(0),
        scaleAnimation:new Animated.Value(0),
        opacityAnimation:new Animated.Value(1)
    }
 }

    startAnimation = ()=>{
        Animated.parallel([
            Animated.timing( this.state.colorAnimation , {
                toValue:1,
                timing:100
            }),
            Animated.timing( this.state.scaleAnimation , {
                toValue:2,
                timing:400
            }),
            Animated.timing( this.state.opacityAnimation , {
                toValue:0,
                timing:1000
            })
        ]).start();
    }
    render() {
        const colorAnimate = this.state.colorAnimation.interpolate({
            inputRange:[0,1],
            outputRange:["rgb(94,5,66)","rgb(95,9,33)"]
        });
        const colorStyle ={
            backgroundColor:colorAnimate
        }
        const animatedStyle = {
            transform:[{
                scale:this.state.scaleAnimation
            }],
           
        }
        const opacityStyle ={
            opacity:this.state.opacityAnimation
        }

        return (
           <View style={styles.container}>
              <TouchableWithoutFeedback onPress={this.startAnimation } onPress={ this.startAnimation }>
              <Animated.View  style={[ styles.square , colorStyle ,opacityStyle ,animatedStyle]}>
                     <Text>Animation3</Text>
                </Animated.View>
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
