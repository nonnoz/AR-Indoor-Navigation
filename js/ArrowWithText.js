'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';

import {
    ViroText,
    ViroNode,
    ViroAnimations,
    Viro3DObject,
    ViroAmbientLight,
    ViroFlexView,
} from 'react-viro';

export default function ArrowWithText(props) {
    const {
        pos,
        instruction,
        rot,
        aniIdx
    } = props;

    const textPos = [pos[0], pos[1] + 7, pos[2]];
    var aniType = "pointingRightLeft";
    if (aniIdx == 1) {
        aniType = "pointingForwardBack"
    }

    return (
        <ViroNode>
            <ViroAmbientLight
                color="#016295"
                intensity={200}
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
                rotation={[0, rot, 0]}

                type="OBJ"
                // transformBehaviors={["billboard"]}
                animation={{ name: aniType, run: true, loop: true }}
            />

            <ViroFlexView
                style={styles.titleContainer}
                position={textPos}
                // rotation={[0, 90, 0]}
                height={5}
                width={18}
                rotation={[0, rot, 0]}
            >
                <ViroText
                    text={instruction}
                    textAlign="center"
                    textAlignVertical="top"
                    color="#ff0000"
                    width={18}
                    height={5}
                    style={styles.textStyle}
                    position={textPos}
                />
            </ViroFlexView>
        </ViroNode>
    );
}

var styles = StyleSheet.create({
    textStyle: {
        fontFamily: 'Arial',
        fontSize: 300,
        color: '#213d7e',
        // textAlignVertical: 'center',
        textAlign: 'center',
        paddingTop: 1,
        fontWeight: "700",

        // fontFamily: "Arial", fontSize: 20, fontStyle: "italic", color: "#0000FF"
    },
    titleContainer: {
        flexDirection: 'column',
        backgroundColor: "#ffffffdd",
        // padding: 1,
    },
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
        duration: 200
    },
    moveLeft: {
        properties: {
            positionX: "-=4",
        },
        duration: 200
    },
    moveForward: {
        properties: {
            positionZ: "+=4"
        },
        duration: 200
    },
    moveBack: {
        properties: {
            positionZ: "-=4",
        },
        duration: 200
    },
    pointingRightLeft: [
        ["moveLeft", "moveRight", "moveRight", "moveLeft"]
    ],
    pointingForwardBack: [
        ["moveBack", "moveForward", "moveForward", "moveBack"]
    ],
});

