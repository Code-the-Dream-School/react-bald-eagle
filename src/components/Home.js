import React, { useState, useRef, useEffect } from 'react';
import { addTableData } from './utils';
import style from './Home.module.css';
import PropTypes from 'prop-types';

const plusSign = '➕';

const Home = ({ todoList, setTodoList }) => {
    const [todoTitle2, setTodoTitle2] = useState('');
    
    const inputRefTitle = useRef(null);
    useEffect(() => {
      if (inputRefTitle.current) {
        inputRefTitle.current.focus();
      }
    }, [todoTitle2]);

    const handleSubmitShortTerm = async (e) => {
        e.preventDefault();
        if (todoTitle2.length > 0) {
            const newTodo = await addTableData("Short Term Goals", {Title: todoTitle2});
            const newTodoList = ([...newTodo.records, ...todoList]);
            setTodoList(newTodoList);
            setTodoTitle2('');
            alert("Successfully added to the Short Term List");
        } else {
            alert("Insert your next ToDo in the input box");
        }
    }

    const handleSubmitLongTerm = async (e) => {
        e.preventDefault();
        if (todoTitle2.length > 0) {
            const newTodo = await addTableData("Long Term Goals", {Title: todoTitle2});
            const newTodoList = ([...newTodo.records, ...todoList]);
            setTodoList(newTodoList)
            setTodoTitle2('');
            alert("Successfully added to the Long Term List");
        } else {
            alert("Insert your next ToDo in the input box");
        }
    }

    return (
        <>
            <h1>What do you have ToDo next?</h1>
            <div className={style.imageAndForm}>
                <img src="https://cdn.pixabay.com/photo/2014/03/25/16/28/todo-list-297195__340.png" alt='list'/>
                <form className={style.formHome}>
                    <input 
                        ref={inputRefTitle}
                        id='todoTitle' 
                        type='text'
                        name='title' 
                        value={todoTitle2} 
                        onChange={(e) => setTodoTitle2(e.target.value)} 
                        required
                        placeholder='write here...'
                        className={style.inputsHome}
                    />
                    <div className={style.buttonsAlign}>
                        <button onClick={handleSubmitShortTerm} className={style.buttonHome}>{plusSign} Short Term</button>
                        <button onClick={handleSubmitLongTerm} className={style.buttonHome}>{plusSign} Long Term</button> 
                    </div>  
                </form>
            </div>
            
        </>
    )
}

Home.propTypes = {
    todoList: PropTypes.array, 
    setTodoList: PropTypes.func,
}

export default Home;