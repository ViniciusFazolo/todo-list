import React from "react";

function InputNewTodo({ startEdit, input, setInput, newTodo }) {
  return (
    <form className={startEdit ? "hidden" : "flex rounded-xl"}>
      <input
        type="text"
        className="bg-white w-full pl-4 rounded-tl-xl rounded-bl-xl"
        placeholder="digite uma nova tarefa"
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <button
        className="py-3 px-4 bg-blue-400 text-white  rounded-tr-xl rounded-br-xl md:hover:bg-blue-800"
        onClick={(e) => {
          e.preventDefault()
          newTodo();
        }}
        type="submit"
      >
        Enviar
      </button>
    </form>
  );
}

export default InputNewTodo;
