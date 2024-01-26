/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';

import ToDoList from './components/todolist.jsx'
import ToDoForm from './components/todoform.jsx'


function App() {
  return (
    <>
    <ToDoList></ToDoList>
    <ToDoForm></ToDoForm>
      </>
    );
}

export default App;
