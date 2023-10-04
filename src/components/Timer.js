import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    min: '',
    sec: '',
    run: false,
  };

  componentDidMount() {
    const { min, sec } = this.props;
    this.setState({
      min,
      sec,
    });
  }

  componentWillUnmount() {
    const { min, sec } = this.state;
    this.props.onTimerUnmount({ min, sec });
  }

  startTimer = () => {
    const { run } = this.state;
    this.setState({
      run: true,
    });
    if (!run) {
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
    if (!min && !sec) {
      clearInterval(this.Inter);
      return;
    }
    if (sec === 0 || !sec) {
      min = min - 1;
      sec = 60;
    }
    sec = sec - 1;
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
        <button type="button" label="pause" className="icon icon-pause" onClick={this.pauseTimer} />
        <span className="timer-display">
          {(min < 10 ? '0' : '') + min}:{(sec < 10 ? '0' : '') + sec}
        </span>
      </span>
    );
  }
}
