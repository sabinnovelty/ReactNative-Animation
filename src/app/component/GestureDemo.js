import React, { Component } from 'react';
import { View , Text ,Animated , PanResponder ,StyleSheet ,Dimensions } from 'react-native';

const DEVICE_WIDTH =  Dimensions.get('window').width;
const SWIPE_THREASHOLD = 0.25 * DEVICE_WIDTH;
const SWIPE_TIMING =250;

export default class GestureDemo extends Component {
    constructor( props ){
        super( props );
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder:()=>true,
            onPanResponderMove:( event , gesture )=>{
                console.log(gesture)
                //it is called when user starts to move his finger inside screen
                position.setValue({ x :gesture.dx , y:gesture.dy});
                
            },
            onPanResponderRelease:( event , { vx, vy } )=>{
                //it is called when user releases his movement;
                console.log('user released move',vx , vy );
             Animated.decay( this.state.position , {
                 velocity:{ x: vx , y:vy },
                 deceleration:0.997
             })
              
            }
        });
        this.state = { panResponder ,position }
    }

    resetPosition(){
        Animated.spring( this.state.position , {
            toValue: { x:0 , y: 0 }
        }).start();
    }

    getStyle(){
        const { position }  = this.state;
        const rotate = position.x.interpolate({
            inputRange:[-500,0,500 ],
            outputRange:['120deg','0deg','120deg']
        })
        return {
            ...position.getLayout(),
            transform:[{
                rotate
            }]
        }
    }
    render() {
    
        return (
         <View  style={styles.container}>
             <Animated.View { ...this.state.panResponder.panHandlers } style={[styles.square,this.getStyle()]}  >
                    <Text>Gesture Handler</Text>
             </Animated.View>
         </View>
        )
    }
}

//Note:this.state.panResponder.panHandlers contains callaback functions whic is used to intercept the movement of user gesture

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    square: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        height: 200,
        backgroundColor: 'red'
      }
})


