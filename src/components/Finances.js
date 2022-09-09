import React from "react";
import Tasks from "./Tasks";
import { useEffect, useState } from "react";


function Finances () {

    const [workTasks, setworkTasks] = useState([])


    useEffect(() => {
    
        fetch("http://localhost:9292/finances")
    
        .then(res => res.json())
        .then(data => {
            setworkTasks(data)
        })
      },[])

      function handleUpdateTask(updatedItem) {
        const updatedItems = workTasks.map((item) => {
          if(item.id === updatedItem.id){
            return updatedItem;
          }
          return item;
        })
        setworkTasks(updatedItems)
      }

      function handleDeletedTask(id){
        const updatedItems = workTasks.filter(item => item.id !== id)
        setworkTasks(updatedItems)
        console.log(updatedItems)
      }  

    return (
        <div >
            <div className="Container">
                <h4>Weekly savings of Ksh. 40,000</h4>
                <h4>Monthly chama of 150,000</h4>
            </div>
            <ul className="Items">{workTasks.map(item => <Tasks 
            key={item.id}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeletedTask}
            item={item}/>)}
            </ul>
        </div>
    )
}

export default Finances;