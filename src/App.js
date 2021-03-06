import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

import { useState } from 'react'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)

  // move tasks to glbal state to handle it at the app level and send it around
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'lorem',
      day: 'Feb 5th @ 2:30',
      reminder: false
    },
    {
      id: 2,
      text: 'ipsum',
      day: 'Feb 1th @ 5:30',
      reminder: true
    },
    {
      id: 3,
      text: 'dolor',
      day: 'Feb 2th @ 6:30',
      reminder: false
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 100000 + 1)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  // Toggle Show Add Tasks
  const toggleShowAddTasks = () => setShowAddTask(!showAddTask)

  return (
    <div className='container'>
      <Header
        onAdd={ toggleShowAddTasks }
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={ addTask } />}

      {
        tasks.length > 0 ?
        <Tasks
          tasks={ tasks }
          onDelete={ deleteTask }
          onToggle={ toggleReminder }
        /> : 'weeeeh'
      }
    </div>
  )
}

export default App;

// old way
// import React from 'react'
//
// class App extends React.Component {
//   render() {
//     <div className='container'>
//       <Header />
//     </div>
//   }
// }
