import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import Todos from './Components/Todos'
import TodoForm from './Components/TodoForm'


const App = () => {
  const [todos, setTodos] = useState([])

  // call back, dependencies
  useEffect(() => {
    const localTodos = localStorage.getItem('todos');
    console.log({ localStorage })
    console.log("first use effect");
    if (localTodos) {
      setTodos(JSON.parse(localTodos))
    }
  }, [])

  const addTodos = async todo => {
    setTodos(await [...todos, todo])
  }

  // the moment todos got update, call all in the useEffect call back
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log("second use effect");

  }, [todos])

  const markComplete = id => {
    // allow all value to new list except id one
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todos todos={todos} markComplete={markComplete} />
      <TodoForm addTodos={addTodos} />
    </Container>
  )
}

export default App;