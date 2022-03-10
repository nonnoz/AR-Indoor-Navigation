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
    'SensorValue': require('./js/SensorValue.js'),
    'ARNameTag': require('./js/ARNameTag.js'),
    'DirectionText': require('./js/DirectionText.js'),
    'Test': require('./js/Test.js'),

}


var ViroCodeSamplesSceneNavigator = createReactClass({
    render: function () {
        return (
            <ViroARSceneNavigator
                initialScene={{
                    scene: arScenes['DirectionText'],
                }}
                apiKey={apiKey} />
        );
    }
});

// ViroCodeSamplesSceneNavigator = require('./js/SensorValue');


module.exports = ViroCodeSamplesSceneNavigator;
