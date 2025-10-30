import { useState } from "react";

function AddTodo({ addTodo }) {
  const [inputText, setInputText] = useState("");

  return (
    <>
      <input
        type="text"
        value={inputText}
        placeholder="add your next todo.."
        onChange={(e) => setInputText(e.currentTarget.value)}
      />
      <button
        onClick={() => {
          addTodo({ todoText: inputText });
          setInputText("");
        }}
      >
        Add
      </button>
    </>
  );
}
export default AddTodo;
