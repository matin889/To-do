import React, { useState } from "react";

const Todo = (props) => {
  const [input, setInput] = useState("");
  const [isUpdate, setisUpdate] = useState(false);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.editTodo(props.id, input);
    setInput("");
  };

  const defaultTemplete = (
    <form onSubmit={handleSubmit}>
      <input
        type="checkbox"
        id={props.id}
        defaultChecked={props.completed}
        onChange={() => props.toggleCompleted(props.id)}
      />
      {props.task}
      <div className="buttonsDiv">
        <button
          className="editButton"
          type="button"
          onClick={() => setisUpdate(true)}
        >
          Edit
        </button>
        <button
          className="deleteButton"
          type="button"
          onClick={() => props.deleteTodo(props.id)}
        >
          Delete
        </button>
      </div>
    </form>
  );

  const editTemplete = (
    <form onSubmit={handleSubmit}>
      <label> Update todo: {props.task}</label>
      <input type="text" id={props.id} onChange={handleChange} value={input} />
      {props.task}
      <div className="buttonsDiv">
        <button
          className="deleteButton"
          type="button"
          onClick={() => setisUpdate(false)}
        >
          Cancel
        </button>
        <button className="editButton" type="submit">
          Save
        </button>
      </div>
    </form>
  );

  return (
    <div>
      <li>{isUpdate ? editTemplete : defaultTemplete}</li>
    </div>
  );
};

export default Todo;
