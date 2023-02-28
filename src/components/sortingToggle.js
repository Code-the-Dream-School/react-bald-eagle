import React from 'react';
import PropTypes from 'prop-types';

const arrowUp = '▲';
const arrowDown = '▼'

const SortingToggle = ({ todoList, setTodoList, toggleAscDescSorting, setToggleAscDescSorting }) => {

    const handleDescending = () => {
        const listToBeSorted = ([...todoList]);
        listToBeSorted.sort((a, b) => {
        return b.createdTime.localeCompare(a.createdTime);  
        });
        setTodoList(listToBeSorted); 
        setToggleAscDescSorting(true);
    }

    const handleAscending = () => {
        const listToBeSorted = ([...todoList]);
        listToBeSorted.sort((a, b) => {
        return a.createdTime.localeCompare(b.createdTime);  
        });
        setTodoList(listToBeSorted);
        setToggleAscDescSorting(false);
    }

    return (
        <>      
            { toggleAscDescSorting ? (
                <button onClick={handleAscending}>{arrowUp}</button>
            ) : (
                <button onClick={handleDescending}>{arrowDown}</button>
            )}
        </>
    )
}

SortingToggle.propTypes = {
    todoList: PropTypes.array, 
    setTodoList: PropTypes.func,
    toggleAscDescSorting: PropTypes.bool, 
    setToggleAscDescSorting: PropTypes.func, 
}

export default SortingToggle;
