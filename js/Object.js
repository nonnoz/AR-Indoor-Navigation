'use strict';

import React, { Component } from 'react';

import {
    ViroARScene,
    ViroImage,
} from 'react-viro';

import ArrowWithText from './ArrowWithText';

var markerImage = require('./res/marker/marker.png');

export default class Object extends Component {

    render() {
        // position suitable for using iphone
        /*
        const posList = [
            [0, 0, -100],
            [120, 0, 5],
            [10, 0, 135],
        ];
        */

        // position suitable for using ipad
        const posList = [
            [0, 0, -100],
            [120, 0, 5],
            [5, 0, 180],
        ];

        const instructionList = ["Turn right", "Turn right", "Turn right"];
        const rotList = [0, -90, -180];
        const aniIdx = [0, 1, 0];
        const markerPos = [-100, 0, 23];

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
                <ViroImage
                    width={10}
                    height={13.5}
                    opacity={1.0}
                    scale={[0.5, 0.5, 0.5]}
                    source={markerImage}
                    position={markerPos}
                    rotation={[0, 90, 0]}
                />
                {arrows}
            </ViroARScene>
        );
    }
}

module.exports = Object;