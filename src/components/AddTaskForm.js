import React from 'react'
import { useState } from 'react';

function AddTaskForm({onAddTask}) {
    const[task, setTask] = useState("");
    const[category_id, setCategory_id] = useState("1");

    function handleSubmit(e){
        e.preventDefault()

        fetch("http://localhost:9292/all-tasks", {

            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                task: task,
                category_id: parseInt(category_id),
                isDone: false
            })
        })
        .then(res => res.json())
        .then (newTask => onAddTask(newTask))
        setTask('')
    }
  return (
    <div>
        <div className="Container">
            <h4></h4>
        </div>
        <form className="NewItem" onSubmit={handleSubmit}>
            <label>
                New Task: 
                <input 
                    type="text"
                    name="todos"
                    value={task}
                    placeholder="Enter New Task Here..."
                    onChange={(e) => setTask(e.target.value)}
                />
            </label><br></br>
            <label>
                Category:
                <select
                    name="category"
                    value={category_id}
                    onChange={(e)=> setCategory_id(e.target.value)}
                >
                    <option value="1">Daily Tasks</option>
                    <option value="3">Work and Finances</option>    
                    <option value="4">Mind-Care and Self Growth</option>    
                    <option value="2">Social life</option>    
                </select>    
            </label><br></br>
            <button type="submit">Add New Task</button>
        </form>
    </div>
  )
}

export default AddTaskForm;
