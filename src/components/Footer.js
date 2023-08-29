import TaskFilter from "./TasksFilter";
export default function Footer({ data, handleIsDoneFilter }) {

  // const { data, handleIsDoneFilter } = this.props
  return (
    <footer className="footer">
      <span className="todo-count">{data.length} items left</span>
      <TaskFilter
        handleIsDoneFilter={handleIsDoneFilter}
      />
      <button className="clear-completed">Clear completed</button>
    </footer>
  )
}
