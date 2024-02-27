/**
 * My To Do List App
 *
 * @format
 */

"use client"

import React from 'react';
import { SafeAreaView} from 'react-native';
import ToDoList from './todolist.jsx'
import ToDoForm from './todoform.jsx'


function App() {
  const [items, setItems] = React.useState(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]
  );

  const handleAddTask = (task) => {
    setItems([...items,task]);
  }



  return (
    <>
    <ToDoList items={items}></ToDoList>
    <ToDoForm addTask ={handleAddTask}></ToDoForm>
      </>
    );
}

export default App;
