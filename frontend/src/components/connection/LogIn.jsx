import React from 'react';
import InputTemplate from "./InputTemplate";

const LogIn = () => {
    return (
        <div>
            <InputTemplate label={"Email / Phone"}/>
            <InputTemplate label={"Password"}/>


            <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Submit!</label>
            </div>
        </div>
    );
};

export default LogIn;