import React, {Component} from 'react';
import SpriteSheet from 'react-responsive-spritesheet';
import BigBlobSpriteSheet
  from './assets/PixelTD Assets/Enemies/BigBlob/bigBlobFull.png';
import BigBlobJson from './assets/PixelTD Assets/Enemies/BigBlob/bigBlob.json';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SpriteSheet
          className='spriteSheet'
          image={BigBlobSpriteSheet}
          widthFrame={32}
          heightFrame={24}
          steps={10}
          fps={12}
          loop
        />
      </div>
    );
  }
}

export default App;
