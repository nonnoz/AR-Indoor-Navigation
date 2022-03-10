'use strict';

import React, { Component } from 'react';
import { Linking, StyleSheet, DeviceEventEmitter } from 'react-native';
import {
  ViroARScene,
  ViroMaterials,
  ViroNode,
  ViroBox,
  ViroButton,
  ViroAnimations,
  ViroText,
  ViroImage,
  Viro3DObject,
  ViroFlexView,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroAnimatedImage,
  ViroSpotLight,
  ViroQuad,

} from 'react-viro';
import { SensorManager } from 'NativeModules';

var createReactClass = require('create-react-class');

var stepCount;


var ARNameTag = createReactClass({
  getInitialState() {
    return {
      playAnim: false
    }
  },

  render: function () {
    return (
      <ViroARScene>
        <ViroARImageMarker target={"BJL"}>
          <ViroButton
            source={require("./res/Button/button.png")}
            position={[0, 0, 0.05]}
            rotation={[-90, 0, 0]}
            height={0.02}
            width={0.02}
            onClick={this.showBjlInfo} />

          <ViroNode key="card" animation={{ name: this.state.bjlAnimName, run: this.state.playAnim }} scale={[0, 0, 0]}>
            <ViroNode position={[0.02, 0, -0.02]}>
              <ViroFlexView
                rotation={[-90, 0, 0]}
                height={0.03}
                width={0.05}
                style={styles.card}
              >
                <ViroText
                  textClipMode="None"
                  text="Bryan's Name Tag"
                  scale={[.03, .03, .03]}
                  style={styles.textStyle}
                />
              </ViroFlexView>
            </ViroNode>
            <ViroBox
              position={[0.035, 0, 0.05]}
              height={0.01}
              length={0.01}
              width={0.01}
              materials={["white_sphere"]}
              animation={{ name: 'loopRotate', run: true, loop: true }}
              onClick={this.webBryan}
            />
          </ViroNode>


        </ViroARImageMarker>

        <ViroARImageMarker target={"Matt"}>
          <ViroButton
            source={require("./res/Button/button.png")}
            position={[0, 0, 0.05]}
            rotation={[-90, 0, 0]}
            height={0.02}
            width={0.02}
            onClick={this.showMattInfo} />

          <ViroNode key="card" animation={{ name: this.state.mattAnimName, run: this.state.playAnim }} scale={[0, 0, 0]}>
            <ViroNode position={[0.02, 0, -0.02]}>
              <ViroFlexView
                rotation={[-90, 0, 0]}
                height={0.03}
                width={0.05}
                style={styles.card}
              >
                <ViroText
                  textClipMode="None"
                  text="Matt's nametag"
                  scale={[.03, .03, .03]}
                  style={styles.textStyle}
                />
              </ViroFlexView>
            </ViroNode>
            <ViroBox
              position={[0.035, 0, 0.05]}
              height={0.01}
              length={0.01}
              width={0.01}
              materials={["white_sphere"]}
              animation={{ name: 'loopRotate', run: true, loop: true }}
              onClick={this.webMatt}
            />
          </ViroNode>


        </ViroARImageMarker>

        <ViroSpotLight
          color="#ffffff"
          position={[5, 5, 5]}
          direction={[-1, -1, -1]}
          innerAngle={0}
          outerAngle={45} />

        <ViroQuad
          rotation={[-90, 0, 0]}
          position={[0, -0.001, 0]}
          width={2.5} height={2.5}
          arShadowReceiver={true} />


      </ViroARScene>
    );
  },

  showBjlInfo() {
    this.setState({
      bjlAnimName: (this.state.bjlAnimName == "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  },

  showMattInfo() {
    this.setState({
      mattAnimName: (this.state.mattAnimName == "scaleUp" ? "scaleDown" : "scaleUp"),
      playAnim: true
    })
  },


  webMatt() {
    Linking.openURL('https://www.nottingham.edu.cn/cn/Science-Engineering/People/Profile.aspx?id=c856979f-d2aa-47ab-b2b5-3a611c28e461&language=en-GB');
  },
  webBryan() {
    Linking.openURL('https://www.nottingham.edu.cn/en/Science-Engineering/People/Profile.aspx?id=fb164569-58c3-47fc-8851-a507e69b3704&language=en-GB');
  }
});

var styles = StyleSheet.create({
  textStyle: {
    flex: .5,
    fontFamily: 'Roboto',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'top',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'column'
  },
  cardWrapper: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 0.001,
    flex: .5
  },
  subText: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flex: .5
  }
});

ViroAnimations.registerAnimations({
  scaleUp: { properties: { scaleX: 1, scaleY: 1, scaleZ: 1 } },
  scaleDown: { properties: { scaleX: 0, scaleY: 0, scaleZ: 0, } },
  loopRotate: { properties: { rotateZ: "+=45" }, duration: 1000 }

});

ViroARTrackingTargets.createTargets({
  "BJL": {
    source: require('./res/BJL/BJL.jpeg'),
    orientation: "Up",
    physicalWidth: 0.05 // real world width in meters
  }
});

ViroARTrackingTargets.createTargets({
  "Matt": {
    source: require('./res/Matt/Matt.jpeg'),
    orientation: "Up",
    physicalWidth: 0.05 // real world width in meters
  }
});

ViroMaterials.createMaterials({
  white_sphere: {
    lightingModel: "PBR",
    diffuseColor: "rgb(231,231,231)",
  }
});

module.exports = ARNameTag;