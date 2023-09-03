import { Component } from "react"

export default class NewTaskForm extends Component {

  state = {
    text: ''
  }

  onValueChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }
  onAdd = () => {
    this.props.onAdd(this.state.text)
  }

  render() {

    const { addTask } = this.props;


    return (
      <header className="header">
        <input className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          onChange={this.onValueChange} // setInput - функция которая отслеживает и записывает в переменную то что ввел пользователь, в State
          value={this.state.text} // контролируем элемент для ресета input

          onKeyUp={(e) => {
            if (e.code === 'Enter') {
              addTask(e.target.value)
              this.setState({
                text: ''
              })
            }
          }
          }
        />
      </header>
    )

  }


}