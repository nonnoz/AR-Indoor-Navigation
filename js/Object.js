'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroARScene,
    // ViroMaterials,
    // ViroARPlaneSelector,
    // Viro3DObject,
    // ViroAnimations,
    // ViroText,


} from 'react-viro';

import ArrowWithText from './ArrowWithText';

export default class Object extends Component {

    constructor() {
        super();

        // Set initial state here
        this.state = {
            // text: "Initializing AR..."
        };
    }


    render() {
        const posList = [
            [0, 0, -100],
            [120, 0, 10],
            [0, 0, 130],
            [-150, 0, 30]
        ];
        const instructionList = ["Turn right", "Turn right", "Turn right", "Arrive"];
        const rotList = [0, -90, -180, 90];
        const aniIdx = [0, 1, 0, 1];

        var arrows = [];
        for (var i = 0; i < posList.length; i++) {
            var props = {
                pos: posList[i],
                instruction: instructionList[i],
                key: i,
                rot: rotList[i],
                aniIdx: aniIdx[i],
            };
            arrows.push(<ArrowWithText {...props} />)
        }


        return (
            <ViroARScene>
                {arrows}

            </ViroARScene>
        );

    }
}

module.exports = Object;