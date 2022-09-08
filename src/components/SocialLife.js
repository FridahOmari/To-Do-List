import React from 'react'

function SocialLife() {
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