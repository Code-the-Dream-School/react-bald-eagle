import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import style from "./TodoListItem.module.css";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

const TodoListItem = ({ todo, onRemoveTodo, onEditTodo, completeTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({ ...todo });

  const inputRef = useRef(null);

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setUpdatedTodo({
      ...updatedTodo,
      fields: {
        ...updatedTodo.fields,
        [name]: value,
      },
    });
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    onEditTodo(updatedTodo);
    setIsEditing(false);
  };

  useEffect(() => {
    if (inputRef.current && isEditing) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li
      className={todo.fields.IsComplete ? style.Complete : style.ListItem}
      title={
        todo.fields.IsComplete
          ? "Click to uncheck as Completed!"
          : "Click to check as Completed!"
      }
    >
      {isEditing ? (
        <form onSubmit={handleEditSubmit} className={style.EditForm}>
          <input
            type="text"
            value={updatedTodo.fields.Title}
            name="Title"
            onChange={handleEditChange}
            className={style.EditInput}
            ref={inputRef}
          />
          <button type="submit" className={style.SaveBtn}>
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className={style.CancelBtn}
          >
            Cancel
          </button>
        </form>
      ) : (
        <>
          <span onClick={() => completeTodo(todo.id)}>{todo.fields.Title}</span>
          <span className={style.ListItemIcons}>
            <FaEdit
              onClick={() => setIsEditing(true)}
              className={style.EditIcon}
            />

            <AiFillDelete
              className={style.DeleteIcon}
              onClick={() => onRemoveTodo(todo.id)}
            />
          </span>
        </>
      )}
    </li>
  );
};
TodoListItem.propTypes = {
  todo: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  onEditTodo: PropTypes.func,
  completeTodo: PropTypes.func,
};
export default TodoListItem;
