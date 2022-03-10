'use strict';

import React, {Component} from 'react';

import {StyleSheet} from 'react-native';

import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroFlexView
} from 'react-viro';

export default class MarkerScene extends Component {

    constructor() {
        super();

        // Set initial state here
        this.state = {
            text: "Initializing AR...",
            nextMeeting: "",
            isAvailable: true
        };

        this.setMarker();
        this._getInfo = this._getInfo.bind(this);
    }

    setMarker() {
        ViroARTrackingTargets.createTargets({
            "card": {
                source: require('./res/card.png'),
                orientation: "Up",
                physicalWidth: 1
            },
        });
    }

    render() {
        return (
            <ViroARScene 
                         onClick={this._getInfo}>
                <ViroARImageMarker target={"card"}>
                    <ViroFlexView style={this.state.isAvailable ? styles.containerAvail : styles.containerNotAvail}
                                  width={3}
                                  height={3}
                                  position={[0, 0, 1.25]}
                                  rotation={[-100, 0, 0]}>
                        <ViroText text={this.state.text}
                                  width={2}
                                  height={2}
                                  style={styles.text}/>
                        <ViroText text={this.state.nextMeeting}
                                  position={[0, -1, 0]}
                                  width={2.5}
                                  height={2}
                                  style={styles.nextMeeting}/>
                    </ViroFlexView>
                </ViroARImageMarker>
            </ViroARScene>
        );
    }

    

    _getInfo() {
        this.setState({
            isAvailable: this.state.isAvailable ? false : true,
            nextMeeting: this.state.isAvailable ? `Next meeting: availble` : `Next meeting: not availble`,
            text: this.state.isAvailable ? `Available` : 'Not Available'
        })

    }
}

var styles = StyleSheet.create({
    text: {
        fontFamily: 'Arial',
        fontSize: 32,
        flex: .5,
        color: '#FFFFFF'
    },
    nextMeeting: {
        fontFamily: 'Arial',
        fontSize: 32,
        flex: .5,
        color: '#FFFFFF'
    },
    containerAvail: {
        flexDirection: 'column',
        backgroundColor: "#E98300",
        padding: .2,
    },
    containerNotAvail: {
        flexDirection: 'column',
        backgroundColor: "#e91530",
        padding: .2,
    }
});

module.exports = MarkerScene;