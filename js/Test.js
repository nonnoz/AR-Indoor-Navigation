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
            text: "Initializing AR..."
        };

        // bind 'this' to functions
        // this._onInitialized = this._onInitialized.bind(this);
    }

    render() {
        return (
            <ViroARScene>
                {/* <ViroText text={this.state.text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} animation={{ name: "rotate", run: true, loop: true }} /> */}
                {/* <ViroARPlaneSelector>
            <ViroBox position={[0, -.5, -1]} scale={[.3, .3, .1]} materials={["grid"]} />
        </ViroARPlaneSelector> */}

                {/* <ViroNode position={[0, -1, 0]} dragType="FixedToWorld" onDrag={() => { }} >
          <ViroBox position={[0, 1, -1]} scale={[.3, .3, .1]} materials={["grid"]} />
        </ViroNode> */}
                <ViroAmbientLight
                    color="#ffffff"
                />
                <Viro3DObject
                    source={require("./res/arrow/Arrow5.obj")}
                    resources={[
                        require('./res/arrow/Arrow5.mtl'),
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
                    scale={[0.2, 0.2, 0.2]}
                    rotation={[45, 0, 0]}
                    type="OBJ"
                    transformBehaviors={["billboard"]}
                    animation={{name: 'rotate', run: true, loop: true}}
                />

            </ViroARScene>
        );
    }

    //   _onInitialized(state, reason) {
    //     if (state == ViroConstants.TRACKING_NORMAL) {
    //       this.setState({
    //         text: "Hello World!"
    //       });
    //     } else if (state == ViroConstants.TRACKING_NONE) {
    //       // Handle loss of tracking
    //     }
    //   }
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