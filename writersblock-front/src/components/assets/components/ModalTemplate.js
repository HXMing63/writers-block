import React from "react";

const ModalTemplate = ({ isOpen, onClose, children }) => {
	if (!isOpen) {
		return null;
	}

	return (
		<div className="fixed inset-0 z-110 overflow-auto bg-black bg-opacity-50 flex">
			<div className="relative p-8 bg-white w-fit max-w-full m-auto flex-col flex rounded-lg">
				<span
					className="absolute top-0 right-0 cursor-pointer p-4"
					onClick={onClose}
				>
                    <div className="text-2xl tracking-wider hover:bg-gray-300 rounded h-8 w-8 flex justify-center items-center">
                        X
                    </div>
				</span>
				{children}
			</div>
		</div>
	);
};

export default ModalTemplate;
