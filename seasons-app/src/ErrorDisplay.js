import React from "react";
import './style/ErrorDisplay.css'

const ErrorDisplay = (props) => {

    return (
        <div className="error-display">
            <h1>{props.errorMessage}</h1>
        </div>
    )
};

export default ErrorDisplay;