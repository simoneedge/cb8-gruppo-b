import React from "react";
import "@/styles/ModalConfirmation.module.scss";

const ModalConfirmation = ({ onClose, children }) => {
  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
          {children}
          <button onClick={onClose}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirmation;
