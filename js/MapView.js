'use strict';

import React, { Component } from 'react';

import {
    Text,
    View,
    Animated,
    StyleSheet,
    Image,
} from 'react-native';


import {
    ViroARScene,
    ViroARSceneNavigator,
} from 'react-viro';

export default class MapView extends Component {

    constructor() {
        super();

        this.state = {

        };

        this.getARScene = this.getARScene.bind(this);
        this.getMapDisplay = this.getMapDisplay.bind(this);
    }

    render() {
        return (
            
                <View style={styles.outerContainer}>
                    {this.getARScene()}
                    {this.getMapDisplay()}
                </View>
            
        );
    }

    getMapDisplay() {

        let overlayStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
        }
        return (
            <Animated.View style={{ ...overlayStyle, opacity: 1 }}>
                <View style={styles.readyContainer}>
                    <Image source={require('./res/map.jpg')} />

                </View>
            </Animated.View>
        );
    }


    getARScene() {
        

        return (
            <ViroARSceneNavigator
                ref={(ref) => { this.arNavigator = ref }}
                // apiKey={apiKey}
                // viroAppProps={viroAppProps}
                initialScene={{
                    scene: require('./MapViewARScene.js')

                }} />
        );
    }
}


var styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        flexDirection: 'row',
    },
    instructionText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'left',
        // fontFamily: 'BebasNeue-Regular',
    },
    readyContainer: {
        position: 'absolute',
        height: 220,
        width: '100%',
        bottom: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

module.exports = MapView;