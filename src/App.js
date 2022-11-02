import React from "react";
import AddToBucketListForm from "./AddToBucketlistForm";
import BucketList from "./Bucketlist";
import { useState } from "react";

function App() {
  const [newBucketlist, setNewTodo] = useState("");
  console.log(newBucketlist);

  return (
    <div>
      <h1>Bucket List</h1>
      <AddToBucketListForm onAddTodo={setNewTodo} />
      <p>{newBucketlist}</p>
      <BucketList />
    </div>
  );
}
export default App;
