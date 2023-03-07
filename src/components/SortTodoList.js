import React from 'react';
import { useState } from 'react';

const SortTodoList = ({ todoList }) => {
  const [sortAscending, setSortAscending] = useState(true);

  const toggleSortOrder = () => {
    setSortAscending(!sortAscending);
  }

  const sortedRecords = [...todoList].sort((a, b) => {
    const titleA = a.fields.Title.toLowerCase();
    const titleB = b.fields.Title.toLowerCase();
    if (titleA < titleB) {
      return sortAscending ? -1 : 1;
    } else if (titleA > titleB) {
      return sortAscending ? 1 : -1;
    } else {
      return 0;
    }
  });

  return (
    <div>
      <button onClick={toggleSortOrder}>
        Sort by Title ({sortAscending ? 'Asc' : 'Desc'})
      </button>
      <ul>
        {sortedRecords.map(todoList => (
          <li key={todoList.fields.Title}>{todoList.fields.Title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SortTodoList;