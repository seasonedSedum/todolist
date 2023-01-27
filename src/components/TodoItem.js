import React from "react";
import classes from "./TodoItem.module.css";
import { MdDone, MdDelete } from "react-icons/md";

const TodoItem = ({ text, done }) => {
  return (
    <div className={classes.itemBlock}>
      <div
        className={`${!done ? classes.checkCircle : classes.checkCircleDone}`}
      >
        {done && <MdDone />}
      </div>
      <div className={`${!done ? classes.text : classes.textDone}`}>{text}</div>
      <div className={classes.removeBtn}>
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoItem;
