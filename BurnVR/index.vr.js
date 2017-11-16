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
import axios from 'axios'

//<VideoPano source={{uri: 'https://s3.amazonaws.com/burningmanvr360videos/bike_city.mp4'}} loop={true}/>
//<Pano source={asset('chess-world.jpg')}/>

export default class BurnVR extends React.Component {
  constructor() {
    super();
    this.state = {
      scene: {},
      currentPano: false,
      history: []
    }      
  }
  getScene = ()=>{
    axios.get("/api/scene/").then((res) => {
      this.parseScene(res.data)
    })
    .catch((err) => {
      console.log("Error loading users. "+err);
    })
  }
  parseScene = (responseData) => {
    let parsedScene = {};
    parsedScene.panos = responseData.panos.map((pano)=>{
      return {name: pano.name, uri: pano.uri, portals:[]}
    });
    responseData.portals.forEach((p)=>{      
      parsedScene.panos[p.indexA].portals.push(parsedScene.panos[p.indexB])
      parsedScene.panos[p.indexB].portals.push(parsedScene.panos[p.indexA])
    })
    console.log(this.state.currentPano);
    setTimeout(()=>{this.setState({scene: parsedScene, currentPano: parsedScene.panos[0]})}, 3000)
  }
  usePortal = (portal)=>{
    let tempHistory = this.state.history;
    tempHistory.push(this.state.currentPano);
    this.setState({currentPano: portal, history: tempHistory});
  }
  goBack = () => {
    let tempHistory = this.state.history;
    if(tempHistory.length > 0){
      let goBackTo = tempHistory.pop();  
      this.setState({currentPano: goBackTo, history: tempHistory});  
    }
  }
  getBackButton = () => {
    if(this.state.history.length > 0){
      return (
        <Text
        style={{
          backgroundColor: '#550000',
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
        Go back
      </Text>
      );  
    }
  }
  componentWillMount(){
    this.getScene();
  }
  render() {
      if(!this.state.currentPano){
        return (
          <View style={{backgroundColor: '#000000'}}>
        <Text
        style={{
          backgroundColor: '#FFF000',
          color: '#FF0000',
          fontSize: 1,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, -5]}],
        }}>
        BurnVR
        </Text>
        <Text
        style={{
          color: '#550000',
          fontSize: 0.4,
          fontWeight: '400',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 0, -5]}],
        }}>
        Loading...
        </Text>
        </View>
      );
    } else {
      return (
        <View>
        <VideoPano source={{uri: this.state.currentPano.uri}} loop={true}/>
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
        You're in "{this.state.currentPano.name}" move to: 
      </Text>
      {
        this.state.currentPano.portals.map((portal)=>{
          return (              
            <VrButton onClick={() => this.usePortal(portal) }>
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
            { portal.name } 
          </Text>
          </VrButton>    
          );
        })
      }
      <VrButton onClick={() => this.goBack() }>
      { this.getBackButton() }
      </VrButton> 
      </View>
      );      
    }   
  }
};

/*

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
        You're in "TEST TEST" move to: 
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

*/
AppRegistry.registerComponent('BurnVR', () => BurnVR);