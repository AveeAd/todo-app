import "./App.css";
import AddTodo from "./components/AddTodo/AddTodo";
import Filter from "./components/Filter.jsx/Filter";
import Header from "./components/Header/Header";
import TodoList from "./components/TodoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
        <AddTodo />
        <TodoList />
        <Filter />
      </div>
    </div>
  );
}

export default App;
