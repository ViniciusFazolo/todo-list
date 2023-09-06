import React from "react";

function TodoButtons({
  id,
  startEdit,
  setStartEdit,
  setTodoItem,
  handleDelete,
  todoCheck,
  todo,
}) {
  return (
    <div className={startEdit ? "hidden" : "text-white"}>
      <button
        className="mr-3 bg-red-500 px-2 py-1 rounded-xl md:hover:bg-red-800"
        onClick={() => handleDelete(id)}
      >
        Excluir
      </button>
      <button
        className="bg-green-500 px-2 py-1 rounded-xl mr-3 md:hover:bg-green-800"
        onClick={() => todoCheck(id)}
      >
        Check
      </button>
      <button
        className="bg-purple-500 px-2 py-1 rounded-xl md:hover:bg-purple-800"
        onClick={() => {
          setStartEdit(true);
          setTodoItem(todo);
        }}
      >
        Editar
      </button>
    </div>
  );
}

export default TodoButtons;
