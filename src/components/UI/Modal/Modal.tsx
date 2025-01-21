import BackDrop from "../BackDrop/BackDrop.tsx";
import React from "react";

export interface ButtonConfig {
    type: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
    label: string;
    onClick: React.MouseEventHandler;
}

interface Props extends React.PropsWithChildren{
    show?: boolean;
    title?: string;
    onClose: React.MouseEventHandler;
    buttons?: ButtonConfig[];
}

const Modal: React.FC<Props> = ({show = false, title = 'Custom title', onClose, children, buttons = []}) => {
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
                        <div className="modal-header">
                            <h1 className="modal-title fs-5">{title}</h1>
                        </div>
                        <div className="p-3">
                            {children}
                        </div>
                        <div className="modal-footer">
                            {buttons.map((button, index) => (
                                <button
                                    key={index}
                                    className={`btn btn-${button.type} me-2`}
                                    onClick={button.onClick}
                                >
                                    {button.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Modal;