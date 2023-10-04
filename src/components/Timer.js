import React, { Component } from 'react';

export default class Timer extends Component {
  state = {
    min: 0,
    sec: 0,
    run: false,
  };

  componentDidMount() {
    const { min, sec, stopTimerDate } = this.props;
    if (stopTimerDate && (min || sec)) {
      const diffDate = new Date(Date.now() - stopTimerDate);
      const diffMin = diffDate.getMinutes();
      const diffSec = diffDate.getSeconds();
      this.setState({
        run: true,
        min: Math.max(min - diffMin, 0),
        sec: Math.max(sec - diffSec, 0),
      });
      this.startTimer();
    } else {
      this.setState({
        min,
        sec,
      });
    }
  }

  componentWillUnmount() {
    const { min, sec } = this.state;
    clearInterval(this.Inter);
    this.props.onTimerUnmount({
      min,
      sec,
      stopTimerDate: this.state.run ? Date.now() : '',
    });
  }

  startTimer = () => {
    // const { run } = this.state;
    // this.setState({
    //   run: true,
    // });
    // if (!run) {
    this.Inter = setInterval(() => {
      this.tickFunc();
    }, 1000);
    // }
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
    if (min <= 0 && sec <= 0) {
      this.pauseTimer();
      return;
    }
    console.log(sec, min);
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
          {String(min).padStart(2, '0')}:{String(sec).padStart(2, '0')}
        </span>
      </span>
    );
  }
}
