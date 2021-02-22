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
    }
  ])

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={ tasks }/>
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
