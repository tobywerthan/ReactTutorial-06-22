function Modal(props) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.onClickCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onClickConfirm}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
