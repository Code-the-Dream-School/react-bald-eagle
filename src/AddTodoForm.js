import React from "react";
import InputWithLabel from "./InputWithLabel";

function AddToDoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = React.useState("");
  const [dueDate, setDueDate] = React.useState("");
  // const [anotherTitle, setAnotherTitle] = React.useState("");

  const handleAddTodo = async (event) => {
    event.preventDefault();

    // Preparing the payload to send to AirTable
    const payload = {
      title: todoTitle,
      // dueDate: dueDate,
    };

    const res = await fetch(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                ...payload,
              },
            },
          ],
        }),
      }
    );
    const result2 = await res.json();
    console.log("result2", result2);
  };

  const onChangeInput = (event) => {
    const value = event.target.value;
    const inputID = event.target.id;

    if (inputID == "title") {
      setTodoTitle(value);
    }

    if (inputID == "dueDate") {
      setDueDate(value);
    }

    // if (inputID == "anotherTitle") {
    //   setAnotherTitle(value);
    // }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel
        value={todoTitle}
        onChange={onChangeInput}
        label={"Title"}
        name="title"
        placeholder="Please enter your title"
        type="text"
      />
      <InputWithLabel
        value={dueDate}
        onChange={onChangeInput}
        label={"Due date"}
        name="dueDate"
        placeholder="YYYY-MM-DD"
        type="date"
      />
      {/* <InputWithLabel
        value={anotherTitle}
        onChange={onChangeInput}
        label={"Title 2"}
        name="anotherTitle"
        placeholder="Please enter your title"
        type="text"
      /> */}
      <button type="submit">Add</button>
    </form>
  );
}

export default AddToDoForm;
