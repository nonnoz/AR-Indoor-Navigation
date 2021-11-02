'use strict';

import React, { Component } from 'react';

import { RNCamera } from 'react-native-camera'

import {
    StyleSheet,
    View,
    Animated,
    Easing,
    Image,
    TouchableOpacity,
    Text,
} from 'react-native';

import {
    ViroARScene,
    ViroText,
} from 'react-viro'

export default class Scan extends Component {

    constructor() {
        super();
        // 初始化
        this.state = {
            moveAnim: new Animated.Value(0), // 扫描动画
        };
    }

    // after rendering
    componentDidMount() {
        this.startAnimation();
    }

    startAnimation = () => {
        this.state.moveAnim.setValue(0);
        Animated.timing(
            this.state.moveAnim,
            {
                toValue: -200,
                duration: 1500,
                easing: Easing.linear
            }
        ).start(() => this.startAnimation());
    };

    // 设置扫描高度，速度等
    // startAnimation = () => {
    //     this.state.moveAnim.setValue(258);
    //     Animated.timing(this.state.moveAnim, {
    //         toValue: 0,
    //         duration: 1500,
    //         easing: Easing.linear
    //     }).start(() => this.startAnimation());
    // };

    onBarCodeRead = (result) => {
        if (this.state.data) return
        const { data } = result;
        alert('扫描结果:' + data)
        if (data) this.setState({ data })
    };

    render() {

        return (
            <ViroARScene>
                <RNCamera
                    ref={ref => {
                        this.camera = ref;
                    }}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    onBarCodeRead={this.onBarCodeRead}
                >
                    <Animated.View
                        style={[styles.border,
                        { transform: [{ translateY: this.state.moveAnim }] }
                        ]}
                    />
                </RNCamera>
            </ViroARScene>
        );
        

    }




}

