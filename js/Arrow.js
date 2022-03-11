'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroARScene,
    ViroText,
    ViroConstants,
    ViroBox,
    ViroMaterials,
    ViroARPlaneSelector,
    ViroNode,
    ViroAnimations,
    ViroQuad,
    Viro3DObject,
    ViroAmbientLight,
} from 'react-viro';

export default class Test extends Component {

    constructor() {
        super();

        // Set initial state here
        this.state = {
            // text: "Initializing AR..."
        };
    }

    render() {
        return (
            <ViroARScene>
                <ViroAmbientLight
                    color="#ffffff"
                />
                <Viro3DObject
                    source={require("./res/arrow/Arrow5.fbx")}
                    resources={[
                        // require('./res/arrow/Arrow5.mtl'),
                        // require('./res/arrow/Map__55_Normal_Bump.tga'),

                        require('./res/arrow/Arrow5Albedo.png'),
                        require('./res/arrow/Arrow5AO.png'),
                        require('./res/arrow/Arrow5Metal.png'),
                        require('./res/arrow/Arrow5Normal.png'),
                        require('./res/arrow/Arrow5Rough.png'),
                        require('./res/arrow/Arrow5UVW.png')
                    ]}
                    highAccuracyEvents={true}
                    position={[0, -15, -50]}
                    scale={[1, 1, 1]}
                    rotation={[45, 0, 0]}
                    type="VRX"
                    transformBehaviors={["billboard"]}
                    animation={{name: 'rotate', run: true, loop: true}}
                />

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

ViroMaterials.createMaterials({
    grid: {
        diffuseTexture: require('./res/material.png'),
    },
});

ViroAnimations.registerAnimations({
    rotate: {
        properties: {
            rotateY: "+=90"
        },
        duration: 250, //.25 seconds
    },
});

ViroAnimations.registerAnimations({
    rightArrow: {
        properties: {
            rotateY: "+=90"
        },
        duration: 500,
    },
});

module.exports = Test;