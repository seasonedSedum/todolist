import React, { useState } from "react";
import classes from "./TodoCreate.module.css";
import { MdAdd } from "react-icons/md";
import { useTodoDispatch, useTodoNextId } from "../TodoContext";

const TodoCreate = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const [value, setValue] = useState("");

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpenCreate(!openCreate);
  const onChange = (event) => setValue(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "CREATE",
      todo: {
        id: nextId.current,
        text: value,
        done: false,
      },
    });

    setValue("");
    setOpenCreate(false);
    nextId.current += 1;
  };

  return (
    <>
      {openCreate && (
        <div className={classes.insertFormPositioner}>
          <form className={classes.insertForm} onSubmit={onSubmit}>
            <input
              autoFocus
              className={classes.input}
              placeholder="할 일을 입력 후, Enter를 누르세요."
              onChange={onChange}
              value={value}
            />
          </form>
        </div>
      )}
      <button
        className={`${classes.createBtn} ${
          openCreate && classes.createBtnOpen
        }`}
        onClick={onToggle}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default React.memo(TodoCreate);
