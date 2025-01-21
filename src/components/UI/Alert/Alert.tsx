
import React from "react";

interface Props extends React.PropsWithChildren {
    type: "primary" | "success" | "danger" | "warning";
    onDismiss?: () => void;
}

const Alert: React.FC<Props> = ({ type, onDismiss, children }) => {
    return (
        <div className={`alert alert-${type} d-flex justify-content-between align-items-center`} role="alert">
            <span>{children}</span>
            {onDismiss && (
                <button
                    type="button"
                    className="btn-close"
                    onClick={onDismiss}
                    aria-label="Close"
                ></button>
            )}
        </div>
    );
};

export default Alert;