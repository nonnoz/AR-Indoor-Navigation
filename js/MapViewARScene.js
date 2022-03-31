'use strict';

import React, { Component } from 'react';

import { StyleSheet } from 'react-native';


import {
    ViroARScene
} from 'react-viro';

export default class MapViewARScene extends Component {
    constructor() {
        super();

        // this.update = this.update.bind(this);
    }

    render() {
        return (
            <ViroARScene
                ref={(scene) => { this.scene = scene }}>
            </ViroARScene>
        );
    }


}

module.exports = MapViewARScene;
