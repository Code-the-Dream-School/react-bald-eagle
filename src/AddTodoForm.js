import React, { useState, useEffect } from "react";
import InputWithLabel from "./InputWithLabel";
import style from './AddTodoForm.module.css';

const addTableData = async (newRow) => {
    const response = await fetch(`https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              ...newRow,
            },
          },
        ],
      }),
    });
    const data = await response.json();
    return data;
  }

//   console.log('this is response from addTableData', addTableData())

function AddTodoForm({fetchTableData}) {
    const [todoList, setTodoList] = useState(''); // chanded from string to an array

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // console.log('submitting form', event.target.title.value)
        const title = event.target.todoTitle.value;
        const note = event.target.todoNote.value;
        const completed = event.target.checked;
        const data = await addTableData({ title, note, completed }) // ({ title, note, completed })
        // debugger
        setTodoList([...data.records, todoList]); 
        event.target.reset();
    }

    useEffect(() => {
        fetchTableData();   
      }, []);

    return (
        <form onSubmit={handleFormSubmit} className={style.formStyle}>
            <InputWithLabel 
                givenValue={todoList.todoTitle} 
                handleChange={e => setTodoList(e.target.value)} 
                givenId="todoTitle"
                givenName="title"
                // focusOnChange={todoList.todoTitle}
            >
                Title: 
            </InputWithLabel>
            <InputWithLabel 
                givenValue={todoList.todoNote} 
                handleChange={e => setTodoList(e.target.value)} 
                givenId="todoNote"
                givenName="noteDescription"
                // focusOnChange={todoList.todoNote}
            >
                Note: 
            </InputWithLabel>
            <button>Add</button>
        </form>
    );
};

export default AddTodoForm;