import React, { useState, useRef, useEffect } from 'react';
import { addTableData } from './utils';
import style from './Home.module.css';
import ReactJsAlert from "reactjs-alert";
import PropTypes from 'prop-types';

const plusSign = '➕';

const Home = ({ todoList, setTodoList }) => {
    const [todoTitle2, setTodoTitle2] = useState('');
    const [status, setStatus] = useState(false);
    
    const [type, setType] = useState("success");
    const [title, setTitle] = useState("");
    
    const inputRefTitle = useRef(null);
    useEffect(() => {
      if (inputRefTitle.current) {
        inputRefTitle.current.focus();
      }
    }, [todoTitle2]);

    const handleSubmitShortTerm = async (e) => {
        e.preventDefault();
        if (todoTitle2.trim().length > 0) {
            const newTodo = await addTableData("Short Term Goals", {Title: todoTitle2});
            const newTodoList = ([...newTodo.records, ...todoList]);
            setTodoList(newTodoList);
            setTodoTitle2('');
            setTitle('Successfully added!')
            setType('success')
            setStatus(true);
        } else {
            setStatus(true);
            setType('warning')
            setTitle('Insert a ToDo please...');
        }          
    }

    const handleSubmitLongTerm = async (e) => {
        e.preventDefault();
        if (todoTitle2.trim().length > 0) {
            const newTodo = await addTableData("Long Term Goals", {Title: todoTitle2});
            const newTodoList = ([...newTodo.records, ...todoList]);
            setTodoList(newTodoList)
            setTodoTitle2('');
            setTitle('Successfully added!')
            setType('success')
            setStatus(true);
        } else {
            setStatus(true);
            setType('warning')
            setTitle('Insert a ToDo please...');
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
                        <ReactJsAlert
                            status={status}
                            type={type} 
                            title={title}
                            quote="This is a dummy design that shows an example of reactjs-alert"
                            Close={() => setStatus(false)}
                        />
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