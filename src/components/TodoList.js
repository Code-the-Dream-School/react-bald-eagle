import React, { useState } from "react";
import PropTypes from "prop-types";
import TodoListItem from "./TodoListItem";
import { FaSortAlphaDown } from "react-icons/fa";
import { FaSortAlphaDownAlt } from "react-icons/fa";
import style from "./TodoListItem.module.css";

const TodoList = ({ todoList, onRemoveTodo, onEditTodo, completeTodo }) => {
  const [isSort, setIsSort] = useState(true);

  const handleSortZA = () => {
    todoList.sort((objA, objB) => {
      const titleA = objA.fields.Title;
      const titleB = objB.fields.Title;
      if (titleA > titleB) {
        return 1;
      } else if (titleA < titleB) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log("todos sorted A-Z");
    setIsSort(!isSort);
  };
  const handleSortAZ = () => {
    todoList.sort((objA, objB) => {
      const titleA = objA.fields.Title;
      const titleB = objB.fields.Title;
      if (titleA > titleB) {
        return -1;
      } else if (titleA < titleB) {
        return 1;
      } else {
        return 0;
      }
    });
    console.log("todos sorted Z-A");
    setIsSort(!isSort);
  };
  return (
    <>
      {!isSort ? (
        <>
          <span>
            Sort:{" "}
            <FaSortAlphaDown onClick={handleSortAZ} className={style.Sort} />
          </span>

          <ul>
            {todoList.map((todo) => (
              <TodoListItem
                key={todo.id}
                onRemoveTodo={onRemoveTodo}
                onEditTodo={onEditTodo}
                todo={todo}
                completeTodo={completeTodo}
              />
            ))}
          </ul>
        </>
      ) : (
        <>
          <span>
            Sort:{" "}
            <FaSortAlphaDownAlt onClick={handleSortZA} className={style.Sort} />
          </span>
          <ul>
            {todoList.map((todo) => (
              <TodoListItem
                key={todo.id}
                onRemoveTodo={onRemoveTodo}
                onEditTodo={onEditTodo}
                todo={todo}
                completeTodo={completeTodo}
              />
            ))}
          </ul>
        </>
      )}
    </>
  );
};

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};
export default TodoList;
