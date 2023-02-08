import React, { useState } from "react";
import classes from "./TodoItem.module.css";
import { MdDone, MdDelete } from "react-icons/md";
import { useTodoDispatch } from "../TodoContext";

const TodoItem = ({ id, text, done }) => {
  const [inputFormOpen, setinputFormOpen] = useState(false);
  const [inputText, setInputText] = useState(text);

  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: "TOGGLE", id });
  const onRemove = () => dispatch({ type: "REMOVE", id });

  const textChangeHandler = () => setinputFormOpen(true);

  const onChange = (event) => setInputText(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    dispatch({ type: "UPDATE", id, text: inputText });

    setinputFormOpen(false);
  };

  return (
    <div className={classes.itemBlock}>
      <div
        className={`${!done ? classes.checkCircle : classes.checkCircleDone}`}
        onClick={onToggle}
      >
        {done && <MdDone />}
      </div>
      {!inputFormOpen && (
        <div
          className={`${!done ? classes.text : classes.textDone}`}
          onClick={textChangeHandler}
        >
          {text}
        </div>
      )}
      {inputFormOpen && (
        <form className={classes.insertForm} onSubmit={onSubmit}>
          <input
            autoFocus
            className={classes.input}
            onChange={onChange}
            value={inputText}
          />
        </form>
      )}
      <div className={classes.removeBtn} onClick={onRemove}>
        <MdDelete />
      </div>
    </div>
  );
};

export default React.memo(TodoItem);
