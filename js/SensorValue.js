'use strict';

import React, { Component } from 'react';

import {
    Text,
    View,
    Animated,
    StyleSheet
} from 'react-native';

// import { Arrow } from './Arrow';


import {
    ViroARScene,
    ViroText,
    ViroARSceneNavigator,
} from 'react-viro';

export default class SensorValue extends Component {

    constructor() {
        super();

        this.state = {
            position: [0, 0, 0],
            rot: [0, 0, 0],
            forward: [0, 0, 0],
            up: [0, 0, 0],
            // arrow: 0,
        };

        this.setPosition = this.setPosition.bind(this);
        this.setRot = this.setRot.bind(this);
        this.setForward = this.setForward.bind(this);
        this.setUp = this.setUp.bind(this);

        this.getARScene = this.getARScene.bind(this);
        this.getValueDisplay = this.getValueDisplay.bind(this);
        this.getRotValue = this.getRotValue.bind(this);
        this.getPosValue = this.getPosValue.bind(this);
        // this.getArrow = this.getArrow.bind(this);
    }

    render() {
        return (
            <View style={styles.outerContainer}>
                {this.getARScene()}

                {this.getValueDisplay()}
                {/* {this.getRotValue()} */}
                {/* {this.getArrow()} */}

            </View>
        );
    }

    getArrow() {

        let overlayStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
        }
        return (
            <Animated.View style={{ ...overlayStyle, opacity: 1 }}>

                <Arrow dir='left' />
            </Animated.View>
        );
    }

    getValueDisplay() {

        let overlayStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
        }
        return (
            <Animated.View style={{ ...overlayStyle, opacity: 1 }}>
                {this.getPosValue()}
                {this.getRotValue()}
            </Animated.View>
        );
    }

    getPosValue() {

        let overlayStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
        }

        return (
            <Animated.View style={{ ...overlayStyle, opacity: 1 }}>
                <View style={styles.readyContainer}>
                    <Text style={styles.instructionText}>
                        {'Position\n' +
                            'x:\t' + this.state.position[0] + '\n' +
                            'y:\t' + this.state.position[1] + '\n' +
                            'z:\t' + this.state.position[2]}
                    </Text>
                </View>
            </Animated.View>
        );
    }

    getRotValue() {
        let overlayStyle = {
            position: 'absolute',
            width: '100%',
            height: '100%',
        }

        return (
            <Animated.View style={{ ...overlayStyle, opacity: 1 }}>
                <View style={styles.readyContainer}>
                    <Text style={styles.instructionText}>
                        {'Rotation\n' +
                            this.state.rot[0] + '\n' +
                            this.state.rot[1] + '\n' +
                            this.state.rot[2]}
                    </Text>
                </View>
            </Animated.View>
        );
    }


    getARScene() {
        let viroAppProps = {
            setPosition: this.setPosition,
            setRot: this.setRot,
            setForward: this.setForward,
            setUp: this.setUp
        }

        return (
            <ViroARSceneNavigator
                ref={(ref) => { this.arNavigator = ref }}
                // apiKey={apiKey}
                viroAppProps={viroAppProps}
                initialScene={{
                    scene: require('./SensorValueARScene.js')

                }} />
        );

    }

    setPosition(pos) {
        this.setState({
            position: pos
        })
    }

    setRot(rot) {
        this.setState({
            rot: rot
        })
    }

    setForward(forward) {
        this.setState({
            forward: forward
        })
    }

    setUp(up) {
        this.setState({
            up: up
        })
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

module.exports = SensorValue;