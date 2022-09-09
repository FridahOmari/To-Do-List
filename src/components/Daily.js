import React from "react";
import Tasks from "./Tasks";
import { useEffect, useState } from "react";


function Daily(){
    const [dailyTodos, setdaily_todos] = useState([])

    useEffect(() => {
    
        fetch("http://localhost:9292/daily")
    
        .then(res => res.json())
        .then(data => {
          setdaily_todos(data)
        })
      },[])


      function handleUpdateTask(updatedItem) {
        const updatedItems = dailyTodos.map((item) => {
          if(item.id === updatedItem.id){
            return updatedItem;
          }
          return item;
        })
        setdaily_todos(updatedItems)
      }

      function handleDeletedTask(id){
        const updatedItems = dailyTodos.filter(item => item.id !== id)
        setdaily_todos(updatedItems)
        console.log(updatedItems)
      }

    return (
        <div >
            <div className="Container">
                <h4>Morning jog at 5: 00 am</h4>
                <h4>Departmental meeting with the team at 8:00 am</h4>
                <h4>One hour meditation at 4:30 pm</h4>
            </div>

            <ul className="Items">{dailyTodos.map(item => <Tasks 
            key={item.id}
            onUpdateTask={handleUpdateTask}
            onDeleteTask={handleDeletedTask}
            item={item}/>)}
            </ul>
        </div>
    )
}
export default Daily