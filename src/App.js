import { Component } from 'react';
import './App.css';
import NewTaskForm from './components/NewTaskForm';
import TaskList from './components/TaskList';
import Footer from './components/Footer';
import { v4 as uuidv4 } from 'uuid';
export default class App extends Component {
  state = {
    tasksData: [],
    newValue: '',
    taskClassName: '',
    filter: 'all',
  };

  handleIsDone = (id) => {
    this.setState((prevState) => ({
      tasksData: prevState.tasksData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isDone: !task.isDone,
          };
        } else {
          return task;
        }
      }),
    }));
  };

  handleOnDelete = (id) => {
    this.setState(({ tasksData }) => {
      const index = tasksData.findIndex((element) => element.id === id);
      const newArray = [...tasksData.slice(0, index), ...tasksData.slice(index + 1)];
      return {
        tasksData: newArray,
      };
    });
  };

  handleAddTask = (inputText, min, sec) => {
    if (inputText.trim() === '') {
      return false;
    }
    const newItem = {
      label: inputText,
      min: min,
      sec: sec,
      id: uuidv4(),
      isDone: false,
      isEditing: false,
      timeStamp: new Date(),
    };
    this.setState(({ tasksData }) => {
      const newArray = [...tasksData, newItem];

      return {
        tasksData: newArray,
      };
    });
  };

  handleOnEdit = (id) => {
    this.setState((prevState) => ({
      tasksData: prevState.tasksData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            isEditing: !task.isEditing,
          };
        } else {
          return {
            ...task,
          };
        }
      }),
    }));
  };

  handleEditTask = (newLabel, id) => {
    this.setState((prevState) => ({
      tasksData: prevState.tasksData.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            label: newLabel,
            isEditing: false,
          };
        } else {
          return {
            ...task,
          };
        }
      }),
    }));
  };

  handleFilter = (name) => {
    this.setState(() => ({
      filter: name,
    }));
  };

  getFilteredTasks = () => {
    const { filter, tasksData } = this.state;
    if (filter === 'all') {
      return tasksData;
    } else if (filter === 'active') {
      return tasksData.filter((e) => !e.isDone);
    } else if (filter === 'completed') {
      return tasksData.filter((e) => e.isDone);
    }
  };

  handlerClearCompleted = () => {
    this.setState(({ tasksData }) => {
      const index = tasksData.filter((el) => !el.isDone);
      return {
        tasksData: index,
      };
    });
  };

  saveTimerValueById = (id, min, sec) => {
    const newTasksData = [...this.state.tasksData];
    const index = this.state.tasksData.findIndex((e) => e.id === id);
    if (index !== -1) {
      newTasksData[index].min = min;
      newTasksData[index].sec = sec;
      this.setState({
        tasksData: newTasksData,
      });
    }
  };

  render() {
    const { tasksData, taskClassName } = this.state;
    const doneCount = tasksData.filter((el) => el.isDone).length;
    const todoCount = tasksData.length - doneCount;

    return (
      <section className="todoapp">
        <header>
          <h1>ToDos</h1>
          <NewTaskForm addTask={this.handleAddTask} timerValue={this.state.timerValue} />
        </header>
        <section className="main">
          <TaskList
            data={this.getFilteredTasks()}
            isEditing
            handleIsDone={this.handleIsDone}
            taskClassName={taskClassName}
            addTask={this.handleAddTask}
            handleOnEdit={this.handleOnEdit}
            handleEditTask={this.handleEditTask}
            handleOnDelete={this.handleOnDelete}
            saveTimerValueById={this.saveTimerValueById}
          />

          <Footer
            todoCount={todoCount}
            data={this.state.tasksData}
            handleFilter={this.handleFilter}
            handlerClearCompleted={this.handlerClearCompleted}
          />
        </section>
      </section>
    );
  }
}
