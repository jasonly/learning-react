import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'

const App = () => {
  // move tasks to glbal state to handle it at the app level and send it around
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'lorem',
      day: 'Feb 5th @ 2:30',
      reminder: true
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

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task} : task))
  }

  return (
    <div className='container'>
      <Header />

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
