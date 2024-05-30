import React, { useState } from "react";

const listOfTodo = ["Read", "Write", "Sing"];
function Todo() {
  const [listoftodo, setlistoftodo] = useState([...listOfTodo]);
  const [todos, settodos] = useState("");
  console.log(listoftodo, "listoftodo");
  return (
    <>
      <input
        type="text"
        value={todos}
        onChange={(e) => settodos(e.target.value)}
      ></input>
      <button
        onClick={(e) =>
          setlistoftodo((prev) => {
            return [...prev, todos];
          })
        }
      >
        Add Todo
      </button>
      {listoftodo.map((todo) => (
        <div
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid black",
            margin: "10px",
          }}
        >
          {todo}
        </div>
      ))}
    </>
  );
}

export default Todo;
