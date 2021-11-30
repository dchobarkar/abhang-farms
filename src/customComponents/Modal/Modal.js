import React from "react";
import { makeStyles } from "@material-ui/styles";
import Modal from "react-modal";

import ModalCSS from "./Modal.css";

// CSS
const useStyles = makeStyles({ ...ModalCSS });

// Bind modal to appElement
Modal.setAppElement("#root");

// Driver component
function CustomModal(props) {
  const classes = useStyles();

  return (
    <Modal
      className={classes.root}
      isOpen={props.isOpen}
      onRequestClose={() => props.setIsOpen(false)}
    >
      {props.children}
    </Modal>
  );
}

export default CustomModal;
