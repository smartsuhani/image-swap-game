import React from 'react';
import {
    Button,
    Modal,
    ModalBody,
    ModalFooter
} from 'react-bootstrap';
import ModalHeader from "react-bootstrap/ModalHeader";

export const SwapModal = ({
    show,
    hideModal,
    swapImages
}) => {
    const onSwap = () => {
        swapImages();
        hideModal();
    };
    return (
        <Modal
            size={'sm'}
            show={show}
            onHide={hideModal}
        >
            <ModalHeader>
                <strong>Image Swap</strong>
            </ModalHeader>
            <ModalBody>Wrong Match! Are you still want to swap images?</ModalBody>
            <ModalFooter>
                <Button onClick={onSwap} variant={'outline-primary'}>Yes</Button>
                <Button onClick={hideModal} variant={'outline-danger'}>No</Button>
            </ModalFooter>
        </Modal>
    )
};