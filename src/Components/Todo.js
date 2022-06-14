import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";
function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function dismissHandler() {
    setModalIsOpen(false);
  }
  function confirmHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onClickCancel={dismissHandler} onClickConfirm={confirmHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={dismissHandler} />}
    </div>
  );
}

export default Todo;
