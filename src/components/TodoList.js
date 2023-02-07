import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";
import { useTodoState } from "../TodoContext";

const TodoList = () => {
  const todos = useTodoState();

  return (
    <div className={classes.listBlock}>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          key={todo.id}
          text={todo.text}
          done={todo.done}
        />
      ))}
    </div>
  );
};

export default TodoList;
