import classes from "./TodoHead.module.css";

const TodoHead = () => {
  return (
    <div className={classes.headblock}>
      <h1>2023년 1월 27일</h1>
      <div className={classes.day}>금요일</div>
      <div className={classes["tasks-left"]}>할 일 2개 남음</div>
    </div>
  );
};

export default TodoHead;
