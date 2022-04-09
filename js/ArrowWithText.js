'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroText,
    ViroConstants,
    ViroMaterials,
    ViroARPlaneSelector,
    ViroNode,
    ViroAnimations,
    ViroQuad,
    Viro3DObject,
    ViroAmbientLight,
    ViroSpotLight,
} from 'react-viro';

export default function ArrowWithText(props) {
    const {
        pos,
        instruction,
        rot,
        aniIdx
    } = props;

    const textPos = [pos[0], pos[1]+5, pos[2]];
    var aniType = "pointingRightLeft";
    if (aniIdx == 1){
        aniType = "pointingForwardBack"
    }

    return (
        <ViroNode position={[0, -1, -1]} dragType="FixedToWorld" onDrag={() => { }}>
            <ViroAmbientLight
                color="#016295"
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
            <ViroText
                // text={instruction}
                text={instruction}

                textAlign="center"
                textAlignVertical="top"
                color="#ff0000"
                width={20} 
                height={5}
                style={styles.textStyle}
                position={textPos}
                rotation={[0,rot,0]}
            />
            <Viro3DObject
                source={require("./res/arrow/Arrow5.obj")}
                resources={[
                    // require('./res/arrow/Arrow5.mtl'),

                    // require('./res/arrow/Arrow5Albedo.png'),
                    // require('./res/arrow/Arrow5AO.png'),
                    // require('./res/arrow/Arrow5Metal.png'),
                    // require('./res/arrow/Arrow5Normal.png'),
                    // require('./res/arrow/Arrow5Rough.png'),
                    // require('./res/arrow/Arrow5UVW.png')
                ]}
                highAccuracyEvents={true}
                position={pos}
                // scale={[30, 30, 30]}
                scale={[1, 1, 1]}
                rotation={[0,rot,0]}

                type="OBJ"
                // transformBehaviors={["billboard"]}
                animation={{ name: aniType, run: true, loop: true }}
            />
        </ViroNode>
    );
}

var styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Arial',
        fontSize: 300,
        color: '#213d7e',
        // textAlignVertical: 'center',
        // textAlign: 'center',

        // fontFamily: "Arial", fontSize: 20, fontStyle: "italic", color: "#0000FF"
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
            positionX: "+=4"
        },
        duration: 250
    },
    moveLeft: {
        properties: {
            positionX: "-=4",
        },
        duration: 250
    },
    moveForward: {
        properties: {
            positionZ: "+=4"
        },
        duration: 250
    },
    moveBack: {
        properties: {
            positionZ: "-=4",
        },
        duration: 250
    },
    pointingRightLeft: [
        ["moveRight", "moveLeft"]
    ],
    pointingForwardBack: [
        ["moveForward", "moveBack"]
    ],
});

