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

export default function Text(props) {
    const {
        pos,
        instruction,
        rot,
        aniIdx
    } = props;

    const textPos = [pos[0], pos[1] + 7, pos[2]];
   
    return (
        <ViroNode>
            <ViroAmbientLight
                color="#016295"
                intensity={200}
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
