# Hotels
I have develop the application in **React Native**.

I used the following node modules:
react-navigation, react-navigation-stack, @react-native-community/masked-view, react-native-safe-area-context,
react-native-screens, react-native-gesture-handler, react-native-image-slider-box, react-native-fast-image, react-native-maps, @react-native-community/async-storage, react-native-check-box

To install all the modules in the project folder:
```
npm install && npm install --save react-navigation && npm install --save react-navigation-stack && npm install --save @react-native-community/masked-view && npm install react-native-safe-area-context && npm install --save react-native-screens && npm install --save react-native-gesture-handler && npm install --save react-native-image-slider-box && npm install --save react-native-fast-image && npm install --save react-native-maps && npm install --save @react-native-community/async-storage && npm install --save react-native-check-box
```

To start the project from the **IOS simulator** you have to do the following step:
Intall the iOS pod:
``` cd ios && pod install && cd .. ```

Finally run the simulator:
``` react-native run-ios ```

To start the project on the **IOS device** you have to open the *Hotels.xcworkspace* file located in the iOS folder of the project.
Once Xcode is open you have to select your device in the building device list and run clicking the adjacent button.

To start the project from the **Android Simulator** you have to open the emulator, while to start the project from the the **Android Device** you have to connect the device via USB and activate the *debug USB mode*.
Once do this step, write this instruction in the project folder:

```cd android && gradlew clean && cd .. && react-native run-android```

```react-native run-android```

To test the App for Android the API_KEY of Google Maps is needed, you have to insert it into the *AndroidManifest.xml* located: *android/app/src/main/AndroidManifest.xml*

The App is developed for iOS device, but I tested it also on an Android Device.


