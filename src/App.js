import { useState } from "react";
import "./index.css"
import AddTOdo from "./components/AddTOdo";
import TodoList from "./components/TodoList";
function App() {
  const [todos, setTodos] = useState([]);

  function addTOdo(todo) {
    if (!todo.text) return;

    const newTOdo = [todo, ...todos];
    setTodos(newTOdo);

   
  }

  function removeItem(id) {
    const removeTodo = todos.filter((el) => el.id !== id);
    console.log(id)
    setTodos(removeTodo);
    
  }

function done(id) {
  const doneTodo = todos.map((el) =>
    el.id === id ? { ...el, done: !el.done } : el
  );
  setTodos(doneTodo);
}

  return (
    <div>
      <AddTOdo addItem={addTOdo} />
      <TodoList listItem = {todos} removeTodo = {removeItem} doneTodo = {done}/>
    </div>
  );
}

export default App;
