// 'use strict';

// import React, { Component } from 'react';

// import { StyleSheet } from 'react-native';

// import {
//     ViroARScene,
//     ViroMaterials,
//     ViroARPlaneSelector,
//     Viro3DObject,
//     ViroAnimations,
//     ViroText,


// } from 'react-viro';


// export default class VirtualCharacter extends Component {

//     constructor() {
//         super();

//         // Set initial state here
//         this.state = {
//             // text: "Initializing AR..."
//         };

//         this._getCarModel = this._getCarModel.bind(this);

//     }




//     render() {

//         var arrows = [];
//         for (var i = 0; i < posList.length; i++) {
//             var props = {
//                 pos: posList[i],
//                 instruction: instructionList[i],
//                 dir: dirList[i],
//             };
//             arrows.push(<Arrow {...props} />)
//         }


//         return (
//             <ViroARScene>
//                 {this._getCarModel()}

//             </ViroARScene>
//         );

//     }

//     _getCarModel() {

//         let position = this.state.isReady ? this.state.lastFoundPlaneLocation : [0, 20, 0];

//         var transformBehaviors = this.state.shouldBillboard ? "billboardY" : [];

//         return (
//             <ViroNode position={position} rotation={this.state.modelWorldRotation} transformBehaviors={transformBehaviors}>
//                 <ViroNode ref={(car) => { this.car = car }}
//                     scale={[carScale, carScale, carScale]} >

//                     <ViroAmbientLight ref={(light) => { this.ambientLight = light }} color={'#f5f8e0'}
//                         intensity={200} />

//                     <ViroQuad width={5.691} height={5.691} materials={["dropShadow"]} rotation={[-90, 0, 0]} />

//                     <Viro3DObject
//                         ref={(car) => { this.carRotationNode = car }}
//                         position={[0, 0, 0]}
//                         source={require('./res/car/car_body.vrx')}
//                         type='VRX'
//                         resources={[
//                             require('./res/car/bumblebee_Base_Color.png'),
//                             require('./res/car/bumblebee_Metallic.jpg'),
//                             require('./res/car/bumblebee_Roughness.jpg'),
//                             require('./res/car/bumblebee_Normal_OpenGL.jpg'),
//                         ]} />

//                     {/* Front left - need 2 containers, 1 for the side-to-side rotation, 1 for spin*/}
//                     <ViroNode ref={(wheel) => { this.frontLeftWheelContainer = wheel }}
//                         position={[-.610, .363, -1.336]} >
//                         <ViroNode ref={(wheel) => { this.frontLeftWheel = wheel }} >
//                             <Viro3DObject
//                                 source={require('./res/car/car_wheels.vrx')}
//                                 type='VRX'
//                                 rotation={[0, 180, 0]} // the left wheels need to be rotated 180
//                                 resources={[
//                                     require('./res/car/wheels_Base_Color.jpg'),
//                                     require('./res/car/wheels_Metallic.jpg'),
//                                     require('./res/car/wheels_Roughness.jpg'),
//                                     require('./res/car/wheels_Normal_OpenGL.jpg'),
//                                 ]} />
//                         </ViroNode>
//                     </ViroNode>

//                     {/* Front right - need 2 containers, 1 for the side-to-side rotation, 1 for spin*/}
//                     <ViroNode ref={(wheel) => { this.frontRightWheelContainer = wheel }}
//                         position={[.610, .363, -1.336]} >
//                         <ViroNode ref={(wheel) => { this.frontRightWheel = wheel }} >
//                             <Viro3DObject
//                                 source={require('./res/car/car_wheels.vrx')}
//                                 type='VRX'
//                                 resources={[
//                                     require('./res/car/wheels_Base_Color.jpg'),
//                                     require('./res/car/wheels_Metallic.jpg'),
//                                     require('./res/car/wheels_Roughness.jpg'),
//                                     require('./res/car/wheels_Normal_OpenGL.jpg'),
//                                 ]} />
//                         </ViroNode>
//                     </ViroNode>

//                     {/* Rear left */}
//                     <ViroNode ref={(wheel) => { this.rearLeftWheel = wheel }}
//                         position={[-.610, .363, 1.355]} >
//                         <Viro3DObject
//                             source={require('./res/car/car_wheels.vrx')}
//                             type='VRX'
//                             rotation={[0, 180, 0]} // the left wheels need to be rotated 180
//                             resources={[
//                                 require('./res/car/wheels_Base_Color.jpg'),
//                                 require('./res/car/wheels_Metallic.jpg'),
//                                 require('./res/car/wheels_Roughness.jpg'),
//                                 require('./res/car/wheels_Normal_OpenGL.jpg'),
//                             ]} />
//                     </ViroNode>

//                     {/* Rear right */}
//                     <ViroNode ref={(wheel) => { this.rearRightWheel = wheel }}
//                         position={[.610, .363, 1.355]} >
//                         <Viro3DObject
//                             source={require('./res/car/car_wheels.vrx')}
//                             type='VRX'
//                             resources={[
//                                 require('./res/car/wheels_Base_Color.view'),
//                                 require('./res/car/wheels_Metallic.jpg'),
//                                 require('./res/car/wheels_Roughness.jpg'),
//                                 require('./res/car/wheels_Normal_OpenGL.jpg'),
//                             ]} />
//                     </ViroNode>


//                 </ViroNode>
//             </ViroNode>
//         )
//     }

// }

// var styles = StyleSheet.create({
//     helloWorldTextStyle: {
//         fontFamily: 'Arial',
//         fontSize: 30,
//         color: '#ffffff',
//         textAlignVertical: 'center',
//         textAlign: 'center',
//     },
// });



// module.exports = VirtualCharacter;