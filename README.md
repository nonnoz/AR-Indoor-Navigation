# AR-Indoor-Navigation

The software built for this project uses Viro React as the augmented reality (AR) development tool. Viro React is a platform for developers to rapidly build AR experiences. Developers write in React Native, and Viro runs their code natively across all mobile AR (iOS ARKit and Android ARCore) platforms. [More info here](https://viro-community.readme.io).

## Instructions for setting up the environment and running project code using Testbed app

1. Follow directions on our Quick Start Guide ([Mac/Linux](https://viro-community.readme.io/docs/quick-start-maclinux)) ([Windows](https://viro-community.readme.io/docs/quick-start-windows)) to setup dependencies.
2. Go into the AR-Indoor-Navigation-master directory.
3. Run `npm install` or `yarn install` if using `yarn` from the root of this project to install the `node` modules.
4. Download the Viro Testbed app, for iOS [here](https://itunes.apple.com/us/app/viro-media/id1163100576?mt=8), or for Android [here](https://play.google.com/store/apps/details?id=com.viromedia.viromedia&hl=en).
5. Run `npm start` from the root of this project.
6. Find the ngrok url (https://xxxxxx.ngrok.io) which is printed at the top of the terminal window where you ran npm start.
7. Open the Viro Media App, slide out the left panel and select "Enter Testbed".
8. Enter the ngrok url or the IP address of the running device into the empty text field on the Testbed screen and press "Go".
9. Now the application should be presented, enjoy!

### Changing between navigation methods

There are three navigation methods implemented in this project. The second method and third method are included in one file.

- Arrow with text
- Virtual car
- Virtual car with 2D map

**Steps：**

1. Open App.js in a text editor.
2. For method 1, comment line 30 `ViroCodeSamplesSceneNavigator = require('./js/VirtualCar');`.
3. For method 2 or 3, uncomment line 30.
4. Reload/restart the application.

\* To reload the application, try shaking the device until a development menu appears and click "Reload".

### Application scenario

The set route of this application is located at the 4th floor of the Sir Peter Mansfield Building (PMB) in the University of Nottingham Ningbo China (UNNC). The start point is elevator at the 4th floor, and the destination is PMB 447.

**Testing the first method**<br>
User should stand at the specific start point when start the application. <br>
**Testing the second and third method**<br>
The start point could be anywhere. For the best guidance experience, the virtual car need to be placed at the middle of the road and level with the elevator.<br>