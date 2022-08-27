import styles from './Task.module.css'

const Task = ({ task, deleteTask }) => {
  return (
      <div className={styles.task}>
          <input type="checkbox"/>
          <input type="radio" onClick={() => deleteTask(task.id)}/>
          {task.title}
          <button>update</button>
          <button>add comment</button>
      </div>
  )
}
export default Task