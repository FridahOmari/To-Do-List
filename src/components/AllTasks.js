import React from 'react'
import Tasks from './Tasks';
import { useState, useEffect } from 'react';

function AllTasks() {
  return (
    <div className="Container">
        <h4><em>ALL</em> Your Tasks, reminders, routines and goals will be displayed Here: </h4>
        <ul className="Items">{todos.map(item => <Tasks 
        key={item.id}
        onUpdateTask={handleUpdateTask}
        onDeleteTask={handleDeletedTask}
        sitem={item}/>)}
        </ul>
    </div>
  )
}

export default AllTasks;
