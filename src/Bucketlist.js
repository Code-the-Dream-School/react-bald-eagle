import React from "react";
import BucketListItem from "./BucketlistListItem";

const bucketList = [
  { id: 1, title: "Walk over hot coals" },
  { id: 2, title: "Learn to fly a helicopter" },
  { id: 3, title: "Snorkel the great barrier reef" },
  { id: 4, title: "Eat crocodile in the amazon" },
  { id: 5, title: "Box a kangaroo" },
];

const BucketList = () => {
  return (
    <ul>
      {bucketList.map((todo) => {
        return <BucketListItem key={todo.id} todo={todo} />;
      })}
    </ul>
  );
};

export default BucketList;
