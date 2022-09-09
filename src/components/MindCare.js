import React from 'react';
import Tasks from './Tasks';
import { useState, useEffect } from 'react';

function MindCare() {
    const [mindTasks, setmindTasks] = useState([])


    useEffect(() => {
    
        fetch("http://localhost:9292/mind-care")
    
        .then(res => res.json())
        .then(data => {
            setmindTasks(data)
        })
    },[])

    function handleUpdateTask(updatedItem) {
      const updatedItems = mindTasks.map((item) => {
        if(item.id === updatedItem.id){
          return updatedItem;
        }
        return item;
      })
      setmindTasks(updatedItems)
    }

    function handleDeletedTask(id){
      const updatedItems = mindTasks.filter(item => item.id !== id)
      setmindTasks(updatedItems)
      console.log(updatedItems)
    }

  return (
    <div>
        <div className="Container">
            <h4>Weekly meditation on Sunday</h4>
            <h4>Weekly Motivational book </h4> 
            <h4>Monthly coastal trip</h4>
        </div>
        <ul className="Items">{mindTasks.map(item => <Tasks 
        key={item.id}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeletedTask}
        item={item}/>)}
        </ul>
    </div>
  )
}

export default MindCare;