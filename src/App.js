import React, {Component} from 'react';
import SpriteSheet from 'react-responsive-spritesheet';
import BigBlobSpriteSheet
  from './assets/PixelTD Assets/Enemies/BigBlob/bigBlobFull.png';
import BigBlobJson from './assets/PixelTD Assets/Enemies/BigBlob/bigBlob.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.grid = [
      <div className='ice' />,
      <div className='ice' />,
      <div className='path' />,
      <div className='path' />,
      <div className='ice' />,
      <div className='path' />,
      <div className='path' />,
      <div className='ice' />,
      <div className='path' />,
      <div className='path' />,
      <div className='ice' />,
      <div className='ice' />,
    ]
  }
  render() {
    return (
      <div className="middle">
        <div className="App">
          {this.grid.map(square => {
            return square
          })}
          {/* <SpriteSheet
            className='spriteSheet'
            image={BigBlobSpriteSheet}
            widthFrame={32}
            heightFrame={24}
            steps={10}
            fps={12}
            loop
          /> */}
        </div>
      </div>
    );
  }
}

export default App;
