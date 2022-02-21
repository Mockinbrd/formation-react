import React, {ReactElement, useEffect} from 'react';
import {createPortal} from "react-dom";

const modalNode = document.getElementById('modal');

function Modal({children}: { children?: ReactElement }): React.ReactPortal {

    let element = document.createElement('div');

    useEffect(() => {

        modalNode.appendChild(element);

        return () => {
            modalNode.removeChild(element);
        }

    }, [])

    return createPortal(children, modalNode)

}

export default Modal;