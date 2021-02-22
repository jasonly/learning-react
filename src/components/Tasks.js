//es7 prop types: read more about this vs typescript
import PropTypes from 'prop-types'
import { useState } from 'react'

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'lorem'
    }
  ])

  return (
    <>
      {
        tasks.map((task) => (
          <h3 key={task.id}>{task.text}</h3>
        ))
      }
    </>
  )
}

Tasks.defaultProps = {
}

Tasks.propTypes = {
}

export default Tasks
