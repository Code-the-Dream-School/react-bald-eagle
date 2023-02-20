import * as React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
  
var checkmark = '\u2714';
var remove = '\u2718';

const TodoList = ({ todoList, setTodoList, onRemoveTodo }) => {  
  return (
    <>
      <table>
        <tbody>
          <tr className='column_headers'>
            <th>{checkmark}</th>
            <th>Title</th>
            <th>Notes</th>
            <th>{remove}</th>
          </tr>
          {todoList.map(function(todo) {
            return (
              <tr key={todo.id}>
                <TodoListItem 
                  todoList={todoList}
                  setTodoList={setTodoList}
                  todo={todo} 
                  onRemoveTodo={onRemoveTodo}
                />
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};
export default TodoList;