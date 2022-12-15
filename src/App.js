import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    new Promise ((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: {
            todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [],
          },
        });
      }, 2000);
    }).then((result) => {
      setTodoList([...result.data.todoList]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
    }, [todoList, isLoading]);
  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);  
  }

  const removeTodo = (item) => {
    const modifiedTodo = todoList.filter(
      (todo) => item.id !== todo.id
    );
    setTodoList(modifiedTodo);
  };
 
  return (
    <div>
      <h1>ToDo List</h1>

      <AddTodoForm onAddTodo={addTodo} />

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )
      }
    </div>
  );
}

export default App;
