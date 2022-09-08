import React from 'react'

function MindCare() {
  return (
    <div>
        <div className="Container">
            <h4></h4>
            <h4></h4> 
            <h4></h4>
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