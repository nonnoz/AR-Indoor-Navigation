import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Easing,
  Image,
  ActivityIndicator,
  Alert,
  Platform,
} from 'react-native';

import * as PlatformUtils from './PlatformUtils';

import {
  ViroARSceneNavigator,
  ViroConstants,
} from 'react-viro';

var joystickWidth = 200;
var turnTime = 1740;

var apiKey = "YOUR_API_KEY_HERE";
export default class VirtualCar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // initial state here
      showInstructions: true,
      instructionOpacity: new Animated.Value(1),
      carControlsOpacity: new Animated.Value(0),
      isReady: false,
      isOverPlane: false,
      left: false,
      up: false,
      right: false,
      down: false,
      touchLocation: "0,0",
      leftRightRatio: 0,
      shouldResetCar: false,
      isRecording: false,
      shouldPlayMedia: true, // whether or not the AR session should play media (probably because its hidden)
      hours: '00',
      minutes: '00',
      seconds: '00',
      start: false,
      showMap: false,
      mapIdx: 0,
    }

    // bind functions here
    this.getViroARView = this.getViroARView.bind(this);
    this.exitAR = this.exitAR.bind(this);

    this.getReadyUI = this.getReadyUI.bind(this);
    this.ready = this.ready.bind(this);
    this.getInstructions = this.getInstructions.bind(this);

    this.setIsOverPlane = this.setIsOverPlane.bind(this);

    this.resetCar = this.resetCar.bind(this);

    this.getCarControls = this.getCarControls.bind(this);
    this.getResetButton = this.getResetButton.bind(this);

    this.getPressDown = this.getPressDown.bind(this);
    this.getPressUp = this.getPressUp.bind(this);

    this.joystickStart = this.joystickStart.bind(this);
    this.joystickMove = this.joystickMove.bind(this);
    this.joystickEnd = this.joystickEnd.bind(this);
    this.setJoystickProps = this.setJoystickProps.bind(this);

    this.getStartButton = this.getStartButton.bind(this);
    this.setStartState = this.setStartState.bind(this);
    this.startGuide = this.startGuide.bind(this);
    this.turnRight = this.turnRight.bind(this);

    this.getMapDisplay = this.getMapDisplay.bind(this);
    this.getMapButton = this.getMapButton.bind(this);
    this.setMapState = this.setMapState.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {

    let text = "" + (this.state.left ? "Left," : "") + (this.state.up ? "Up," : "")
      + (this.state.right ? "Right," : "") + (this.state.down ? "Down," : "")

    return (
      <View style={styles.outerContainer}>

        {this.getViroARView()}

        {this.getCarControls()}

        {/* Get instructions and ready */}
        {this.getReadyUI()}
        {this.getInstructions()}
        {this.getMapDisplay()}
      </View>
    )
  }

  getViroARView() {
    // use viroAppProps to pass in "changing/dynamic" values, passProps is "not" dynamic.
    let viroAppProps = {
      direction: (this.state.left ? 1 : 0) + (this.state.up ? 2 : 0) + (this.state.right ? 4 : 0) + (this.state.down ? 8 : 0),
      leftRightRatio: this.state.leftRightRatio,
      shouldResetCar: this.state.shouldResetCar,
      isReady: this.state.isReady,
      setIsOverPlane: this.setIsOverPlane,
    }
    return (
      <ViroARSceneNavigator
        ref={(ref) => { this.arNavigator = ref }}
        apiKey={apiKey}
        viroAppProps={viroAppProps}
        initialScene={{
          scene: require('./VirtualCarScene.js'),
          passProps: {
            onARInitialized: this.onARInitialized,
            onPosterFound: this.onPosterFound,
            onExperienceFinished: this.onExperienceFinished,
            onARSceneCreated: this.onARSceneCreated,
          },
        }} />
    );
  }

  getMapDisplay() {

    if (!this.state.showMap) {
      return null;
    }

    if (this.state.mapIdx === 0) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_0.png')} />
        </View>
      );
    }

    if (this.state.mapIdx === 1) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_1.png')} />
        </View>
      );
    }

    if (this.state.mapIdx === 2) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_2.png')} />
        </View>
      );
    }

    if (this.state.mapIdx === 3) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_3.png')} />
        </View>
      );
    }

    if (this.state.mapIdx === 4) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_4.png')} />
        </View>
      );
    }

    if (this.state.mapIdx === 5) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_5.png')} />
        </View>
      );
    }

    if (this.state.mapIdx === 6) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_6.png')} />
        </View>
      );
    }

    if (this.state.mapIdx === 7) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_7.png')} />
        </View>
      );
    }

    if (this.state.mapIdx === 8) {
      return (
        <View style={styles.mapView}>
          <Image style={styles.mapImage} source={require('./res/map/map_8.png')} />
        </View>
      );
    }

    return (

      <View style={styles.mapView}>
        <Image style={styles.mapImage} source={require('./res/map/map.png')} />
      </View>
    );
  }

  getCarControls() {

    return (
      <Animated.View style={{
        position: 'absolute', width: '100%',
        height: '100%', opacity: this.state.carControlsOpacity
      }}>
        {/* These are the controls to drive the car */}
        {this.getStartButton()}
        {this.getMapButton()}
      </Animated.View>
    )
  }

  getStartButton() {
    return (
      <TouchableOpacity
        style={styles.startButton}
        onPress={this.startGuide}
        opacity={this.state.start ? 0 : 1}
      >
        <Image style={styles.startImage} source={require('./res/button/start_btn.png')} />
      </TouchableOpacity>
    )
  }

  getMapButton() {
    return (
      <TouchableOpacity
        style={styles.mapButton}
        onPress={this.setMapState}
      >
        <Image style={styles.mapBtnImage} source={require('./res/button/map_btn.png')} />
      </TouchableOpacity>
    )
  }

  setMapState() {
    mapState = this.state.showMap;

    setTimeout(() => {
      this.setState({
        showMap: !mapState,
      })
    }, 10)
  }

  startGuide() {
    // driving time suitable for using iphone
    // timeList = [7400, 16500, 50000, 28000, 1500];

    // driving time suitable for using ipad
    timeList = [6700, 14100, 46100, 26500, 1500];

    timeInterval = 1200;
    turnInterval = timeInterval + turnTime;

    setTimeout(this.getPressDown('up'), 10);

    // total driving time
    setTimeout(this.getPressUp('up'), timeList[0] + timeList[1] + timeList[2] + timeList[3] + timeList[4]);

    setTimeout(() => {
      this.setState({
        mapIdx: 1,
      })
    }, timeInterval);

    setTimeout(() => {
      this.turnRight(),
        this.setState({
          mapIdx: 2,
        })
    }, timeList[0]);

    setTimeout(() => {
      this.setState({
        mapIdx: 3,
      })
    }, timeList[0] + turnInterval);

    setTimeout(() => {
      this.turnRight(),
        this.setState({
          mapIdx: 4,
        })
    }, timeList[0] + timeList[1]);

    setTimeout(() => {
      this.setState({
        mapIdx: 5,
      })
    }, timeList[0] + timeList[1] + turnInterval);

    setTimeout(() => {
      this.turnRight(),
        this.setState({
          mapIdx: 6,
        })
    }, timeList[0] + timeList[1] + timeList[2]);

    setTimeout(() => {
      this.setState({
        mapIdx: 7,
      })
    }, timeList[0] + timeList[1] + timeList[2] + turnInterval);

    setTimeout(() => {
      this.turnRight(),
        this.setState({
          mapIdx: 8,
        })
    }, timeList[0] + timeList[1] + timeList[2] + timeList[3]);
  }

  turnRight() {
    this.setState({
      left: false,
      right: true,
      leftRightRatio: 0.4,
    })

    setTimeout(() => {
      this.setState({
        left: false,
        right: false,
        leftRightRatio: 0,
      })
    }, turnTime);
  }

  getResetButton() {
    return (
      <TouchableOpacity
        style={styles.resetButton}
        onPress={this.resetCar}
        activeOpacity={0.6} >
        <Image style={styles.resetImage} source={require('./res/car/icon_refresh.png')} />
      </TouchableOpacity>
    )
  }

  resetCar() {
    this.setState({
      shouldResetCar: true,
    })

    // reset the flag 1 second later.
    setTimeout(() => {
      this.setState({
        shouldResetCar: false,
      })
    }, 1000)

  }

  getPressDown(key) {
    return () => {
      let dict = {}
      dict[key] = true
      this.setState(dict)
    }
  }

  getPressUp(key) {
    return () => {
      let dict = {}
      dict[key] = false
      this.setState(dict)
    }
  }

  setStartState() {
    this.setState({
      start: true
    });
  }

  joystickStart(evt) {
    this.setJoystickProps(evt);
  }

  joystickMove(evt) {
    this.setJoystickProps(evt);
    this.setState({
      touchLocation: "" + evt.nativeEvent.locationX.toFixed(2) + ", " + evt.nativeEvent.locationY.toFixed(2) + ", " + evt.nativeEvent.pageX.toFixed(2) + ", " + evt.nativeEvent.pageY.toFixed(2)
    })
  }

  joystickEnd(evt) {
    this.setState({
      left: false,
      right: false,
      leftRightRatio: 0,
    })
  }

  setJoystickProps(evt) {
    let locationX = evt.nativeEvent.locationX; // position relative to top left of view
    let pageX = evt.nativeEvent.pageX; // position relative to top left of screen
    let leftValue = false;
    let rightValue = false;
    let ratio = 0;
    let halfWidth = joystickWidth / 2;
    if (Platform.OS == 'android') {
      // on Android, the locationX reverts to pageX when off the button/view
      if (locationX != pageX) {
        if (locationX <= halfWidth) {
          leftValue = true;
          ratio = (halfWidth - locationX) / halfWidth
        } else {
          rightValue = true;
          ratio = (halfWidth - joystickWidth + locationX) / halfWidth
        }
      } else {
        /*
        if we went off the button to the left or right, then we simply set the
        ratio to max (1)
        */
        // TODO: this isn't actually accurate, we need to keep track of where
        // relative to the top left corner of the button because a soon as we
        // leave the button, we get all page coordinates. keep track on "down"
        ratio = 1;
        leftValue = this.state.left;
        rightValue = this.state.right;
      }
    } else { // iOS
      if (locationX <= 0 || locationX >= joystickWidth) {
        ratio = 1;
        leftValue = this.state.left;
        rightValue = this.state.right;
      } else {
        if (locationX <= halfWidth) {
          leftValue = true;
          ratio = (halfWidth - locationX) / halfWidth
        } else {
          rightValue = true;
          ratio = (halfWidth - joystickWidth + locationX) / halfWidth
        }
      }
    }

    this.setState({
      left: leftValue,
      right: rightValue,
      leftRightRatio: Math.max(Math.min(ratio, 1), 0), // bound ratio to 0 -> 1
    })
  }

  getReadyUI() {

    if (this.state.showInstructions) {

      let text = this.state.isOverPlane ? ' ' : 'Finding the floor...'

      let overlayStyle = {
        position: 'absolute',
        width: '100%',
        height: '100%',
      }

      let readyButton = {
        height: 60,
        width: 130,
        marginTop: 10,
        backgroundColor: '#292930B3',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: this.state.isOverPlane ? 1 : .5,
      }

      return (
        <Animated.View style={{ ...overlayStyle, opacity: this.state.instructionOpacity }}>
          <View style={styles.readyContainer}>
            <Text style={styles.instructionText}>
              {text}
            </Text>
            <TouchableOpacity
              style={readyButton}
              opacity={.5}
              onPress={this.ready}
              disabled={!this.state.isOverPlane}
              activeOpacity={0.6}>
              <Text style={styles.instructionText}>
                Place
              </Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      )
    }
  }

  ready() {
    // only allow ready to be clicked when the user has click over a plane!
    if (!this.state.isOverPlane) {
      return;
    }

    Animated.timing(this.state.instructionOpacity, {
      toValue: 0,
      duration: 1000,
      easing: Easing.linear,
    }).start(() => {
      this.setState({
        showInstructions: false,
        isReady: true,
      })
    })

    setTimeout(() => {
      Animated.timing(this.state.carControlsOpacity, {
        toValue: 1,
        duration: 500,
        easing: Easing.linear,
      }).start()
    }, 1000)
  }

  getInstructions() {

    if (!this.state.showInstructions) {
      return
    }

    var instructionContainer = {
      position: 'absolute',
      backgroundColor: '#000000B3',
      flexDirection: 'column',
      width: '100%',
      height: 100,
      justifyContent: 'center',
      top: 0,
      left: 0,
      paddingTop: paddingTop,
    }

    let instructions = "Scan the ground and tap Place to begin."

    return (
      <Animated.View style={{ ...instructionContainer, opacity: this.state.instructionOpacity }}>
        <Text style={styles.instructionText}>
          {instructions}
        </Text>
      </Animated.View>
    )
  }

  // this function will be called by the AR system when the user is hovering over a plane
  setIsOverPlane(isOverPlane) {
    if (this.state.isOverPlane != isOverPlane) {
      this.setState({
        isOverPlane: isOverPlane,
      })
    }
  }

  exitAR() {
    this.props.navigation.goBack();
  }

}

