import React from "react";

const AddToBucketList = () => {
  return (
    <form>
      <label htmlFor="BucketListTitle">Title</label>
      <input id="BucketListTitle"></input>
      <button>Add</button>
    </form>
  );
};

export default AddToBucketList;
