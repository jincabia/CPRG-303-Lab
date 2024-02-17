/**
 * My To Do List App
 *
 * @format
 */

"use client"

import React from 'react';
import { SafeAreaView} from 'react-native';
import ToDoList from './components/todolist.jsx'
import ToDoForm from './components/todoform.jsx'


function App() {
  const [items, setItems] = React.useState(
    [
      'Do laundry',
      'Go to gym',
      'Walk dog'
    ]
  );

  return (
    <>
    <ToDoList items={items}></ToDoList>
    <ToDoForm></ToDoForm>
      </>
    );
}

export default App;
