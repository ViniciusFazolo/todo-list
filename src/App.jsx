import { useState, useEffect } from "react";
import InputEdit from "./components/InputEdit";
import InputNewTodo from "./components/InputNewTodo";
import Todo from "./components/Todo";

function App() {
  const getTodos = () => {
    let list = localStorage.getItem("todos");

    if (list) return JSON.parse(localStorage.getItem("todos"));
    else return [];
  };

  const [todos, setTodos] = useState(getTodos());
  const [input, setInput] = useState("");
  const [id, setId] = useState(Math.floor(Math.random() * 10000));
  const [startEdit, setStartEdit] = useState(false);
  const [todoItem, setTodoItem] = useState({});

  const handleDelete = (id) => {
    const filteredItems = todos.filter((item) => item.id !== id);
    setTodos(filteredItems);
  };

  const todoCheck = (id) => {
    const updateItem = todos.map((item) =>
      item.id === id ? { ...item, check: !item.check } : item
    );
    setTodos(updateItem);
  };

  const todoEdit = (id) => {
    const editItem = todos.map((item) =>
      item.id === id ? { ...item, title: input } : item
    );
    setTodos(editItem);
    setStartEdit(false);
  };

  const newTodo = () => {
    if (input === "") return;

    setTodos([...todos, { id: id, title: input, check: false }]);
    setId(Math.floor(Math.random() * 10000));
    setInput("");
  };

  const saveTodosInLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  useEffect(() => {
    saveTodosInLocalStorage();
  }, [todos]);

  return (
    <main>
      <h1 className="mt-5 text-3xl text-center font-mono text-white">
        TODO-LIST
      </h1>
      <section className="max-w-[600px] h-auto m-auto p-4">
        <InputEdit
          input={input}
          setInput={setInput}
          title={todoItem.title}
          id={todoItem.id}
          startEdit={startEdit}
          todoEdit={todoEdit}
        />

        <InputNewTodo
          startEdit={startEdit}
          input={input}
          setInput={setInput}
          newTodo={newTodo}
        />

        <div className="mt-5">
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              startEdit={startEdit}
              setStartEdit={setStartEdit}
              setTodoItem={setTodoItem}
              handleDelete={handleDelete}
              todoCheck={todoCheck}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
