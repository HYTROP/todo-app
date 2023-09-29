import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    min: 0,
    sec: 0,
    run: false,
  };

  componentDidMount() {
    const { min, sec } = this.props;
    console.log(min, sec);
    this.setState({
      min,
      sec,
    });
  }

  startTimer = () => {
    const { run } = this.state;
    this.setState({
      run: true,
    });
    if (run === false) {
      this.Inter = setInterval(() => {
        this.tickFunc();
      }, 1000);
    }
  };

  pauseTimer = () => {
    if (this.Inter) {
      clearInterval(this.Inter);
    }
    this.setState({
      run: false,
    });
  };

  tickFunc = () => {
    let { sec, min } = this.state;
    if (sec === 0 && min === 0) {
      clearInterval(this.Inter);
      return;
    }
    if (sec === 0) {
      min -= 1;
      sec = 60;
    }
    sec -= 1;
    this.setState({
      sec,
      min,
      run: true,
    });
  };

  render() {
    const { min, sec } = this.state;
    return (
      <span className="description">
        <button type="button" label="play" className="icon icon-play" onClick={this.startTimer} />
        <button type="button" label="" className="icon icon-pause" onClick={this.pauseTimer} />
        <span className="timer-display">
          {(min < 10 ? '0' : '') + min}:{(sec < 10 ? '0' : '') + sec}
        </span>
      </span>
    );
  }
}
