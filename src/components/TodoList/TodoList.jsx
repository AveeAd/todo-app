import classes from "./Todo.module.css";
import Todo from "./Todo";
import { connect } from "react-redux";
import { fetchAllTodos } from "../../actions/fetchActions";
import { useEffect } from "react";

const TodoList = ({ todos, fetchAllTodos }) => {
  useEffect(() => {
    fetchAllTodos();
  }, []);
  return (
    <div className={classes.todoList}>
      {todos.todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps, { fetchAllTodos })(TodoList);
