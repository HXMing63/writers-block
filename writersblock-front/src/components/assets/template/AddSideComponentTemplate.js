import React from "react";

const AddSideComponent = ({ title, saveFunc, resetForm, children }) => {
	return (        
		<div className="mx-auto p-4 md:border-l border-brand-darkest">
            <div className="text-thin-wider-2xl text-gray-200">
                <h1>{title}</h1>
            </div>
            {children}
			<div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
				<button className="btn-error" onClick={resetForm}>
					Clear
				</button>
				<button className="btn-success" onClick={(e) => saveFunc(e)}>
					Save
				</button>
			</div>
            
        </div>
    );
};

export default AddSideComponent;
