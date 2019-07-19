import React, { Component } from 'react';
import { View , Text ,StyleSheet ,Animated } from 'react-native';


export default class Ball extends Component {
    componentWillMount(){
        console.log('component will mount');
        this.position = new Animated.ValueXY(0,0);
        Animated.spring( this.position , {
          toValue:{ x:100,y:100}
        }).start()
      }
      componentDidMount(){
        console.log('component did mount')
      }
    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.container}>
                
                </View>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black',
        borderRadius:50,
        width:100,
        height:100
    }
})
