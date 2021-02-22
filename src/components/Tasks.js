//es7 prop types: read more about this vs typescript
import Task from './Task'

const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Task
          key={ task.id }
          task={ task }
          onDelete={ onDelete }
          onToggle={ onToggle }
        />
      ))}
    </>
  )
}

export default Tasks
