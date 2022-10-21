import * as React from 'react';

const todoList = [
    {
      id: 1,
      title: "Begin reading the assignments and watching the videos"
    },
    {
      id: 2,
      title: "Read the assigned chapter from the book"
    },
    {
      id: 3,
      title: "Complete the code assignment in the code editor"
    },
    {
      id: 4,
      title: "Push the assignment on GitHub"
    },
    {
      id: 5,
      title: "Answer the Mindset Assignment"
    },
    {
      id: 6,
      title: "Submit the homework"
    }
  ];

export default function TodoList() {
    return (
        <ul>
        {todoList.map(function(item) {
          return (
            <li key={item.id}>
              {item.title}
            </li>
          );
        })}
      </ul>
    )
}