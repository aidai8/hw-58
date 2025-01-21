import BackDrop from "../BackDrop/BackDrop.tsx";
import React from "react";

interface Props extends React.PropsWithChildren{
    show?: boolean;
    title?: string;
    onClose: React.MouseEventHandler;
}

const Modal: React.FC<Props> = ({show = false, title = 'Custom title', onClose, children}) => {
    return (
        <>
            <BackDrop show={show} onClickBackDrop={onClose}/>
            <div className="modal show" style={{display: show ? 'block' : 'none',
                position: 'fixed',
                width: '500px',
                height: '300px',
                overflow: 'auto',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header justify-content-between">
                            <h1 className="modal-title fs-5">{title}</h1>
                            <button
                                className="btn btn-danger"
                                onClick={onClose}
                            >Close</button>
                        </div>
                        <div className="p-3">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;