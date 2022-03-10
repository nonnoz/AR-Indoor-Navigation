'use strict';
import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroFlexView,
  ViroScene
} from 'react-viro';

export default class ScanCode extends Component {

  constructor() {
    super();

    this.state = {
      text: "Please choose your destination"
    };

    this.setMarker();
    this._getInfo = this._getInfo.bind(this);
  }

  setMarker() {
    ViroARTrackingTargets.createTargets({
      "card": {
        source: require('/.res/card.png'),
        orientation: "Up",
        physicalWidth: 0.1  // real world width in meters
      }
    });
  }

  render() {
    return (
      <ViroARScene onClick={this._getInfo}>
        <ViroARImageMarker target={"card"}>
          <ViroFlexView
            width={3}
            height={3}
            position={[0, 0, 1.25]}
            rotation={[-100, 0, 0]}>
            <ViroText
              text={this.state.text}
              width={2}
              height={2}
              style={styles.text} />
          </ViroFlexView>
        </ViroARImageMarker>
      </ViroARScene>
    );
  }

  _getInfo() {
    this.setState({
      text: this.state.text
    })

  }
}

var styles = StyleSheet.create({
  text: {
    fontFamily: 'Arial',
    fontSize: 32,
    flex: .5,
    color: '#FFFFFF'
  }

});


module.exports = ScanCode;

