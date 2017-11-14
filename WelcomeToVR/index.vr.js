import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  VideoPano,
  Text,
  VrButton,
  View,
} from 'react-vr';

export default class WelcomeToVR extends React.Component {
  render() {
    return (
      <View>
        <VideoPano source={asset('360videos/bike_esplanade.mp4')} loop='true'/>
        <VrButton onClick={() => console.log("hi")}>
        <Text
        style={{
          backgroundColor: '#FF0000',
          fontSize: 0.1,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, -3]}],
        }}>
        test footage
          <Text>First part and </Text>
         <Text>second part</Text>
      </Text>
      </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
