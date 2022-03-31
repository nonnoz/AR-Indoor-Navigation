'use strict';

import React, { Component } from 'react';

import {StyleSheet} from 'react-native';

import {
	ViroARScene
} from 'react-viro';

export default class ARScene extends Component {
	constructor() {
		super();

		this.update = this.update.bind(this);
	}

	render() {
		return (
			<ViroARScene ref={(scene)=>{this.scene = scene}} onCameraTransformUpdate={this.update}>
			</ViroARScene>
    	);
	}

	// update(data) {
	// 	let X = data.position[0].toFixed(2);
	// 	let Y = data.position[1].toFixed(2);
	// 	let Z = data.position[2].toFixed(2);

	// 	this.props.arSceneNavigator.viroAppProps.setPosition([X, Y, Z]);
	// }
}

module.exports = ARScene;