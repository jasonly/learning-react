//es7 prop types: read more about this vs typescript
import Task from './Task'

const Tasks = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </>
  )
}

export default Tasks
