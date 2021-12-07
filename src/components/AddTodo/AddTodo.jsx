import classes from "./AddTodo.module.css";
import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todoAction";
const AddTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const onAdd = (e) => {
    e.preventDefault();
    let url = "http://localhost:5000/todos";
    addTodo(url, { title: todo, completed: false });
    setTodo("");
  };
  return (
    <form className={classes.container} onSubmit={onAdd}>
      <input
        type="text"
        className={classes.textInput}
        placeholder="Enter your todo"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button className={classes.btn}>Add</button>
    </form>
  );
};

export default connect(null, { addTodo })(AddTodo);
