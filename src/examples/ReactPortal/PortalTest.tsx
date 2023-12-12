import React, {memo, useState} from 'react';
import Modal from "./modal/ModalPortal";

import './PortalTest.scss';



type TPortalInfo = {
    name: string;

}
export const Portal = memo((props: React.PropsWithChildren<TPortalInfo>) => {
    const createPortalHandler = () => {
        setIsOpen(true)
    };
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return <>
        <Modal isOpen={isOpen}>test modal content</Modal>
        <button onClick={(e) => createPortalHandler()}>create portal</button>
    </>
})
