'use strict';

import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import {
    ViroARScene,
    ViroText,
    ViroARTrackingTargets,
    ViroARImageMarker,
    ViroFlexView,
    ViroARPlane,
    ViroBox,
    ViroMaterials,
} from 'react-viro';


export default class Scan extends Component {

    constructor() {
        super();

        // Set initial state here
        this.state = {
            text: "Please choose your destination",
            clicked: false,
            dir: 0
        };

        this.setMarker();
        // this._getMenu = this._getMenu.bind(this);
        this._getInfo = this._getInfo.bind(this);
        this._setForward = this._setForward.bind(this);
        this._setRight = this._setRight.bind(this);
        this._setLeft = this._setLeft.bind(this);

    }

    setMarker() {
        ViroARTrackingTargets.createTargets({
            "card": {
                source: require('./res/card.png'),
                orientation: "Up",
                physicalWidth: 2
            },
        });
    }

    render() {
        if (this.state.clicked === true && this.state.dir===0) {
            return (
                <ViroARScene>
                    <ViroARImageMarker target={"card"}>
                        <ViroFlexView style={styles.container}
                            width={2.5}
                            height={2}
                            position={[0, 0, 0]}
                            rotation={[-90, 0, 0]}>
                            <ViroText text={"Go right"}
                                width={2}
                                height={2}
                                onClick={this._setRight}
                                style={styles.text} />
                            <ViroText text={"Go forward"}
                                width={2}
                                height={2}
                                onClick={this._setForward}
                                textAlignVertical={'center'}
                                style={styles.text} />
                            <ViroText text={"Go left"}
                                width={2}
                                height={2}
                                onClick={this._setLeft}
                                textAlignVertical={'bottom'}
                                style={styles.text} />
                        </ViroFlexView>
                    </ViroARImageMarker>

                    <ViroARPlane minHeight={.5} minWidth={.5} alignment={"Horizontal"}>
                         <ViroBox position={[0, -.5, -1]} scale={[.1, .1, .1]} materials={["grid"]} />
                         <ViroBox position={[0, -.5, -1]} scale={[.1, .1, .1]} materials={["grid"]} />
                         <ViroBox position={[0, -.5, -1]} scale={[.1, .1, .1]} materials={["grid"]} />

                    </ViroARPlane>
                </ViroARScene>
            );
        }
        // if (this.state.dir === 1) {
        //     return (
        //         <ViroARScene>
        //             <ViroARPlane minHeight={.5} minWidth={.5} alignment={"Horizontal"}>
        //                 <ViroBox position={[0, -.5, -1]} scale={[.1, .1, .1]} materials={["grid"]} animation={{ name: "rotate", run: true, loop: true }} />
        //             </ViroARPlane>
        //         </ViroARScene>
        //     );
        // }
        // if(this.state.dir === 2){
        //     return (
        //         <ViroARScene>
        //             <ViroARPlane minHeight={.5} minWidth={.5} alignment={"Horizontal"}>
        //                 <ViroBox position={[0, -.5, -1]} scale={[.1, .1, .1]} materials={["grid"]} animation={{ name: "rotate", run: true, loop: true }} />
        //             </ViroARPlane>
        //         </ViroARScene>
        //     );
        // }

        // if(this.state.dir === 3){
        //     return (
        //         <ViroARScene>
        //             <ViroARPlane minHeight={.5} minWidth={.5} alignment={"Horizontal"}>
        //                 <ViroBox position={[0, -.5, -1]} scale={[.1, .1, .1]} materials={["grid"]} animation={{ name: "rotate", run: true, loop: true }} />
        //             </ViroARPlane>
        //         </ViroARScene>
        //     );
        // }

        return (
            <ViroARScene
                onClick={this._getInfo}>
                <ViroARImageMarker target={"card"}>
                    <ViroFlexView style={styles.container}
                        width={2.5}
                        height={2}
                        position={[0, 0, 0]}
                        rotation={[-90, 0, 0]}>
                        <ViroText text={this.state.text}
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
            clicked: true,
        })
    }

    _setRight() {
        this.setState({
            dir: 2,
        })
    }

    _setLeft() {
        this.setState({
            dir: 3,
        })
    }

    _setForward() {
        this.setState({
            dir: 1,
        })
    }


    // _getMenu() {

    //     return (
    //         <ViroARScene>
    //             <ViroARImageMarker target={"card"}>
    //                 <Menu />
    //             </ViroARImageMarker>
    //         </ViroARScene>
    //     );
    // }

}

var styles = StyleSheet.create({
    text: {
        fontFamily: 'Arial',
        fontSize: 32,
        flex: .5,
        color: '#FFFFFF',
        flexDirection: 'column',
    },
    container: {
        flexDirection: 'column',
        backgroundColor: "#E98300",
        padding: .2,
    },
});


ViroMaterials.createMaterials({
    grid: {
      diffuseTexture: require('./res/material.png'),
    },
  });

module.exports = Scan;