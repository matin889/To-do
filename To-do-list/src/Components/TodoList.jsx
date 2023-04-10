import React, { useEffect, useState } from "react";
import {
  addTodosDB,
  deleteTodoDB,
  fetchFromDB,
  updateTodosDB,
} from "../DB/operation";
import Todo from "./Todo";

const TodoList = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo();
    setInput("");
  };

  const toggleCompleted = (id) => {
    toggled ? setToggle(false) : setToggle(true);
    console.log("in editTodo", id);
    const editedList = todos.map((item) => {
      if (id === item.id) {
        updateTodosDB(id, { ...item, completed: !item.completed });
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodos(editedList);
  };
  const addTodo = () => {
    const newTodo = {
      task: input,
      completed: false,
    };
    addTodosDB(newTodo);
    setTodos([...todos, newTodo]);
  };

  const editTodo = (id, newTask) => {
    const editedTodos = todos.map((item) => {
      if (id == item.id) {
        updateTodosDB(id, { ...item, task: newTask });
        return { ...item, task: newTask };
      }
      return item;
    });
    setTodos(editedTodos);
  };
  const deleteTodo = (id) => {
    const remainingTodos = todos.filter((item) => {
      return id !== item.id;
    });
    deleteTodoDB(id);
    setTodos(remainingTodos);
  };

  useEffect(() => {
    fetchFromDB().then((newTodo) => {
      setTodos(newTodo);
    });
  }, []);

  return (
    <div className="container">
      <h1>Todo List</h1>
      <form className="addForm" onSubmit={handleSubmit}>
        <label htmlFor="">Add a todo: </label>
        <input type="text" onChange={handleChange} value={input} />
        <button className="addButton" type="submit">
          Add
        </button>
      </form>
      <ul>
        {todos.map((item) => {
          return (
            <Todo
              key={item.id}
              id={item.id}
              task={item.task}
              completed={item.completed}
              toggleCompleted={toggleCompleted}
              editTodo={editTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
