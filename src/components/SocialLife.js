import React from 'react';
import Tasks from "./Tasks";
import { useEffect, useState } from 'react';

function SocialLife() {
    const [socialTodos, set_social_todos] = useState([])


    useEffect(() => {
        fetch("http://localhost:9292/people")
        .then(res => res.json())
        .then(data => {
            set_social_todos(data)
        })
      },[])

      function handleUpdateTask(updatedItem) {
        const updatedItems = socialTodos.map((item) => {
          if(item.id === updatedItem.id){
            return updatedItem;
          }
          return item;
        })
        set_social_todos(updatedItems)
      }
    
      
      function handleDeletedTask(id){
        const updatedItems = socialTodos.filter(item => item.id !== id)
        set_social_todos(updatedItems)
        console.log(updatedItems)
    }
  return (
    <div>
        <div className="Container">
            <h4></h4>
            <h4></h4>
            <h4></h4>
        </div>
        <ul className="Items">{socialTodos.map(item => <Tasks 
        key={item.id}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeletedTask}
        item={item}/>)}
        </ul>
    </div>
  )
}

export default SocialLife