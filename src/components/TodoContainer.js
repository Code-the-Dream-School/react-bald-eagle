import React, { useEffect }  from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';
import './TodoContainer.css';

import PropTypes from 'prop-types';

const TodoContainer = ({ tableName, todoList, setTodoList, toggleAscDescSorting, setToggleAscDescSorting, isLoading, setIsLoading }) => {
    const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`

    const fetchTableData = async () => {
        const response = await fetch(`${url}`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
        });
        const data = await response.json();
        setTodoList(data.records);
        setIsLoading(false);

        data.records.sort((objectA, objectB) => {
            if (objectA.fields.Title < objectB.fields.Title) return -1;
            else if (objectA.fields.Title > objectB.fields.Title) return 1;
            else return 0;  
        })
    }

    useEffect(() => {
        fetchTableData();   
    }, [tableName, isLoading]); 

    useEffect(() => {
        if(!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList));
        }
    }, [todoList, isLoading]);

    const deleteTableData = async (id) => {
        const res = await fetch(
        `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}/${id}`,
        {
            method: 'DELETE',
            headers: {
            Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        return data;
    };

    const removeTodo = async (id) => {
        await deleteTableData(id);
        const newTodoList = todoList.filter(
        (todo) => todo.id !== id
        );
        setTodoList(newTodoList);
    };
        
    const updateTodo = async (editedRow) => {
        const res = await fetch(
            `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/${tableName}`,
            {
                method: 'PATCH',
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    records: [
                        editedRow,
                    ],
                }),
            }
        );
        const data = await res.json();

        data.records.sort((objectA, objectB) => {
            if (objectA.fields.Title < objectB.fields.Title) return -1;
            else if (objectA.fields.Title > objectB.fields.Title) return 1;
            else return 0;  
        })
        
        return data;
      };

    const ContainersSubComponent = () => {
        
        return (
            <>
                <h1 className='h1__todoContainer'>{tableName}</h1>
                <div className='add__form__container'>
                    <AddTodoForm 
                        tableName={tableName}
                        todoList={todoList} 
                        setTodoList={setTodoList} 
                        toggleAscDescSorting={toggleAscDescSorting}
                        setToggleAscDescSorting={setToggleAscDescSorting}
                    /> 
                </div>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <TodoList 
                        todoList={todoList} 
                        setTodoList={setTodoList}
                        onRemoveTodo={removeTodo} 
                        onUpdateTodo={updateTodo}
                    />
                )}
            </>
        )
    }
    return (
        <>
            <ContainersSubComponent tableName={tableName} />
        </>
    )
}

TodoContainer.propTypes = {
    tableName: PropTypes.string,
    todoList: PropTypes.array,
    setTodoList: PropTypes.func,
    toggleAscDescSorting: PropTypes.bool,
    setToggleAscDescSorting: PropTypes.func,
    isLoading: PropTypes.bool,
    setIsLoading: PropTypes.func,
}

export default TodoContainer;