'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';


import {
    ViroARScene
} from 'react-viro';

export default class SensorValueARScene extends Component {
    constructor() {
        super();

        this.update = this.update.bind(this);
    }

    render() {
        return (
            <ViroARScene
                ref={(scene) => { this.scene = scene }}
                onCameraTransformUpdate={this.update}>
            </ViroARScene>
        );
    }

    update(data) {
        let posX = data.position[0].toFixed(2);
        let posY = data.position[1].toFixed(2);
        let posZ = data.position[2].toFixed(2);

        let rotX = data.rotation[0].toFixed(0);
        let rotY = data.rotation[1].toFixed(0);
        let rotZ = data.rotation[2].toFixed(0);

        let forwardX = data.rotation[0].toFixed(2);
        let forwardY = data.rotation[1].toFixed(2);
        let forwardZ = data.rotation[2].toFixed(2);

        let upX = data.rotation[0].toFixed(2);
        let upY = data.rotation[1].toFixed(2);
        let upZ = data.rotation[2].toFixed(2);


        this.props.arSceneNavigator.viroAppProps.setPosition([posX, posY, posZ]);
        this.props.arSceneNavigator.viroAppProps.setRot([rotX, rotY, rotZ]);
        this.props.arSceneNavigator.viroAppProps.setForward([forwardX, forwardY, forwardZ]);
        this.props.arSceneNavigator.viroAppProps.setUp([upX, upY, upZ]);
    }

}

module.exports = SensorValueARScene;
