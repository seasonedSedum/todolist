import { useTodoState } from "../TodoContext";
import classes from "./TodoHead.module.css";

const TodoHead = () => {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });

  return (
    <div className={classes.headblock}>
      <h1>{dateString}</h1>
      <div className={classes.day}>{dayName}</div>
      <div className={classes["tasks-left"]}>
        할 일 {undoneTasks.length}개 남음
      </div>
    </div>
  );
};

export default TodoHead;
