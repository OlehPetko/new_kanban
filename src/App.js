import './App.module.css';
import {v4 as uuidv4} from "uuid";
import {useState} from "react";
import Panel from "./components/Panel";
import styles from './App.module.css'

function App() {

    const statuses = ['todo', 'progress', 'review', 'done']
    const initialState = [
        {id: uuidv4(), status: statuses[0], title: 'React', markDone: false, openUpdate: true, openDelete: true},
        {id: uuidv4(), status: statuses[1], title: 'JS', markDone: false, openUpdate: true, openDelete: true},
        {id: uuidv4(), status: statuses[2], title: 'Java', markDone: false, openUpdate: true, openDelete: true},
        {id: uuidv4(), status: statuses[3], title: 'C#', markDone: false, openUpdate: true, openDelete: true},
    ]
    const [task, setTask] = useState(initialState)
    const [newTask, setNewTask] = useState('')

    const addTask = () => {
        setTask([...task, {
            id: uuidv4(),
            status: statuses[0],
            title: newTask,
            markDone: false,
            openUpdate: true,
            openDelete: true
        }])
        setNewTask('')
    }
    const deleteTask = (id) => {setTask(task.filter(el => el.id !== id))}
    return (
        <div className={styles.app}>
            <input placeholder='add new your task' value={newTask} onChange={e => setNewTask(e.target.value)}/>
            <select name='status'>
                <option value='todo'>to do</option>
                <option value='progress'>progress</option>
                <option value='review'>review</option>
                <option value='done'>done</option>
            </select>
            <button onClick={addTask}>add</button>
            <Panel task={task} statuses={statuses} deleteTask={deleteTask}/>
        </div>
    );
}

export default App;
