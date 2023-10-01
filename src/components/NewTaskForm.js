import { Component } from 'react';

export default class NewTaskForm extends Component {
  state = {
    text: '',
    min: '',
    sec: '',
    // timerValue: { min: '', sec: '' },
  };

  // componentDidMount() {
  //   const { min, sec } = this.state.timerValue;
  //   this.setState({
  //     min, sec
  //   })
  // }
  // componentWillUnmount() {
  //   const { min, sec } = this.state;
  //   this.setState((prevState) => ({
  //     timerValue: {
  //       ...prevState.timerValue, min, sec
  //     }
  //   }))
  // }

  onValueChange = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  onMinChange = (e) => {
    this.setState({
      min: e.target.value,
    });
  };

  onSecChange = (e) => {
    this.setState({
      sec: e.target.value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { addTask } = this.props;
    const { text, min, sec } = this.state;

    addTask(text, min, sec);
    this.setState({
      text: '',
      min: '',
      sec: '',
    });
  };

  render() {
    const { text, min, sec } = this.state;

    return (
      <header className="header">
        <form onSubmit={this.handleFormSubmit}>
          <input
            className="new-todo"
            placeholder="What needs to be done?"
            autoFocus
            onChange={this.onValueChange}
            value={text}
          />

          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Min"
            value={min}
            onChange={this.onMinChange}
          />

          <input
            type="number"
            className="new-todo-form__timer"
            placeholder="Sec"
            value={sec}
            onChange={this.onSecChange}
          />

          <button type="submit" hidden />
        </form>
      </header>
    );
  }
}
