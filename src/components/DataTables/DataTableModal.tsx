import React from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    console.log("I am here")
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 999999,
            }}
        >
            <div
                style={{
                    background: "white",
                    height: '100%',
                    width: '100%',
                    margin: "15%",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                    overflow: 'auto'
                }}
            >
                {children}
            </div>
        </div>

        // <div id="default-modal" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
        //    Hello
        // </div>

    );
};

export default Modal;