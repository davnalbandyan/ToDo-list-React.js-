import TodoItem from "./TodoItem";

function TodoList({ listItem, removeTodo, doneTodo }) {
  return (
    <div className="todo-container">
      {listItem.map((item) => (
        <div key={item.id}>
          <TodoItem
            {...item} 
            removeTodo={removeTodo}
            doneTodo={doneTodo}
          />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
