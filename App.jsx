import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>To Do App</h1>
                 <div>
                <label>
                Today's Date: <input task ="todaysDate" />
                </label>
                <hr/>
                </div>
                <div>
                <label>
                Task Input: <input task ="taskInput" />
                </label>
                <hr/>
                </div>                 <div>
                <label>
                Task's Due Date: <input task ="taskDueDate" />
                </label>
                <hr/>
                </div>
                <div>      
                <label>
                Check if the task has been completed: <input type="checkbox" name="myCheckbox" />
                </label>
                <hr /></div>
                
      
      <div className="card1">
        <button onClick={() => setCount((count) => count + 1)}>
          Add to Sarah's To-Do List
        </button>
      </div>
        <div className="card2">
        <button onClick={() => setCount((count) => count + 1)}>
          Add to Tim's To-Do List
        </button>
      </div>
            <div className="card3">
        <button onClick={() => setCount((count) => count + 1)}>
          Add to John's To-Do List
        </button>
      </div>
            <div className="card4">
        <button onClick={() => setCount((count) => count + 1)}>
          Add to Karen's To-Do List
        </button>
      </div>
      <p className="read-the-docs">
        Click on the button to add task to an individual's today's to-do list
      </p>
    </>
  );
}

export default App
