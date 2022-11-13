import React from "react";
import TodoListItem from "./TodoListItem";

// Delete the hard-coded todoList variable

// var todoList = [
//   {  id: 1,  title: "Complete assignment"  },
//   {  id: 2,  title: "Check email inbox"    },
//   {  id: 3,  title: "Complete lessons"     },
// ];

// Add props as a parameter to the TodoList functional component
function TodoList(props) {
    return (
      <ul>
        {/* Change todoList to reference props instead of the hard-coded variable */}
        {props.todoList.map(function (todo) {
          return <TodoListItem key={todo.id} todo={todo}/>;
        })}
      </ul>
    );
}

export default TodoList