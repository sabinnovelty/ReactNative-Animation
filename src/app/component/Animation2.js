import React, { Component } from 'react';
import { View , Text ,StyleSheet ,Animated ,TouchableWithoutFeedback } from 'react-native';

export default class Animation1 extends Component {
 constructor( props ){
     super( props );
     this.state={
        animated:new Animated.Value(0),
        width:200
    }
 }

    startAnimation = ()=>{
        Animated.timing( this.state.animated , {
            toValue:1,
            timing:1000
        }).start(()=>{
            Animated.timing( this.state.width , {
                toValue:400,
                timing:2000
            }).start();
        });
    }
    render() {
        // const randomValue = 1;
        // const newAnimated = Animated.add( this.state.animated , randomValue );
        const interpolation = this.state.animated.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','4200deg']
        })
        const animatedStyle = {
            transform:[{
                rotate:interpolation
            }],
            width:this.state.width
        }

        return (
           <View style={styles.container}>
              <TouchableWithoutFeedback onPress={this.startAnimation } onPress={ this.startAnimation }>
              <Animated.View  style={[ styles.square , animatedStyle]}>
                     <Text>Animation1</Text>
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
