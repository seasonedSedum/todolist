import { useState } from "react";
import classes from "./TodoCreate.module.css";
import { MdAdd } from "react-icons/md";

const TodoCreate = () => {
  const [openCreate, setOpenCreate] = useState(false);
  const toggleHandler = () => setOpenCreate(!openCreate);

  return (
    <>
      {openCreate && (
        <div className={classes.insertFormPositioner}>
          <div className={classes.insertForm}>
            <input
              className={classes.input}
              placeholder="할 일을 입력 후, Enter를 누르세요."
            />
          </div>
        </div>
      )}
      <button
        className={`${classes.createBtn} ${
          openCreate && classes.createBtnOpen
        }`}
        onClick={toggleHandler}
      >
        <MdAdd />
      </button>
    </>
  );
};

export default TodoCreate;
