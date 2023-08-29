import { Component } from "react";

export default class TaskFilters extends Component {

  buttons = [
    { name: 'All', label: 'All' },
    { name: 'Active', label: 'Active' },
    { name: 'Completed', label: 'Completed' },
  ]




  render() {

    const { handleIsDoneFilter } = this.props


    return (
      <ul className="filters">
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button
            onClick={handleIsDoneFilter}
            autoFocus
          >Completed</button>
        </li>
      </ul>
    )
  }
}