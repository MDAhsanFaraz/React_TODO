function Todo({ editTodo, text, isFinished, id, deleteTodo }) {
  return (
    <div>
      <input type="checkbox" checked={isFinished} />
      <span>{text}</span>
      <button onClick={editTodo}>Edit</button>
      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}
export default Todo;
