export default function NewTaskForm({ setInput, addTask, inputText }) {

  return (
    <header className="header">
      <input className="new-todo" placeholder="What needs to be done?"
        autoFocus
        onChange={setInput}

        onKeyUp={(e) => {
          if (e.code === 'Enter') {
            addTask(console.log('PRESS!'), inputText)
          }
        }
        } />
    </header>
  )
}