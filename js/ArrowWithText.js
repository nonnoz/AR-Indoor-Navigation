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
        pos,            // position
        instruction,    // text content
        rot,            // rotation degree
        aniIdx          // type of animation
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
                highAccuracyEvents={true}
                position={pos}
                scale={[1, 1, 1]}
                rotation={[0, rot, 0]}
                type="OBJ"
                animation={{ name: aniType, run: true, loop: true }}
            />
            <ViroFlexView
                style={styles.textContainer}
                position={textPos}
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
        textAlign: 'center',
        paddingTop: 1,
        fontWeight: "700",
    },
    textContainer: {
        flexDirection: 'column',
        backgroundColor: "#ffffffdd",
    },
});

ViroAnimations.registerAnimations({
    moveRight: {
        properties: {
            positionX: "+=4"
        },
        duration: 200   // .2 seconds
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