import Header from './components/Header'
import Tasks from './components/Tasks'

const App = () => {
  return (
    <div className='container'>
      <Header />
      <Tasks />
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
