'use strict';

import React, { Component } from 'react';
import { AppRegistry, } from 'react-native';
import { ViroARSceneNavigator, } from 'react-viro';

var createReactClass = require('create-react-class');

var apiKey = "API_KEY_HERE";

var arScenes = {
    'Object': require('./js/Object.js'),
}

// arrow with text scene
var ViroCodeSamplesSceneNavigator = createReactClass({
    render: function () {
        return (
            <ViroARSceneNavigator
                initialScene={{
                    scene: arScenes['Object'],
                }}
                apiKey={apiKey} />
        );
    }
});

// virtual car scene
// Please uncomment the below line to show the virtual car scene
ViroCodeSamplesSceneNavigator = require('./js/VirtualCar');

module.exports = ViroCodeSamplesSceneNavigator;