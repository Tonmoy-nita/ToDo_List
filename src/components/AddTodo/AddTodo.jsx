import { useState } from "react";

function AddTodo({ updateList }) {
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
          updateList(inputText);
          setInputText("");
        }}
      >
        Add
      </button>
    </>
  );
}
export default AddTodo;
