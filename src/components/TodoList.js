import TodoItem from "./TodoItem";
import classes from "./TodoList.module.css";

const TodoList = () => {
  return (
    <div className={classes.listBlock}>
      <TodoItem text="프로젝트 생성하기" done={true} />
      <TodoItem text="컴포넌트 스타일링 하기" done={true} />
      <TodoItem text="Context 만들기" done={false} />
      <TodoItem text="기능 구현하기" done={false} />
    </div>
  );
};

export default TodoList;
