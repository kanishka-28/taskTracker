import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, onToggle}) => {     // catching the props passesin Tasks
    return (
        <div className={`task ${task.reminder ?
        'reminder' : ''}`}>
        <h3>{task.text}<FaTimes style={{ color: 'green', 
        cursor: 'pointer'}} onClick={()=> onDelete(task.id)}/></h3>    
        <p onDoubleClick={()=>{onToggle(task.id)}}>{task.day}</p>        
        </div>
    )
}

export default Task;