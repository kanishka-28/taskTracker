import React, { useState } from 'react'

const AddTask = ({onAddTask}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!text){
            alert('plz add some text');
            return 
        }
        onAddTask({text, day, reminder})
        setText('');
        setDay('');
        setReminder('');
        
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="AddTask"
                value={text} onChange={(e)=>{ console.log(e.target.value); setText(e.target.value)}}/>
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add day and time"
                value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder}
                value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value="save task" 
            className="btn btn-block"/>
        </form>
    )
}

export default AddTask;
