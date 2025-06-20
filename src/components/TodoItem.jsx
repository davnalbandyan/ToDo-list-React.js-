function TodoItem({ removeTodo, doneTodo,id,text,done  }) {


  return (
    <div>
      <div className={`todo-item ${done ? "done" : ""}`}>
        <span className="todo-text">{text}</span>
        <div className="todo-actions">
          <i className="fa-solid fa-check" onClick={() => doneTodo(id)}></i>
          <i className="fa-solid fa-trash" onClick={() => removeTodo(id)}></i>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
