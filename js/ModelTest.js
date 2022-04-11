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
    ViroSpotLight,
    ViroSurface,
} from 'react-viro';

export default class ModelTest extends Component {

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
                    intensity={200}
                />
                {/* <ViroSpotLight
                    innerAngle={5}
                    outerAngle={25}
                    direction={[0, -1, 0]}
                    position={[0, 5, 0]}
                    color="#ffffff"
                    castsShadow={true}
                    shadowMapSize={2048}
                    shadowNearZ={2}
                    shadowFarZ={7}
                    shadowOpacity={.7}
                /> */}
                <Viro3DObject
                    source={require("./res/arrow/test1.vrx")}
                    resources={[
                        // require('./res/arrow/Arrow5.mtl'),
                        // require('./res/arrow/Map__55_Normal_Bump.tga'),

                        // require('./res/arrow/Arrow5Albedo.png'),
                        // require('./res/arrow/Arrow5AO.png'),
                        // require('./res/arrow/Arrow5Metal.png'),
                        // require('./res/arrow/Arrow5Normal.png'),
                        // require('./res/arrow/Arrow5Rough.png'),
                        // require('./res/arrow/Arrow5UVW.png')
                    ]}
                    highAccuracyEvents={true}
                    position={[0, -15, -50]}
                    scale={[30, 30, 30]}
                    // scale={[1, 1, 1]}
                    rotation={[45, 0, 0]}
                    type="VRX"
                    // materials={"green_mtl"}
                    transformBehaviors={["billboard"]}
                    animation={{ name: 'pointing', run: true, loop: true }}
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
    green_mtl: {
        diffuseColor: "#0B6623",
        lightingModel: "PBR"
    },
    white_mtl: {
        diffuseColor: "#FFFFFF",
        lightingModel: "PBR"
    }
});


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

module.exports = ModelTest;