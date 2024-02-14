import "./App.css";
import TodoList from "./components/TodoList/TodoList";

const todos = [
  { id: 1, text: "todo1", isFinished: true },
  { id: 2, text: "todo2", isFinished: false },
];

function App() {
  return <TodoList todos={todos} />;
}

export default App;
