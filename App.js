/*
import React, {Component} from 'react';
import {ViroARSceneNavigator} from 'react-viro';
// import {Scan} from "./js/Scan";
import {SensorValue} from "./js/SensorValue";


const InitialARScene = require('./js/SensorValue');

var sharedProps = {
  apiKey:"API_KEY_HERE",
}

export default class ViroSample extends Component {
    constructor() {
        super();

        this.state = {
            sharedProps: sharedProps
        };

        this._getARNavigator = this._getARNavigator.bind(this);
    }

    render() {
      return this._getARNavigator();
    }

    _getARNavigator() {
        return (
            <ViroARSceneNavigator {...this.state.sharedProps}
                                  initialScene={{scene: InitialARScene}}/>
        );
    }
}

module.exports = ViroSample;

*/


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

    'VirtualWithMap': require('./js/VirtualWithMap.js'),
    // 'VirtualCar': require('./js/VirtualCar.js'),
    'Object': require('./js/Object.js'),
    'Arrow': require('./js/ArrowWithText.js'),

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

// ViroCodeSamplesSceneNavigator = require('./js/SensorValue');
// ViroCodeSamplesSceneNavigator = require('./js/MapView');
ViroCodeSamplesSceneNavigator = require('./js/VirtualCar');


module.exports = ViroCodeSamplesSceneNavigator;
