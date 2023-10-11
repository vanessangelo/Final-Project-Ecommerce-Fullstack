import React from "react";
import { useState } from "react";
import Button from "./Button";

export default function Modal({ isDisabled, modalTitle, toggleName, content, buttonCondition, buttonLabelOne, buttonLabelTwo, onClickButton, buttonTypeOne, buttonTypeTwo, buttonTypeToggle, onSubmit }) {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (e) => {
        e.preventDefault();
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    return (
        <>
            <Button
                isDisabled={isDisabled}
                label={toggleName}
                condition={buttonCondition}
                onClick={handleOpenModal}
                buttonType={buttonTypeToggle}
            ></Button>
            {openModal && (
                <div
                    id="staticModal"
                    tabIndex={-1}
                    aria-hidden="true"
                    className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-opacity-50 bg-gray-900 z-50 w-screen"
                >
                    <div className="relative w-full max-w-2xl max-h-full mx-3">
                        {/* Modal content */}
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            {/* Modal header */}
                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    {modalTitle}
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="staticModal"
                                    onClick={handleCloseModal}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            {/* Modal body */}
                            <div className="p-6 space-y-6">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-center mx-auto">
                                    {content}
                                </p>
                            </div>
                            {/* Modal footer */}
                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <Button
                                    data-modal-hide="staticModal"
                                    label={buttonLabelOne}
                                    buttonType={buttonTypeOne}
                                    condition="negative"
                                    onClick={handleCloseModal}
                                />
                                <Button
                                    label={buttonLabelTwo}
                                    data-modal-hide="staticModal"
                                    buttonType={buttonTypeTwo}
                                    condition="positive"
                                    onClick={() => {
                                        handleCloseModal();
                                        if (onClickButton) {
                                            onClickButton();
                                        };
                                        if (onSubmit) {
                                            onSubmit()
                                        }
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