// on AR screens the padding is only added for iPhone X
let extraInstructionHeight = PlatformUtils.isIPhoneX() ? 5 : 0;
let paddingTop = PlatformUtils.isIPhoneX() ? PlatformUtils.iOSTopPadding + extraInstructionHeight : 0;
let paddingBottom = PlatformUtils.isIPhoneX() ? PlatformUtils.iPhoneXBottomPadding : 0;

var styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  titleText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    // fontFamily : 'BebasNeue-Regular',
  },
  instructionText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    // fontFamily : 'BebasNeue-Regular',
  },
  readyContainer: {
    position: 'absolute',
    height: 170,
    width: '100%',
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exitButton: {
    position: 'absolute',
    // Use padding vs "top"/"left" so that the entire zone is tappable
    paddingLeft: 15,
    paddingTop: 27 + paddingTop,
  },
  exitImage: {
    height: 21,
    width: 21,
    resizeMode: 'stretch',
  },
  // map size suitable for using iphone
  /*
  mapView: {
    position: 'absolute',
    height: 220,
    width: 220,
    marginTop: 25,
    marginLeft: 5,
    // bottom: 10,
    left: 10,
  },
  mapImage: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
  },
  */
  // map size suitable for using ipad
  mapView: {
    position: 'absolute',
    height: 400,
    width: 400,
    marginTop: 25,
    marginLeft: 5,
    // bottom: 10,
    left: 10,
  },
  mapImage: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  joystickTouchArea: {
    position: 'absolute',
    height: 130,
    width: 200,
    // Android needs a background color on views or it won't be touchable
    backgroundColor: '#ffffff00',
  },
  resetButton: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: 15,
    top: 24 + paddingTop,
  },
  resetImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  startButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: 15,
    bottom: 100,
  },
  startImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  mapButton: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: 15,
    bottom: 15,
  },
  mapBtnImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  directionText: {
    position: 'absolute',
    top: 50,
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  drivingButtonsContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 25,
    right: 10,
    width: 150,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pedalTouchArea: {
    position: 'absolute',
    height: 70,
    width: 70,
    // Android needs a background color on views or it won't be touchable
    backgroundColor: '#ffffff00',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  touchText: {
    position: 'absolute',
    top: 10,
    left: 0,
    color: '#fff',
    textAlign: 'center',
    fontSize: 20
  },
  attributionOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  attributionMovieLogoContainer: {
    position: 'absolute',
    top: 100,
    flexDirection: 'column',
  },
  attributionMovieLogo: {
    width: 300,
    height: 75,
    resizeMode: 'contain',
    marginBottom: 15,
  },
  attributionLoadingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  attributionViroLogo: {
    position: 'absolute',
    bottom: 30,
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: 60,
    resizeMode: 'contain',
  },
});