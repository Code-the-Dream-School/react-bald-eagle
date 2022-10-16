import React from "react";

const todoList = [
  { id: 1, title: "Creat React First App" },
  { id: 2, title: "Create a Todo List" },
  { id: 3, title: "Complete Assignment" },
];
function App() {
  return (
    <div>
     
      <h1>Todo List</h1>
      {/* Create an unordered list (<ul>) */}
      <ul>
        {todoList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
      {/* It could also be done this way */}
      {/* <hr />
      <TodoList /> */}
    </div>
  );
}

// function TodoList() {
//   return (
//     <ul>
//       {todoList.map((item) => {
//         return <li key={item.id}>{item.title}</li>;
//       })}
//     </ul>
//   );
// }
export default App;
