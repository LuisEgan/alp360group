import React, { FC } from "react";

import "./styles.scss";

interface IModal {
  show: boolean;
}

const Modal: FC<IModal> = (props) => {
  const { children, show } = props;

  if (!show) return null;

  return <div className="modal">{children}</div>;
};

Modal.defaultProps = {};

export default Modal;
