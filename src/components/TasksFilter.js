import { Component } from "react";

export default class TaskFilters extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { handleIsDoneFilter } = this.props
    // const buttons = this.buttons
    // console.log(this.buttons instanceof Array)

    const buttons = this.buttons.map(({ name, label }) => {
      return (
        <button
          key={name}
          onClick={handleIsDoneFilter}
        >{label}</button>
      )
    })

    return (
      <ul className="filters">
        {/* <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li> */}
        <li>
          {buttons}
          {/* <button
            key={this.stateName}
          // onClick={handleIsDoneFilter}
          >Completed</button> */}
        </li>
      </ul>
    )
  }
}