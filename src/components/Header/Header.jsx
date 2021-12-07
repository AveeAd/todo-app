import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <p className={classes.title}>Todo List</p>
    </div>
  );
};

export default Header;
