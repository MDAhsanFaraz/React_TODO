import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo() {
  const [todoText, setTodoText] = useState("");
  const { todos, dispatch } = useContext(TodoContext);
  function addTodo(todoText) {
    dispatch({ type: "add_todo", payload: { todoText } });
  }
  return (
    <>
      <input
        placeholder="add your next todo..."
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        value={todoText}
      />
      <button
        onClick={() => {
          addTodo(todoText);
          setTodoText("");
        }}
      >
        Submit
      </button>
    </>
  );
}
export default AddTodo;
