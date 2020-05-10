import React from 'react';
import { Modal } from 'react-bootstrap';

const DModal = (props) => (
    <Modal centered
        show={props.show}
        onHide={props.modalhandler}>

        <Modal.Body>
            {props.children}
        </Modal.Body>

    </Modal>
)

export default DModal;