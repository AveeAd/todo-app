import classes from "./Filter.module.css";
import { connect } from "react-redux";
import {
  fetchAllTodos,
  fetchActiveTodos,
  fetchCompletedTodos,
} from "../../actions/fetchActions";
const Filter = (props) => {
  const onClick = (e) => {
    switch (e.target.value) {
      case "all":
        props.fetchAllTodos();
        break;
      case "active":
        props.fetchActiveTodos();
        break;
      case "completed":
        props.fetchCompletedTodos();
        break;
      default:
        props.fetchAllTodos();
        break;
    }
  };
  return (
    <div className={classes.container}>
      <span>Show:</span>
      <button className={classes.btn} value="all" onClick={onClick}>
        All
      </button>
      <button className={classes.btn} value="active" onClick={onClick}>
        Active
      </button>
      <button className={classes.btn} value="completed" onClick={onClick}>
        Completed
      </button>
    </div>
  );
};

export default connect(null, {
  fetchAllTodos,
  fetchActiveTodos,
  fetchCompletedTodos,
})(Filter);
