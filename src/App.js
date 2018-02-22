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
      currentX: -1000,
      currentY: 0,
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
      let paths = [].slice.call(document.getElementsByClassName('path'));
      paths = paths.map(path => {
        return {
          x: path.offsetLeft + path.clientWidth / 2,
          y: path.offsetTop + path.clientHeight / 2,
        };
      });
      paths = paths.sort((a, b) => {
        if (a.x === b.x) {
          return a.y > b.y;
        }

        return a.x < b.x;
      });
      paths = paths.reverse();
      paths.push({x: 10000000, y: paths[paths.length - 1].y});
      this.setState({paths});
      this.moveEnemy();
    }
  }

  moveEnemy = () => {
    let i = 0;
    this.interval = setInterval(
      () => {
        this.setState({currentX: this.state.paths[i].x});
        this.setState({currentY: this.state.paths[i].y});
        i++;
        if (i === this.state.paths.length) {
          clearInterval(this.interval);
        }
      },
      1000,
    );
  };

  render() {
    return (
      <div className="middle">
        <div className="App">
          {this.grid.map((square, index) => {
            return square;
          })}
          {this.state.paths.length &&
            <SpriteSheet
              ref={ref => this.enemy = ref}
              style={{
                width: '50px',
                position: 'absolute',
                left: this.state.currentX - 25,
                top: this.state.currentY,
                transition: 'all 1s linear',
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
