import React from 'react';

// Empty array named todoList
const todoList = [{'id': 1, 'title':'homework' },
{'id': 2, 'title':'Work' },
{'id': 3, 'title':'Exercise' },

];


function App() {
  
  return (
    
    <div style={{ textAlign: 'center' }}>
     
        <h1>To Do List</h1>

        <ul>
          {todoList.map(function (item){
            return <li key={item.id.title}>{item.title}</li>
          })}; 
        </ul>
        
    
    </div>
  );
}

export default App;
