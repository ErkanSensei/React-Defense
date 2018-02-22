import React, {Component} from 'react';
import SpriteSheet from 'react-responsive-spritesheet';
import BigBlobSpriteSheet
  from './assets/PixelTD Assets/Enemies/BigBlob/bigBlobFull.png';
import BigBlobJson from './assets/PixelTD Assets/Enemies/BigBlob/bigBlob.json';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      paths: [],
    };
    this.grid = [
      <div className="ice" />,
      <div className="ice" />,
      <div className="path" />,
      <div className="path" />,
      <div className="ice" />,
      <div className="path" />,
      <div className="path" />,
      <div className="ice" />,
      <div className="path" />,
      <div className="path" />,
      <div className="ice" />,
      <div className="ice" />,
    ];
  }

  componentDidMount() {
    if (!this.state.paths.length) {
      const paths = [].slice.call(document.getElementsByClassName('path'));
      console.log(paths)
      this.setState({paths});
    }
  }
  render() {
    return (
      <div className="middle">
        <div className="App">
          {this.grid.map((square, index) => {
            return square;
          })}
          {this.state.paths.length && <SpriteSheet
            style={{
              width: '10%',
              position: 'absolute',
              left: this.state.paths[4].offsetLeft + this.state.paths[4].clientWidth / 2,
              top: this.state.paths[4].offsetTop + this.state.paths[4].clientHeight / 2
            }}
            image={BigBlobSpriteSheet}
            widthFrame={32}
            heightFrame={24}
            steps={10}
            fps={12}
            loop
          />}
        </div>
      </div>
    );
  }
}

export default App;
