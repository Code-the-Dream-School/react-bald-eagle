import React from 'react';
// import React, {useEffect} from 'react';
import ToDoList from './ToDoList';
import AddToDoForm from './AddTodoForm';


// can be written without initialValue in L7,8 and  after have || [] in L8 & omit the [] in L18
const useSemiPersistentState = (initialValue) => {
  const [todoList, setTodoList] = React.useState(JSON.parse(localStorage.getItem('savedTodoList')) || initialValue );

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(todoList))
  }, [todoList])
  
  return [todoList, setTodoList]  
}

function App() {  
  const [todoList, setTodoList] = useSemiPersistentState([]);    
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);  
  }
 
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Todo List</h1>
        <AddToDoForm onAddTodo={addTodo}/>
        <ToDoList todoList={todoList}/>    
        {/* <p>New Task: {newTodo}</p> */}
      </div>
    </>
  );
}

export default App;
