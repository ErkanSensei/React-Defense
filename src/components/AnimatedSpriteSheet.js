/* Forked from: https://github.com/frostney/react-spritesheet/blob/master/src/AnimatedSpriteSheet.js */
import React, { Component } from 'react';
import shallowEqual from 'shallowequal';

import Sprite from './Sprite';

class AnimatedSpriteSheet extends Component {

  static defaultProps = {
    initialFrame: 0,
    frame: {
      width: 0,
      height: 0,
    },
    bounds: {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    },
    isPlaying: true,
    loop: true,
    speed: 300,
  };

  constructor(props) {
    super(props);

    const maxFramesWidth = ((this.props.bounds.width - this.props.bounds.x) /
      this.props.frame.width);
    const maxFramesHeight = ((this.props.bounds.height - this.props.bounds.y) /
      this.props.frame.height);

    const maxFrames = Math.floor(maxFramesWidth * maxFramesHeight);

    this.state = {
      frame: props.initialFrame,
      maxFrames,
      reversing: false,
    };
  }

  componentDidMount() {
    console.log(this.props)
    this.timerId = setInterval(() => {
      console.log(this.state.frame, this.state.maxFrames)
      
      if (this.state.reversing && this.state.frame === 0) {
        return this.setState({
          reversing: false
        });
      }

      if (this.props.reverseLoop && this.state.reversing) {
        return this.setState({
          frame: this.state.frame - 1,
        });
      }

      if (this.props.loop && this.state.frame === this.state.maxFrames - 1) {
        return this.setState({
          reversing: true
        });
      }

      return this.setState({
        frame: this.state.frame + 1,
      });
    }, this.props.speed);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (!shallowEqual(this.props.frame, nextProps.frame)) {
      return true;
    }

    if (!shallowEqual(this.props.bounds, nextProps.bounds)) {
      return true;
    }

    if (!shallowEqual({
      filename: this.props.filename,
      initialFrame: this.props.initialFrame,
      isPlaying: this.props.isPlaying,
      loop: this.props.loop,
      speed: this.props.speed,
    }, {
      filename: nextProps.filename,
      initialFrame: nextProps.initialFrame,
      isPlaying: nextProps.isPlaying,
      loop: nextProps.loop,
      speed: nextProps.speed,
    })) {
      return true;
    }

    if (!shallowEqual(this.state, nextState)) {
      return true;
    }

    return false;
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const spriteData = {
      filename: this.props.filename,
      width: this.props.frame.width,
      height: this.props.frame.height,
      x: this.props.frame.width * this.state.frame,
    };

    return <Sprite {...spriteData} />;
  }
}

export default AnimatedSpriteSheet;
