import classes from "./Todo.module.css";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import { updateTodo, deleteTodo } from "../../actions/todoAction";
import { connect } from "react-redux";

const Todo = ({ todo, updateTodo, deleteTodo }) => {
  const [isCompleted, setIsCompleted] = useState(todo.completed);
  const onChange = () => {
    setIsCompleted(!isCompleted);
    let url = `http://localhost:5000/todos/${todo.id}`;
    updateTodo(url, {
      id: todo.id,
      title: todo.title,
      completed: !isCompleted,
    });
  };
  const onDelete = () => {
    let url = `http://localhost:5000/todos/${todo.id}`;
    deleteTodo(url, todo.id);
  };
  return (
    <div className={classes.todo}>
      <div>
        <input
          type="checkbox"
          className={classes.check}
          checked={isCompleted}
          onChange={onChange}
        />
        <p
          className={classes.title}
          style={{
            textDecoration: `${isCompleted ? "line-through" : "none"}`,
          }}
        >
          {todo.title}
        </p>
      </div>
      <FaTimes onClick={onDelete} style={{ cursor: "pointer" }} />
    </div>
  );
};

export default connect(null, { updateTodo, deleteTodo })(Todo);
