import React, { useState } from "react";
import "./css/MainContent.css";
import { v4 as uuidv4 } from "uuid";

const MainContent = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleBtn = () => {
    if(todo.trim() !== ""){
      setTodos([...todos, { id: uuidv4(), todo }]);
      setTodo("");
    }
  };
  const handleDelete = (e, id) => {
    let newTodos = todos.filter((item) => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") handleBtn();
  };

  return (
    <>
      <div className="container">
        <div className="first-part">
          <div className="heading">
            <h1>Schedule Your Day</h1>
          </div>
          <div className="input-content">
            <div className="main-input-field">
              <input
                type="text"
                placeholder="Enter the Task"
                value={todo}
                onChange={handleChange}
                onKeyDown={handleSubmit}
              />
              <button onClick={handleBtn}>Add Task</button>
            </div>
          </div>
        </div>
        <div className="second-part">
          <div className="sp-heading">
            <h2>Your Tasks</h2>
          </div>
          <div className="todos">
            <ul>
              {todos.length === 0 && (
                <div className="no-todos">
                  <h2> No tasks Scheduled today</h2>
                </div>
              )}
              {todos.map((item) => {
                return (
                  <li key={item.id}>
                    <div className="todo-card">
                      <div className="todo-name">
                        <h3> {item.todo}</h3>
                      </div>
                      <div className="todo-controls">
                        <button
                          onClick={(e) => {
                            handleDelete(e, item.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContent;
