import React, { useState, useRef, useEffect } from "react";
import InputWithLabel from "./InputWithLabel";
import style from './AddTodoForm.module.css';
import SortingToggle from "./sortingToggle";
import {addTableData} from './utils';
import PropTypes from 'prop-types';

const addButton = '➕';

function AddTodoForm({ todoList, setTodoList, toggleAscDescSorting, setToggleAscDescSorting, tableName }) {
  const [todoTitle, setTodoTitle] = useState(''); 
  const [todoNote, setTodoNote] = useState('');
  
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const newTodo = await addTableData(tableName, {Title: todoTitle, Note: todoNote}); 
    const newTodoList = ([...newTodo.records, ...todoList]);
    newTodoList.sort((objectA, objectB) => {
      if (objectA.fields.Title < objectB.fields.Title) return -1;
      else if (objectA.fields.Title > objectB.fields.Title) return 1;
      else return 0;  
    });
    setTodoList(newTodoList)
    setTodoTitle('');
    setTodoNote('');
  }

  const inputRefTitle = useRef(null);
    useEffect(() => {
      if (inputRefTitle.current) {
        inputRefTitle.current.focus();
      }
    }, [todoTitle]);

    return (
      <>
        <form onSubmit={handleFormSubmit} className={style.formStyle}>
          <InputWithLabel 
            refTitleBox={inputRefTitle}
            isThisrequired={true}
            givenValue={todoTitle} 
            handleChange={(e) => setTodoTitle(e.target.value)} 
            givenName="title"
            focusOnChange='title'
            forPlaceholder="type here..."
            className={style.formStyle}
          >
              Title: 
          </InputWithLabel>
          <button className={style.form_button}>{addButton}</button>
          <InputWithLabel 
            givenValue={todoNote} 
            isThisrequired={false}
            handleChange={(e) => setTodoNote(e.target.value)} 
            givenName="noteDescription"
            forPlaceholder="optional notes here..."
            className={style.formStyle}
          >
              Note: 
          </InputWithLabel >
        </form>   

        <SortingToggle 
          todoList={todoList} 
          setTodoList={setTodoList} 
          toggleAscDescSorting={toggleAscDescSorting}
          setToggleAscDescSorting={setToggleAscDescSorting}
        /> 
      </>
    );
};

AddTodoForm.propTypes = {
  todoList: PropTypes.array, 
  setTodoList: PropTypes.func,
  toggleAscDescSorting: PropTypes.bool, 
  setToggleAscDescSorting: PropTypes.func, 
  tableName: PropTypes.string,
}

export default AddTodoForm;