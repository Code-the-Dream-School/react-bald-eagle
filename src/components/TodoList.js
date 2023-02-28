import * as React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.css';
import PropTypes from 'prop-types';
  
var checkmark = '\u2714';
var remove = '\u2718';
var edit = '\u2607'

const TodoList = ({ todoList, setTodoList, onRemoveTodo, onUpdateTodo }) => {  
  return (
    <>
      <table>
        <tbody>
          <tr className='column_headers'>
            <th>{checkmark}</th>
            <th>Title</th>
            <th>Notes</th>
            <th>{edit}</th>
            <th>{remove}</th>
          </tr>
          {todoList.map(function(todo) {
            return (
              <tr key={todo.id}>
                <TodoListItem 
                  todo={todo} 
                  todoList={todoList}
                  setTodoList={setTodoList}
                  onRemoveTodo={onRemoveTodo}
                  onUpdateTodo={onUpdateTodo}
                  defaultTitle={todo.title}
                />
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array, 
  setTodoList: PropTypes.func,
  onRemoveTodo: PropTypes.func, 
  onUpdateTodo: PropTypes.func
}

export default TodoList;