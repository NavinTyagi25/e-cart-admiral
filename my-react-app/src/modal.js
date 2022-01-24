import React from 'react';
const Modal = (props) => {
  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modalcontent" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">Header</div>
        <div className="modal-boday">Boday</div>
        <div className="modal-footer">
          <button type="button" name="Close" text="Close" onClick={props.onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
