import React from "react";

const Input = ({label}) => {
    return (
        <div className="form-control w-full max-w-xs pl-50">
            <label className="label">
                <span className="label-text">{label}</span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        </div>
    )
}

export default Input;