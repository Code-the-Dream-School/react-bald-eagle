import React from 'react';
import TodoList from './TodoList'
import AddTodoForm from './AddTodoForm'

const App = () => {
  const [newTodo, setNewTodo] = React.useState('');

  const [todoList, setTodoList] = React.useState([])

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Todo List
      </h1>
  
      <AddTodoForm onAddTodo={setNewTodo} />

      <p> {newTodo} </p>
      
      <TodoList todoList={todoList} />
    </div>
  )
}
;

export default App;
