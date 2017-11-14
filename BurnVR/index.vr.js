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


//<VideoPano source={{uri: 'https://s3.amazonaws.com/burningmanvr360videos/bike_city.mp4'}} loop={true}/>
//<Pano source={asset('chess-world.jpg')}/>

export default class BurnVR extends React.Component {
  render() {
    return (
      <View>
        <VideoPano source={{uri: 'https://s3.amazonaws.com/burningmanvr360videos/bike_deep_playa.mp4'}} loop={true}/>
        <VrButton onClick={() => console.log("hi")}>
        <Text
        style={{
          backgroundColor: '#FFF000',
          color: '#FF0000',
          fontSize: 0.2,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, -2, -5]}],
        }}>
        You're in "Scene Name" move to: 
      </Text>
      </VrButton>
      <VrButton onClick={() => console.log("Button1")}>
        <Text
        style={{
          backgroundColor: '#FF0000',
          color: '#FFFF00',
          fontSize: 0.2,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, -2, -5]}],
        }}>
        Button1 
      </Text>
      </VrButton>
      <VrButton onClick={() => console.log("Button2")}>
        <Text
        style={{
          backgroundColor: '#FF0000',
          color: '#FFFF00',
          fontSize: 0.2,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, -2, -5]}],
        }}>
        Button2
      </Text>
      </VrButton>
      <VrButton onClick={() => console.log("Button3")}>
        <Text
        style={{
          backgroundColor: '#FF0000',
          color: '#FFFF00',
          fontSize: 0.2,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, -2, -5]}],
        }}>
        Button3
      </Text>
      </VrButton>
      </View>
    );
  }
};

AppRegistry.registerComponent('BurnVR', () => BurnVR);