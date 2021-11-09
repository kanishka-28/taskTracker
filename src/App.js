import './App.css';
import {useState} from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'


const App = ()=>{
  const [add, addButton] = useState(false);
  const [tasks ,setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true
    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true
    }
  ])

  //delete task 
  const deleteTask = (id)=>{
    console.log('delete', id);
    setTasks(tasks.filter((task)=>task.id!==id))
  }

  // toggle reminder
  const toggleReminder = (id)=>{
    console.log('toggled', id);
    setTasks(tasks.map((task)=>
    task.id===id ? {...task,reminder: !task.reminder} : task
    ))
  }

  // add task
  const addTask = (task)=>{
  const id = Math.floor(Math.random()*100)+1
  console.log(id);
  const newTask = {id, ...task}
  setTasks([...tasks, newTask]);
  }

  // when clicking on Add button

  return (
    <div className='container'>
      <Header onAdd={()=>addButton(!add)} showAdd={add}/>
      {add && <AddTask onAddTask={addTask}/>}
      {tasks.length==0 ? 'No tasks to do' : <Tasks tasks={tasks} 
      onDelete={deleteTask} onToggle={toggleReminder}
      />}  {/*props passed to tasks*/}
    </div>
  )  
};
 
export default App;
