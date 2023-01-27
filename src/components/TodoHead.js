import classes from "./TodoHead.module.css";

const TodoHead = () => {
  return (
    <div className={classes.headblock}>
      <h1>2019년 7월 10일</h1>
      <div className={classes.day}>수요일</div>
      <div className={classes["tasks-left"]}>할 일 2개 남음</div>
    </div>
  );
};

export default TodoHead;
