import * as React from 'react';
import TodoListItem from './TodoListItem';

const todoList = [
    {
      id: 1,
      title: "Begin reading the assignments and watching the videos"
    },
    {
      id: 2,
      title: "Read the assigned chapter from the book"
    },
    {
      id: 3,
      title: "Complete the code assignment in the code editor"
    },
    {
      id: 4,
      title: "Push the assignment on GitHub"
    },
    {
      id: 5,
      title: "Answer the Mindset Assignment"
    },
    {
      id: 6,
      title: "Submit the homework"
    }
  ];
  
const TodoList = (props) => {
  
  return (
      <ol>
        {todoList.map(function(todo) {
          return (<TodoListItem key={todo.id} todo={todo} />);
        })}
      </ol>
  );
}
export default TodoList;