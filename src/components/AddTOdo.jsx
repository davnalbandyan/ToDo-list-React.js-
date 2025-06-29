import { useEffect, useRef, useState } from "react";

function AddTOdo({ addItem }) {
  const [value, setValue] = useState("");
  const ref = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    addItem({
      text: value,
      id: Date.now(),
      done: false,
    });
    setValue("");
  }
  useEffect(()=> {
    ref.current.focus()
  })

  return (
    <div className="add-todo-container">
      <form onSubmit={handleSubmit} className="add-todo-form">
        <input
          type="text"
          placeholder="Type a new task..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="todo-input"
          ref={ref}
        />
        <input type="submit" value="Add" className="todo-button" />
      </form>
    </div>
  );
}

export default AddTOdo;
