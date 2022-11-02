import react from "react";

// Empty array named todoList
const todoList = [{'id': 1, 'title':'homework' },
{'id': 2, 'title':'Work' },
{'id': 3, 'title':'Exercise' },
];

//
function TodoList(){

    return(
        <ul>
          {todoList.map(function (item){
            return <li key={item.id.title}>{item.title}</li>
          })}
        </ul>
    )
}


export default TodoList;