import React, { Component } from 'react';
import AnimatedSpriteSheet from './components/AnimatedSpriteSheet';
import BigBlobSpriteSheet from './assets/PixelTD Assets/Enemies/BigBlob/bigBlobRepeat.png'
import BigBlobJson from './assets/PixelTD Assets/Enemies/BigBlob/bigBlob.json'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AnimatedSpriteSheet
          filename={BigBlobSpriteSheet}
          initialFrame={0}
          frame={{ width: 32, height: 24 }}
          bounds={{ x: 0, y: 0, width: 340, height: 24 }}
          isPlaying
          loop
          reverseLoop
          speed={100}
        />
      </div>
    );
  }
}

export default App;
