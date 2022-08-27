import styles from './Panel.module.css'
import Task from "./Task";

const Panel = ({task, statuses, deleteTask}) => {

    return (
        <div>
            {statuses.map(status =>
                <div className={styles.panel}>
                    <h2 className={styles.panelStatus}>
                        {status}
                    </h2>
                    {task.filter(task => task.status === status).map(task => <Task task={task} deleteTask={deleteTask}/>)}
              </div>)}
        </div>
    )
}
export default Panel