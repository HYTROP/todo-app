import { Component } from "react";
export default class TaskFilters extends Component {

  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'completed', label: 'Completed' },
  ];

  render() {
    const { handleFilter } = this.props
    const buttons = this.buttons.map(({ name, label }) => {
      return (
        <li key={name}>
          <button
            key={name}
            onClick={() => handleFilter(name)}
          >
            {label}
          </button>
        </li>
      )
    })

    return (
      <ul className="filters">
        {buttons}
      </ul>
    )
  }
}