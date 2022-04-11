'use strict';

import React, { Component } from 'react';

import {
    AppRegistry,
} from 'react-native';

import {
    ViroARSceneNavigator,
} from 'react-viro';

var createReactClass = require('create-react-class');

/*
 * TODO: Add your API key below!!
 */
var apiKey = "API_KEY_HERE";

var arScenes = {

    // 'VirtualCar': require('./js/VirtualCar.js'),
    'Object': require('./js/Object.js'),

}


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

ViroCodeSamplesSceneNavigator = require('./js/VirtualCar');


module.exports = ViroCodeSamplesSceneNavigator;
