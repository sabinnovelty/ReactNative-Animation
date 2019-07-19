import React, { Component } from 'react';
import { View , Text ,StyleSheet ,Animated ,Button,TouchableWithoutFeedback } from 'react-native';

const AnimatedButton = Animated.createAnimatedComponent( Button );

export default class Animation4 extends Component {
 constructor( props ){
     super( props );
     this.state={
        animation:new Animated.Value(0),
    }
 }

    startAnimation = ()=>{
            Animated.timing( this.state.animation , {
                toValue:1,
                timing:100
            })
        .start();
    }
    render() {
        const animatedColor = this.state.animation.interpolate({
            inputRange:[0,1],
            outputRange:["red","green"]
        });
         

        return (
           <View style={styles.container}>
           <AnimatedButton title="Press me " onPress={()=>this.startAnimation()}color={animatedColor} />

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
