import React from "react";

function InputEdit({ input, setInput, title, id, startEdit, todoEdit }) {
  const updateTodo = () => {
    if (input === "") return;

    todoEdit(id);
    setInput("");
  };

  return (
    <form className={startEdit ? "flex" : "hidden"}>
      <input
        type="text"
        className="bg-white w-full pl-4 rounded-tl-xl rounded-bl-xl"
        placeholder={`Atualizar tarefa "${title}"`}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        className="py-3 px-4 text-white bg-purple-500 rounded-tr-xl rounded-br-xl md:hover:bg-purple-800"
        onClick={(e) => {
          e.preventDefault();
          updateTodo();
        }}
      >
        Atualizar
      </button>
    </form>
  );
}

export default InputEdit;
