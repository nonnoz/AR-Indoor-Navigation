'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroARScene,
    ViroMaterials,
    ViroARPlaneSelector,
    Viro3DObject,
    ViroAnimations,
    ViroText,

    
} from 'react-viro';

import Arrow from './Arrow';

export default class Object extends Component {

    constructor() {
        super();

        // Set initial state here
        this.state = {
            // text: "Initializing AR..."
        };
    }


    render() {
        const posList = [[0, -15, -50],[0,-25,-50]];
        const dirList = ["right", "left"]
        const instructionList = ["Turn left","success"];

        var arrows = [];
        for (var i = 0; i < posList.length; i++){
            var props = {
                pos: posList[i],
                instruction: instructionList[i],
                dir: dirList[i],
            }; 
            arrows.push(<Arrow {...props}/>)
        }


        return (
            <ViroARScene>
                {arrows}
            </ViroARScene>
        );
       
    }
}

var styles = StyleSheet.create({
    helloWorldTextStyle: {
        fontFamily: 'Arial',
        fontSize: 30,
        color: '#ffffff',
        textAlignVertical: 'center',
        textAlign: 'center',
    },
});

// ViroMaterials.createMaterials({
//     grid: {
//         diffuseTexture: require('./res/material.png'),
//     },
//     green_mtl: {
//         diffuseColor: "#0B6623",
//         lightingModel: "PBR"
//     },
//     white_mtl: {
//         diffuseColor: "#FFFFFF",
//         lightingModel: "PBR"
//     }
// });

ViroAnimations.registerAnimations({
    rotate: {
        properties: {
            rotateY: "+=90"
        },
        duration: 250, //.25 seconds
    },
    moveRight: {
        properties: {
            positionX: "+=1"
        },
        duration: 250
    },
    moveLeft: {
        properties: {
            positionX: "-=1",
        },
        duration: 250
    },
    pointing: [
        ["moveRight", "moveLeft"]
    ]
});

module.exports = Object;