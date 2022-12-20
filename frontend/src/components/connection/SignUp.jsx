import React from 'react';
import InputTemplate from "./InputTemplate";

const SignUp = () => {
    return (
        <div>
            <InputTemplate label={"Name"}/>
            <InputTemplate label={"Last Name"}/>
            <InputTemplate label={"Email"}/>
            <InputTemplate label={"Phone"}/>

            <InputTemplate label={"Password"}/>
            <InputTemplate label={"Repeat Password"}/>


            <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Submit!</label>
            </div>
        </div>
    );
};

export default SignUp;