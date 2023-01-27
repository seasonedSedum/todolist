import classes from "./TodoTemplate.module.css";

const TodoTemplate = (props) => {
  return <div className={classes.box}>{props.children}</div>;
};

export default TodoTemplate;
