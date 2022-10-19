import React from "react";

const bucketList = [
  { id: 1, title: "Walk over hot coals" },
  { id: 2, title: "Learn to fly a helicopter" },
  { id: 3, title: "Snorkel the great barrier reef" },
  { id: 4, title: "Eat crocodile in the amazon" },
  { id: 5, title: "Box a kangaroo" },
];

function App() {
  return (
    <div>
      <h1>Bucket List</h1>
      <ul>
        {bucketList.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}
export default App;
