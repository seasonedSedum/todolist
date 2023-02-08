import React from "react";
import classes from "./TodoItem.module.css";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

const TodoItem = ({ id, text, done }) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  return (
    <div className={classes.itemBlock}>
      <div
        className={`${!done ? classes.checkCircle : classes.checkCircleDone}`}
        onClick={onToggle}
      >
        {done && <MdDone />}
      </div>
      <div className={`${!done ? classes.text : classes.textDone}`}>{text}</div>
      <div className={classes.removeBtn} onClick={onRemove}>
        <MdDelete />
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
