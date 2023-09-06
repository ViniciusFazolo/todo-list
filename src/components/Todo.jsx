import React from "react";
import TodoButtons from "./TodoButtons";

function Todo({
  todo,
  startEdit,
  setStartEdit,
  setTodoItem,
  handleDelete,
  todoCheck,
}) {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row rounded-xl mb-4 px-3 bg-white py-3">
      <div className="overflow-x-auto max-w-[300px]">
        <h1
          className={
            todo.check ? "line-through text-2xl my-2" : "text-2xl my-2"
          }
        >
          {todo.title}
        </h1>
      </div>
      <TodoButtons
        id={todo.id}
        startEdit={startEdit}
        setStartEdit={setStartEdit}
        setTodoItem={setTodoItem}
        handleDelete={handleDelete}
        todoCheck={todoCheck}
        todo={todo}
      />
    </div>
  );
}

export default Todo;
