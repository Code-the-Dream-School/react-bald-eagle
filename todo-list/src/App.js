import React from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const App = () => {
  const [todoList, setTodoList] = React.useState([])

  const addTodo = (newTodo) => {
    setTodoList(newTodo, ...todoList)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Todo List
      </h1>
  
      <AddTodoForm onAddTodo={addTodo} />
      
      <TodoList todoList={todoList} />
    </div>
  )
}
;

export default App;
